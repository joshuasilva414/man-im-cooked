import { Hono } from "hono";
import * as fs from "node:fs/promises";
import { $ } from "bun";
import OpenAI from "openai";
import { cors } from "hono/cors"; // Import CORS if needed

const client = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

const app = new Hono();

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
          content:
            "you are a helpful math robot that outputs manim python code for the given prompt. make sure you only respond with python code and that the code will run and have a result without modification. make sure the code is not commente and does not have ''' before or after the code. Also make sure that everything is essentially in one scene by clearing the screen before you start a new screen. feel free to use the voice over function to create voice over explanations of each scene",
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

    return c.body(vid.toString(), 200, {
      "Content-Type": "video/mp4",
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
