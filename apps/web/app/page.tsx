import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-24 w-full">
      <h1 className="text-4xl font-bold">
        ManImCooked
      </h1>
    </div>
  );
}
