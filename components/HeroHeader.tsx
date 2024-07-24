// import React from "react";
// import { FlipWords } from "./ui/flip-words";
// import { HeroScroll } from "./VectorScroll";

// export function FlipWordsDemo() {
//   const words = ["better", "cute", "beautiful", "modern"];

//   return (
//     <>
//       <div className="heading flex flex-col md:flex-row h-[35rem] justify-center items-start px-4 pt-5 border-red-600">
//         <div className="flex flex-col mt-50">
//           <div className="text-2xl font-bold text-neutral-600 dark:text-neutral-400  border-x-red-600">
//             Welcome to Jclinch Multimedia
//           </div>

//           <div className="text-5xl font-extrabold text-neutral-900 dark:text-neutral-600 mt-4  border-x-red-600">
//             Your trusted partner <br /> in software development
//             <div className="text-xl font-bold text-neutral-400 dark:text-neutral-300  border-x-red-600">
//               Crafting <FlipWords words={words} /> Web Apps and Websites that
//               drive success.
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="scrolling-tab md:flex md:justify-end mt-1 md:mt-0 border-x-red-600">
//         <HeroScroll />
//       </div>


//     </>
//   );
// }


import React from "react";
import { FlipWords } from "./ui/flip-words";
import { HeroScroll } from "./VectorScroll";

export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="flex flex-col md:flex-row h-[35rem] px-4 pt-5">
      <div className="heading flex flex-col justify-center md:w-1/2">
        <div className="text-2xl font-bold text-neutral-600 dark:text-neutral-400">
          Welcome to Jclinch Multimedia
        </div>
        <div className="text-5xl font-extrabold text-neutral-900 dark:text-neutral-600 mt-4">
          Your trusted partner <br /> in software development
          <div className="text-xl font-bold text-neutral-400 dark:text-neutral-300">
            Crafting <FlipWords words={words} /> Web Apps and Websites that drive success.
          </div>
        </div>
      </div>
      <div className="scrolling-tab flex justify-end items-center md:w-1/2 mt-60 md:mt-90">
        <HeroScroll />
      </div>
    </div>
  );
}
