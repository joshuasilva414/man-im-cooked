"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!prompt.trim()) {
      setError(true);
      return;
    }
    setError(false);

    console.log("User Prompt:", prompt);

    try {
      // Ensure this is a POST request
      const res = await fetch("http://localhost:3001/generate", {
        method: "POST",  // Ensure it's a POST request
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: prompt }),  // Send the prompt in the body
      });

      const data = await res.json();
      if (res.ok) {
        setResponse(data.result);  // Display result from the API
      } else {
        console.error("Error:", data.message);
        setResponse("Error generating response");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse("An error occurred while generating the response");
    }

    // Clear the input after submission
    setPrompt("");
  };

  return (
    <div className="flex items-center flex-col h-screen w-full bg-[hsl(var(--background))] p-4">
      <h1 className="text-4xl font-bold p-4 text-[hsl(var(--primary))]">ManImCooked</h1>
      <video controls className="w-full h-1/2 bg-black rounded-lg">
        <source src="/FFTExplanation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <form className="flex flex-row my-4" onSubmit={handleSubmit}>
        <Input
          className="mx-2"
          placeholder="Type your prompt here"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button className="bg-[hsl(var(--primary))] mx-2" type="submit">Submit</Button>
      </form>

      {error && <div className="text-red-500 mt-2">Please enter a valid input</div>}

      {response && <div className="mt-4 text-white">{response}</div>}
    </div>
  );
}
