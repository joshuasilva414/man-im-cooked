"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!prompt.trim()) {
      setError(true); // Show the error message
      return;
    }
    setError(false); // Hide the error message if input is valid
    console.log("User Prompt:", prompt);

    try {
      // Make the API request to the backend
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: prompt }),
      });

      // Handle response
      const data = await res.json();
      if (res.ok) {
        setResponse(data.result); // Set the response from OpenAI
      } else {
        console.error("Error:", data.message);
        setResponse("Error generating response 1");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error generating response 2");
    }
    // Clear the input after submission
    setPrompt("");
  };

  return (
    <div className="flex items-center flex-col h-screen w-full bg-[hsl(var(--background))] p-4">
      <h1 className="text-4xl font-bold p-4 text-[hsl(var(--primary))]">
        ManImCooked
      </h1>
      <video controls className="w-full h-1/2 bg-black rounded-lg">
        <source src="/FFTExplanation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <form className="flex flex-row my-4" onSubmit={handleSubmit}>
        <Input
          className="mx-2"
          placeholder="type your prompt here"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button className="bg-[hsl(var(--primary))] mx-2" type="submit">
          Submit
        </Button>
      </form>

      {/* Error message */}
      {error && (
        <div className="text-red-500 mt-2">
          The prompt cannot be empty. Please enter a valid input.
        </div>
      )}

      {/* Display OpenAI response */}
      {response && (
        <div className="mt-4 p-4 bg-red-100 rounded-lg">
          <h3 className="text-xl font-semibold">OpenAI Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
