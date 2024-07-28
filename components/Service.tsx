"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { ServicesCard } from "./services-card";

export function Service() {
  return (
    <div className="relative w-full overflow-hidden bg-[#a7a9be] flex flex-col items-center justify-center h-[650px] mt-[-150px]"> {/*z-[-10]*/}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center z-50 md:z-50 mt-[80px] md:mt-0 mb-[-40px] md:mb-0" >Our Services</h1>

      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="w-full px-4 md:px-0 md:w-auto"> {/* Wrapper to apply responsive padding */}
        <div className="p-4 md:p-6 w-full md:w-auto mx-auto md:mx-0 flex justify-center md:justify-start"> {/* Adjust padding, width, and alignment for mobile */}
          <ServicesCard /> 
        </div>
      </div>
    </div>
  );
}


// "use client";
// import React from "react";
// import { Boxes } from "./ui/background-boxes";
// import { cn } from "@/lib/utils";
// import { ServicesCard } from "./services-card";

// export function Service() {
//   return (
//     <div className="relative w-full overflow-hidden bg-[#a7a9be] flex flex-col items-center justify-center h-[600px] mt-[-150px]">
//       <h1 className="text-5xl md:text-5xl font-extrabold text-white text-center z-50 md:z-50 border-4 border-red-600 relative md:absolute md:top-10">
//         Our Services
//       </h1>
//       <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
//       <Boxes />
//       <div className="w-full px-4 md:px-0 md:w-auto"> {/* Wrapper to apply responsive padding */}
//         <div className="p-4 md:p-6 w-full md:w-auto mx-auto md:mx-0 flex justify-center md:justify-start"> {/* Adjust padding, width, and alignment for mobile */}
//           <ServicesCard /> 
//         </div>
//       </div>
//     </div>
//   );
// }
