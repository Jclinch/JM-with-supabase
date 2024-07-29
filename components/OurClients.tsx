"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function OurClients() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-[#020202] dark:white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    src: "/images/NFF-logo.jpg", // Update this path to match your public folder structure
    name: "",
    title: "Nigerian Fintech Festival",
  },
  {
    src: "/images/jm-logo.png", // Add appropriate image paths
    name: "",
    title: "Jclinch Multimedia",
  },
  {
    src: "/images/YFF-logo.jpeg",
    name: "",
    title: "Youths For Fintech",
  },
  {
    src: "/images/milky-logo.png",
    name: "",
    title: "Milkyway & Prime Solicitors",
  },
];
