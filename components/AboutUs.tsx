"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";
import { ToggleSwitch } from "./ToggleSwitch";
import TypedText from "../components/TypedText";

export function AboutUs() {
  const [showImage, setShowImage] = useState(false);

  const toggleContent = () => {
    setShowImage((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#020202] rounded-2xl w-full h-[900px] md:h-[700px]">
      <TextRevealCard text="Why Choose Us" revealText="We know the business">
        <div className=" flex items-center flex-col">
          <h1 className="text-3xl text-white font-extrabold mt-4 mb-8">
            {showImage ? "Quality Codes" : "About Us"}
          </h1>
          <ToggleSwitch
            isChecked={showImage}
            onToggle={toggleContent}
            labelOn="Codes"
            labelOff="About Us"
          />
        </div>

        {showImage ? (
          <div className="flex flex-col md:flex-row justify-around items-center w-52 md:w-full max-w-full h-32 md:h-96 mt-8 mx-auto ">
            <Image
              src="/images/code.png"
              alt="Quality Codes"
              layout="intrinsic"
              width={450}
              height={400}
              objectFit="cover"
              className="rounded-lg shadow-lg mb-2"
            />
            <Image
              src="/images/code1.png"
              alt="Quality Codes"
              layout="intrinsic"
              width={450}
              height={300}
              objectFit="cover"
              className="rounded-lg shadow-lg mb-2"
            />
            <Image
              src="/images/code2.png"
              alt="Quality Codes"
              layout="intrinsic"
              width={250}
              height={250}
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        ) : (
          <div className="text-base md:text-2xl">
          <TextRevealCardDescription>
            {/* Our team of experienced developers and designers is passionate about
            delivering top-notch web solutions tailored to your unique needs.
            <br />
            <br />
            With years of experience in the industry, we understand the
            importance of a strong online presence. We work closely with our
            clients to understand their goals and provide customized web
            development services that drive results.
            <br />
            <br />
            Whether you need a new website, a redesign, or ongoing maintenance,
            we&apos;re here to help. Let&apos;s work together to create a
            website that not only looks great but also performs exceptionally
            well. */}
              <TypedText />
          </TextRevealCardDescription>
            </div>
        )}
      </TextRevealCard>
    </div>
  );
}
