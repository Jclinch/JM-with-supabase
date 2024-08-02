// "use client";
// import React from "react";
// import { ContainerScroll } from "./ui/container-scroll-animation";
// import Image from "next/image";

// export function HeroScroll() {
//   return (
//     <div className="flex flex-col overflow-hidden mb-[270px] px-24 h-[700px]">
//       <ContainerScroll
//         titleComponent={
//           <>
//             <h1 className="text-xm font-semibold text-[#f25f4c] dark:text-white mt[-180px]">
//               Join us <br />
//               <span className="text-base md:text-[2rem] font-mono text-[#ff8906] leading-none">
//                 lets build something great together
//               </span>
//             </h1>
//           </>
//         }
//       >
//         <Image
//           src="/images/Hero.png"
//           alt="hero"
//           height={720}
//           width={720}
//           className="mx-auto rounded-2xl object-cover h-full object-left-top mr-6 bg-[#ff8906]"
//           draggable={false}
//         />
//       </ContainerScroll>
//     </div>
//   );
// }


"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import "@/components/styles/homepage-effects.css"; // Ensure this imports the CSS file with your animation

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden mb-[270px] px-24 h-[700px] slow-fade-in">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-xm font-semibold text-[#f25f4c] dark:text-white mt[-180px] slow-fade-in">
              Join us <br />
              <span className="text-base md:text-[2rem] font-mono text-[#ff8906] leading-none">
                lets build something great together
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="/images/Hero.png"
          alt="hero"
          height={720}
          width={720}
          className="mx-auto rounded-2xl object-cover h-full object-left-top mr-6 bg-[#ff8906] draggable={false} slow-fade-in"
        />
      </ContainerScroll>
    </div>
  );
}
