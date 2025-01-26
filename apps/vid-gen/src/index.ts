import { Hono } from "hono";
import * as fs from "node:fs";
import { $ } from "bun";
import OpenAI from "openai";
import { cors } from "hono/cors"; // Import CORS if needed
import { Blob } from "node:buffer";
import { Data } from "hono/dist/types/context";
import { open } from "node:fs";
import {
  ChatCompletionMessage,
  ChatCompletionMessageParam,
} from "openai/resources";

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

  let history: ChatCompletionMessageParam[] = [
    {
      role: "system",
      name: "system",
      content: `
            you are a helpful math robot that helps explain math concepts to students.
            `,
    },
    {
      role: "user",
      name: "user",
      content: userQuery.toString(),
    },
  ];

  try {
    const scriptCompletion = await client.chat.completions.create({
      messages: history,
      model: "gpt-4o-mini",
    });

    history.push({
      role: "user",
      name: "ChatGPT",
      content: scriptCompletion.choices[0].message.content!,
    });

    history.push({
      role: "system",
      name: "system",
      content: `
            Now output manim code that will make an animation using the script. Make sure you only respond with python code and that the code will run and 
            have a result without modification. make sure the code is not commented and does not have 
            three backticks before or after the code. Also make sure that everything is 
            essentially in one scene by clearing the screen before you start a new screen. you must use the voice over function to create voice over explanations of each scene. here is some example code of a voiceover being used to voice over a circle being drawn. Your code should be following the same format, but producing a much longer video:
            ----------------------------------------------------------------
            from manim import *
            from manim import Tex, MathTex
            from manim_voiceover import VoiceoverScene
            from manim_voiceover.services.gtts import GTTSService

            class MyAwesomeScene(VoiceoverScene):
              def construct(self):
                self.set_speech_service(GTTSService())

                with self.voiceover(text="This circle is drawn as I speak.") as tracker:
                    self.play(Create(circle))
            ----------------------------------------------------------------
            
            The dimensions of the video will be 854x480 at 24fps, so make sure content does not get cut off.

            The total animation time should be atleast a minute long, so take your time to explain the concepts in detail. below is an example script that explains the fast fourier transform. however it still needs voiceover
            from manim import *
            also make sure to use the Tex or MathTex functions instead of the text function so that the math is correctly formatted

`,
            
    });

    const chatCompletion = await client.chat.completions.create({
      messages: history,
      model: "gpt-4o-mini",
    });

    // console.log(chatCompletion.choices[0].message.content);

    if (scriptCompletion.choices.length === 0) {
      return c.text("Unable to generate a response at this time", 500);
    }
    const scriptFile = fs.openSync("script.py", "w");
    fs.writeFileSync(scriptFile, chatCompletion.choices[0].message.content!);
    fs.closeSync(scriptFile);

    try {
      await $`manim -ql script.py -c manim.cfg -o script.mp4`;
    } catch (err: any) {
      console.log(`Failed with code ${err.exitCode}`);
      console.log(err.stdout.toString());
      console.log(err.stderr.toString());
    }
    const vid = fs.readFileSync("./media/script.mp4");

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
