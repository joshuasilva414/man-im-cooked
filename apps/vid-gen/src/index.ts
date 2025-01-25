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
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-4o',
  });
}

main();