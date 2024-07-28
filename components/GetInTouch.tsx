"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Image from "next/image";
const people = [
  {
    id: 1,
    name: "LinkedIn",
    designation: "https://www.linkedin.com/in/sunnyugwu/",
    image:
    "/images/icons/linkedin.png",
},
  {
    id: 2,
    name: "Whatsapp",
    designation: "https://wa.me/+2348102811912",
    image:
    "/images/icons/whatsapp.png",
  },
  {
    id: 3,
    name: "Instagram",
    designation: "https://www.instagram.com/sunny_jclinch/",
    image:
    "/images/icons/instagram.png",
},
{
    id: 5,
    name: "Github",
    designation: "https://github.com/Jclinch",
    image:
    "/images/icons/github.png",
},
{
  id: 4,
  name: "Freelancer",
  designation: "https://www.freelancer.com/u/JclinchSunny",
  image:
  "/images/icons/freelancer.png",
},
];



export function GetInTouch() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
