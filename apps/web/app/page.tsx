"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import WebResources from "@/components/ui/webResources";
const videoIds = [
  "IQqtsm-bBRU",
  "r6sGWTCMz2k",
  "ltLUadnCyi0",
  "IHZwWFHWa-w",
  "IQqtsm-bBRU",
  "KuXjwB4LzSA",
];
export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [responseReady, setResponseReady] = useState(0);
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
      const res = await fetch(
        `http://localhost:3001/generate?query=${prompt}`,
        {
          method: "GET", // Ensure it's a POST request
          headers: {
            "Content-Type": "video/mp4",
            Accept: "binary",
          }, // Send the prompt in the body
        }
      );

      const data = await res.blob();
      const vidUrl = URL.createObjectURL(data);
      if (res.ok) {
        setResponse(vidUrl); // Display result from the API
      } else {
        console.error("Error:", res.text);
        setResponse("Error generating response");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse("An error occurred while generating the response");
    }

    setResponseReady(1);

    // Clear the input after submission
    setPrompt("");
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Automatically go to the next slide every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [videoIds.length]);

  return (
    <>
      <div className="flex items-center justify-center flex-col h-screen w-full bg-[hsl(var(--secondary))] p-4 border border-b-black">
        <h1 className="text-5xl font-bold p-6 text-[hsl(var(--primary))] ">
          ManImCooked
        </h1>
        {responseReady == 1 && (
          <video controls className="w-full h-1/2 bg-black rounded-lg">
            <source src="/FFTExplanation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <form
          className="flex flex-row my-4 w-1/2 text-xl"
          onSubmit={handleSubmit}
        >
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
        {error && (
          <div className="text-red-500 mt-2">Invalid input, please enter a valid input</div>
        )}


        <div>
          <Button
            onClick={() => setPrompt("explain graphs")}
            className=" rounded-full mx-2 bg-sky-400 hover:bg-sky-600"
          >
            Graphing
          </Button>
          <Button
            onClick={() => setPrompt("explain pythagorean theorem")}
            className=" rounded-full mx-2 bg-red-400 hover:bg-red-600"
          >
            Pythagorean theorem
          </Button>
          <Button
            onClick={() => setPrompt("explain fast fourier transform")}
            className=" rounded-full mx-2 bg-amber-400 hover:bg-amber-600"
          >
            Fast Fourier Transform
          </Button>
          <Button
            onClick={() => setPrompt("explain addition")}
            className=" rounded-full mx-2 bg-emerald-400 hover:bg-emerald-600"
          >
            Addition
          </Button>
          <Button
            onClick={() => setPrompt("explain Integrals")}
            className=" rounded-full mx-2 bg-violet-400 hover:bg-violet-600"
          >
            Integrals
          </Button>
        </div>
      </div>
      <h1 className="text-3xl font-bold p-4 text-[hsl(var(--primary))]">
        Popular Math Videos
      </h1>
      <div className="flex items-center flex-col w-full p-4 bg-gray-200 rounded-lg h-[500px]">
        <div className="relative overflow-hidden w-full h-full">
          {/* Slides Wrapper */}
          <div
            className="flex h-full w-1/2 transition-transform duration-1000 ease-in-out"
            style={{
              // Translate by -100% per slide to show each of the 6 videos in sequence
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {videoIds.map((id, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full h-full flex items-center justify-center p-2"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}?rel=0`}
                  title={`YouTube video ${id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <h1 className="flex flex-left text-3xl font-bold p-4 text-[hsl(var(--primary))]">
        Other Resources
      </h1>
      <div className="flex items-center flex-col h-96 w-full bg-[hsl(var(--background))] p-4 bg-gray-200">
        <WebResources />
        {error && (
          <div className="text-red-500 mt-2">Please enter a valid input</div>
        )}

        {response && <div className="mt-4 text-white">{response}</div>}
      </div>
    </>
  );
}
