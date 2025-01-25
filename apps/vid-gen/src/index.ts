import { Hono } from 'hono'
import OpenAI from 'openai';

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], 
});

async function main() {
  try {
    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-4o-mini',
    });
    console.log(chatCompletion.choices[0].message.content);
  } catch (error: unknown) {
    // Type narrowing for known error shape
    if (error instanceof Error) {
      // If the error is an instance of Error, log it
      console.error("Error:", error.message);
    } else {
      // If it's not an instance of Error, handle it here (for example, log it generically)
      console.error("An unknown error occurred:", error);
    }
  }
}

main();
