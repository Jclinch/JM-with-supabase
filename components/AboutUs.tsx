// components/AboutUsSection.tsx

"use client"; // Ensures this is treated as a client component
import React, { useState } from "react";
import Image from "next/image";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";
import { ToggleSwitch } from "./ToggleSwitch";

export function AboutUs() {
  const [showImage, setShowImage] = useState(false);

  const toggleContent = () => {
    setShowImage((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#1d1c20] py-20 rounded-2xl w-full h-[900px]">
      <TextRevealCard text="Why Choose Us" revealText="We know the business">
        <TextRevealCardTitle className="text-xl sm:text-2xl">
          We are committed to delivering the best software solutions
        </TextRevealCardTitle>

        <div className="mt-8 flex items-center flex-col">
          <ToggleSwitch
            isChecked={showImage}
            onToggle={toggleContent}
            labelOn="Codes"
            labelOff="About Us"
          />
          <h1 className="text-3xl text-white font-extrabold mt-4 mb-8">
            {showImage ? "Quality Codes" : "About Us"}
          </h1>
        </div>

        {showImage ? (
          <div className="flex justify-between items-center w-full max-w-full h-96 mt-8">
            <Image
              src="/images/code.png"
              alt="Quality Codes"
              layout="intrinsic"
              width={450}
              height={400}
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/images/code1.png"
              alt="Quality Codes"
              layout="intrinsic"
              width={450}
              height={300}
              objectFit="cover"
              className="rounded-lg shadow-lg"
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
          <TextRevealCardDescription className="text-base sm:text-lg mt-[180px] mb-96">
            We tailor our designs to meet your unique business needs. With a
            team of experienced professionals, we ensure high-quality results
            and customer satisfaction.
          </TextRevealCardDescription>
        )}
      </TextRevealCard>
    </div>
  );
}

// "use client";
// import React from "react";
// import {
//   TextRevealCard,
//   TextRevealCardDescription,
//   TextRevealCardTitle,
// } from "./ui/text-reveal-card";

// export function AboutUs() {
//   return (
//     <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
//       <TextRevealCard text="Why Choose Us" revealText="We know the business">
//         {/* <TextRevealCardTitle>About Us</TextRevealCardTitle> */}
//         <TextRevealCardDescription>
//           We are committed to delivering the best software solutions
//         </TextRevealCardDescription>
//       </TextRevealCard>
//     </div>
//   );
// }
