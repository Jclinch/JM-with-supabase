import React from "react";
import { FlipWords } from "./ui/flip-words";
import { HeroScroll } from "./VectorScroll";
import "@/components/styles/HeroButton.css";
import "@/components/styles/homepage-effects.css";
import "@/app/globals.css";

export function FlipWordsDemo() {
  const words = ["responsive", "better", "cute", "beautiful", "modern"];

  return (
    <div className="header flex flex-col md:flex-row h-[950px] md:h-[992px] px-4 bg-[#030303]">
      <div className="header-content flex flex-col text-center md:text-left justify-center md:w-1/2 mt-[170px] md:mt-[20px] ml-0 md:ml-[90px] slide-fade-in">
        <div className="text-lg md:text-2xl font-bold text-neutral-300 dark:text-neutral-400">
          Welcome to Jclinch Multimedia
        </div>
        <div
          className="hero-text text-4xl md:text-7xl font-extrabold mt-4 w-full md:w-[81.16%]"
          style={{
            background: "linear-gradient(to right, #a7a9be, #fffffe)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Your trusted partner <br /> in software development
          <div className="text-lg md:text-xl font-bold text-[#a7a9be] dark:text-neutral-300 mt-[20px] md:mt-0 w-full md:w-[84.74%]">
            Crafting <FlipWords words={words} /> Web Apps and Websites that drive success.
            <div className="mt-4">
              <button className="more-button mt-[80px] md:mt-0 mx-auto block md:float-left z-50">
                <span className=" relative">Learn more</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="header-scroll scrolling-tab hidden md:flex justify-end items-center md:w-1/2 mt-60 md:mt-90">
        <HeroScroll />
      </div>
    </div>
  );
}
