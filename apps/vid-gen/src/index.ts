import { Hono } from "hono";
import OpenAI from "openai";
import { cors } from "hono/cors";  // Import CORS if needed

const client = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

const app = new Hono();

// Enable CORS if needed (optional)
app.use('*', cors());

app.post("/generate", async (c) => {  // Handle POST request
  const { query } = await c.req.json();  // Get the query from the request body
  if (!query) {
    return c.text("Please provide the 'query' parameter", 400);
  }

  try {
    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-4o-mini",  // Ensure correct model is used
    });
    //console.log(chatCompletion.choices[0].message.content)
    if (chatCompletion.choices.length === 0) {
      return c.text("An error occurred while generating the response", 500);
    }

    return c.json({ result: chatCompletion.choices[0].message.content });
  } catch (error: unknown) {
    console.error("Error:", error);
    return c.text("An error occurred while generating the response", 500);
  }
});

export default {
  port: 3001,
  fetch: app.fetch,
  idleTimeout: 30,
};
