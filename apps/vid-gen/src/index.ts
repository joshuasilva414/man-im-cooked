import { Hono } from "hono";
import * as fs from "node:fs/promises";
import { $ } from "bun";
import OpenAI from "openai";
import { cors } from "hono/cors"; // Import CORS if needed
import { Blob } from "node:buffer";
import { Data } from "hono/dist/types/context";

const client = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

const app = new Hono();

app.use(cors());

app.get("/generate", async (c) => {
  const userQuery = await c.req.query("query");

  if (!userQuery) {
    return c.text("Please provide the 'query' parameter", 400);
  }

  try {
    const chatCompletion = await client.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `
            you are a helpful math robot that outputs manim python code for the given prompt. 
            make sure you only respond with python code and that the code will run and 
            have a result without modification. make sure the code is not commented and does not have 
            three apostrophies before or after the code. Also make sure that everything is 
            essentially in one scene by clearing the screen before you start a new screen. feel 
            free to use the voice over function to create voice over explanations of each scene. here is some example code of a voiceover being used to voice over a circle being drawn:
            from manim_voiceover import VoiceoverScene
            from manim_voiceover.services.gtts import GTTSService

            class MyAwesomeScene(VoiceoverScene):
            def construct(self):
              self.set_speech_service(GTTSService())

              with self.voiceover(text="This circle is drawn as I speak.") as tracker:
                  self.play(Create(circle))
            `,
        },
        { role: "user", content: userQuery.toString() },
      ],
      model: "gpt-4o-mini",
    });

    console.log(chatCompletion.choices[0].message.content);

    if (chatCompletion.choices.length === 0) {
      return c.text("Unable to generate a response at this time", 500);
    }

    await fs.writeFile(
      "manim/script.py",
      chatCompletion.choices[0].message.content!
    );

    // await $`manim -ql script.py`;

    const vid = await fs.readFile(
      "./media/videos/main/1080p60/DefaultTemplate.mp4"
    );

    return c.body(vid as any, 200, {
      "Content-Type": "video/mp4",
      "Content-Encoding": "binary",
      "Content-Length": vid.length.toString(),
    });
  } catch (error: unknown) {
    console.error("Error:", error);
    return c.text(
      "An unknown error occurred while generating the response",
      500
    );
  }
});

export default {
  port: 3001,
  fetch: app.fetch,
  idleTimeout: 30,
};
