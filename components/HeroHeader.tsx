import React from "react";
import { FlipWords } from "./ui/flip-words";
import { HeroScroll } from "./VectorScroll";
import "@/components/styles/HeroButton.css"


export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className=" flex flex-col md:flex-row h-[750px] md:h-[800px] px-4  bg-[#0f0e17] ">
      <div className="heading flex flex-col text-center md:text-left justify-center md:w-1/2 mt-[170px] md:mt-[20px]">
        <div className="text-lg md:text-2xl font-bold text-neutral-300 dark:text-neutral-400">
          Welcome to Jclinch Multimedia
        </div>
        <div className="text-4xl md:text-5xl font-extrabold text-[#fffffe] dark:text-neutral-600 mt-4">
          Your trusted partner <br /> in software development
          <div className="text-lg md:text-xl font-bold text-[#a7a9be] dark:text-neutral-300 mt-[20px] md:mt-0">
            Crafting <FlipWords words={words} /> Web Apps and Websites that
            drive success.
            <div>
            <button className="more-button float-none md:float-left mt-4">Learn more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="scrolling-tab hidden md:flex justify-end items-center md:w-1/2 mt-60 md:mt-90">
        <HeroScroll />
      </div>
    </div>
  );
}
