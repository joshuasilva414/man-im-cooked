"use client"
import Image, { type ImageProps } from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
export default function Home() {
  const [prompt, setPrompt] = useState("")
 
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("prompt:", prompt);
    setPrompt("");
  };
  return (
    <div className="flex items-center  flex-col h-screen w-full bg-[hsl(var(--background))] p-4">
      <h1 className="text-4xl font-bold p-4 text-[hsl(var(--primary))]">
        ManImCooked
      </h1>
      <video controls className="w-full h-1/2 bg-black rounded-lg">
        <source src="/FFTExplanation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <form className="flex flex-row my-4" onSubmit={handleSubmit}>
        <Input className="mx-2"
         placeholder="type your prompt here"
         value={prompt}
         onChange={(e) => setPrompt(e.target.value)}/>
        <Button className="bg-[hsl(var(--primary))] mx-2" type="submit">Submit</Button>
      </form>
      
      
      
    </div>

  );
}
