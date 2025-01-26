"use client"
import Image, { type ImageProps } from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  const [prompt, setPrompt] = useState("")
  const [responseReady, setResponseReady] = useState(0)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("prompt:", prompt);
    setPrompt("");
  };
  return (
    <>
    
    <div className="flex items-center justify-center flex-col h-screen w-full bg-[hsl(var(--secondary))] p-4 border border-b-black">
     <h1 className="text-5xl font-bold p-6 text-[hsl(var(--primary))] ">
      ManImCooked
      </h1> 
      {responseReady == 1 &&
      <video controls className="w-full h-1/2 bg-black rounded-lg">
        <source src="/FFTExplanation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      }
      <form className="flex flex-row my-4 w-1/2 text-xl" onSubmit={handleSubmit}>
        <Input 
          type="text"
          className="mx-2 h-12 text-xl placeholder:text-xl"
          placeholder="type your prompt here"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button className="bg-[hsl(var(--primary))] mx-2 h-12" type="submit">
          Submit
        </Button>
      </form>

      <div>
        <Button onClick={() => setPrompt("explain graphs")} className=" rounded-full mx-2 bg-sky-400 hover:bg-sky-600">Graphing</Button>
        <Button onClick={() => setPrompt("explain pythagorean theorem")} className=" rounded-full mx-2 bg-red-400 hover:bg-red-600">Pythagorean theorem</Button>
        <Button onClick={() => setPrompt("explain fast fourier transform")} className=" rounded-full mx-2 bg-amber-400 hover:bg-amber-600">Fast Fourier Transform</Button>
        <Button onClick={() => setPrompt("explain addition")} className=" rounded-full mx-2 bg-emerald-400 hover:bg-emerald-600">Addition</Button>
        <Button onClick={() => setPrompt("explain Integrals")} className=" rounded-full mx-2 bg-violet-400 hover:bg-violet-600">Integrals</Button>

        
      </div>
      
    </div>
    <h1 className="text-3xl font-bold p-4 text-[hsl(var(--primary))]">
        Other Resources!
      </h1>
    <div className="flex items-center flex-col h-screen w-full bg-[hsl(var(--background))] p-4">
      
      
    <Accordion type="single" collapsible className="w-1/2">
      <AccordionItem value="web-resources">
        <AccordionTrigger className="text-xl">Web Resources</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col space-y-2">

            {/* 1. Khan Academy */}
            <div>
              <a
                href="https://www.khanacademy.org/"
                className="text-sky-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Khan Academy
              </a>
            </div>

            {/* 2. Math Is Fun */}
            <div>
              <a
                href="https://www.mathsisfun.com/"
                className="text-sky-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Math Is Fun
              </a>
            </div>

            {/* 3. WolframAlpha */}
            <div>
              <a
                href="https://www.wolframalpha.com/"
                className="text-sky-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                WolframAlpha
              </a>
            </div>

            {/* 4. Desmos */}
            <div>
              <a
                href="https://www.desmos.com/"
                className="text-sky-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Desmos
              </a>
            </div>

            {/* 5. Purplemath */}
            <div>
              <a
                href="https://www.purplemath.com/"
                className="text-sky-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Purplemath
              </a>
            </div>

            {/* 6. MathWorld */}
            <div>
              <a
                href="https://mathworld.wolfram.com/"
                className="text-sky-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                MathWorld
              </a>
            </div>

            {/* 7. Paul's Online Math Notes */}
            <div>
              <a
                href="https://tutorial.math.lamar.edu/"
                className="text-sky-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Paul's Online Math Notes
              </a>
            </div>

            {/* 8. Coolmath */}
            <div>
              <a
                href="https://www.coolmath.com/"
                className="text-sky-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coolmath
              </a>
            </div>

            {/* 9. Brilliant */}
            <div>
              <a
                href="https://brilliant.org/"
                className="text-sky-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brilliant
              </a>
            </div>

            {/* 10. Coursera (Math Courses) */}
            <div>
              <a
                href="https://www.coursera.org/search?query=math"
                className="text-sky-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coursera Math
              </a>
            </div>
            
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>

      
      
      
      
    </div>
    </>
  );
}
// route is /generate
