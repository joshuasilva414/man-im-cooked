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
  const [response, setResponse] = useState("/FFTExplanation.mp4");
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
    setResponseReady(1);

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
        setResponseReady(2);
        setResponse(vidUrl); // Display result from the API
      } else {
        console.error("Error:", res.text());
        setResponse("Error generating response");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse("An error occurred while generating the response");
    }


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
        {responseReady == 1 && 
        <div className="w-full h-1/2 bg-white rounded-lg border border-black flex justify-center items-center flex-col">
            
          <div role="status">
          <svg className="w-12 h-12 text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
              stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path
              d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
              stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
            </path>
          </svg>
              <span className="sr-only">Loading...</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mt-4">

          your request is being processed, please wait...
          </h2>

        </div>
        }
        {responseReady == 2 && (
          <video controls className="w-full h-1/2 bg-black rounded-lg">
            <source src={response} type="video/mp4" />
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
          <div className="text-red-500 mt-2">
            Invalid input, please enter a valid input
          </div>
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
      </div>
    </>
  );
}
