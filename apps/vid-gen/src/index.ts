import { Hono } from "hono";
import * as fs from "node:fs/promises";
import { $ } from "bun";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

const app = new Hono();

app.get("/generate", async (c) => {
  const userQuery = c.req.query("query");
  if (!userQuery) {
    return c.text("Please provide the 'query' parameter", 400);
  }
  try {
    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: "user", content: userQuery }],
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

    await $`manim -ql script.py`;

    const vid = await fs.readFile(
      "manim/media/videos/main/1080p60/DefaultTemplate.mp4"
    );

    return c.body(vid.toString(), 200, {
      "Content-Type": "video/mp4",
      "Content-Length": vid.length.toString(),
    });

    return c.text(chatCompletion.choices[0].message.content!);
  } catch (error: unknown) {
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
