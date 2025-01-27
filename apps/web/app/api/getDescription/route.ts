import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    // Safely call the OpenAI API from the server
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY, // OK on server
    });

    const textDescription = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // or "gpt-4"
      messages: [
        {
          role: "system",
          content:
            "You are a math helper that gives plaintext and LaTeX explanations for math questions.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const content = textDescription.choices?.[0]?.message?.content ?? "";
    return NextResponse.json({ description: content });
  } catch (error: any) {
    console.error("OpenAI error:", error?.message || error);
    return NextResponse.json(
      { error: "Failed to get description" },
      { status: 500 }
    );
  }
}
