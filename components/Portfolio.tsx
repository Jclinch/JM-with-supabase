// "use client";
// import Image from "next/image";
// import React, { useEffect, useId, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { useOutsideClick } from "@/hooks/use-outside-click";
// import { cn } from "@/lib/utils";
// import "@/components/styles/portfolioButton.css";

// export function Portfolio() {
//   const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
//     null
//   );
//   const ref = useRef<HTMLDivElement>(null);
//   const id = useId();

//   useEffect(() => {
//     function onKeyDown(event: KeyboardEvent) {
//       if (event.key === "Escape") {
//         setActive(false);
//       }
//     }

//     if (active && typeof active === "object") {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, [active]);

//   useOutsideClick(ref, () => setActive(null));

//   return (
//     <div className="bg-[#020202] h-[1440px] md:h-[600px] p-4">
//       <AnimatePresence>
//         {active && typeof active === "object" && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-[#313137]/20 h-full w-full z-10"
//           />
//         )}
//       </AnimatePresence>
//       <AnimatePresence>
//         {active && typeof active === "object" ? (
//           <div className="fixed inset-0  grid place-items-center z-[100] ">
//             <motion.button
//               key={`button-${active.title}-${id}`}
//               layout
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: 1,
//               }}
//               exit={{
//                 opacity: 0,
//                 transition: {
//                   duration: 0.05,
//                 },
//               }}
//               className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-[#020202] rounded-full h-6 w-6 "
//               onClick={() => setActive(null)}
//             >
//               <CloseIcon />
//             </motion.button>
//             <motion.div
//               layoutId={`card-${active.title}-${id}`}
//               ref={ref}
//               className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-[#020202] dark:bg-neutral-900 sm:rounded-3xl overflow-hidden" //popup card bg
//             >
//               <motion.div layoutId={`image-${active.title}-${id}`}>
//                 <Image
//                   priority
//                   width={200}
//                   height={200}
//                   src={active.src}
//                   alt={active.title}
//                   className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top "
//                 />
//               </motion.div>

//               <div>
//                 <div className="flex justify-between items-start p-4 ">
//                   {" "}
//                   {/* popup title */}
//                   <div className="">
//                     <motion.h3
//                       layoutId={`title-${active.title}-${id}`}
//                       className="font-bold text-neutral-700 dark:text-neutral-200 "
//                     >
//                       {active.title}
//                     </motion.h3>
//                     <motion.p
//                       layoutId={`description-${active.description}-${id}`}
//                       className="text-neutral-600 dark:text-neutral-400"
//                     >
//                       {active.description}
//                     </motion.p>
//                   </div>
//                   <motion.a
//                     layoutId={`button-${active.title}-${id}`}
//                     href={active.ctaLink}
//                     target="_blank"
//                     className="px-4 py-3 text-sm rounded-full font-bold bg-[#ff8906] text-white" //popup button
//                   >
//                     {active.ctaText}
//                   </motion.a>
//                 </div>
//                 <div className="pt-4 relative px-4 ">
//                   <motion.div
//                     layout
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
//                   >
//                     {typeof active.content === "function"
//                       ? active.content()
//                       : active.content}
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         ) : null}
//       </AnimatePresence>
//       <ul className="max-w-6xl mx-auto mt-[80px] w-full grid grid-cols-1 md:grid-cols-2 gap-4">
//         {cards.map((card, index) => (
//           <motion.div
//             layoutId={`card-${card.title}-${id}`}
//             key={`card-${card.title}-${id}`}
//             onClick={() => setActive(card)}
//             className="  p-4 flex flex-col md:flex-row justify-between items-center hover:bg-[#23242A] dark:hover:bg-[#23242A] rounded-xl cursor-pointer"
//           >
//             <div className="flex gap-4 flex-col md:flex-row  ">
//               <motion.div layoutId={`image-${card.title}-${id}`}>
//                 <Image
//                   width={1080}
//                   height={1080}
//                   src={card.src}
//                   alt={card.title}
//                   className="h-30 md:h-40 w-80 md:w-60 rounded-lg object-cover object-top mx-auto md:mx-0"
//                 />
//               </motion.div>
//               <div className="">
//                 <motion.h3
//                   layoutId={`title-${card.title}-${id}`}
//                   className="font-extrabold text-xl text-[#ff8906] mt-0 md:mt-[50px] dark:text-neutral-200 text-center md:text-left"
//                 >
//                   {card.title}
//                 </motion.h3>
//                 <motion.p
//                   layoutId={`description-${card.description}-${id}`}
//                   className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
//                 >
//                   {card.description}
//                 </motion.p>
//               </div>
//             </div>
//             <motion.button
//               layoutId={`button-${card.title}-${id}`}
//               className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-[#ff8906] hover:text-white text-black mt-4 md:mt-0" //main button
//             >
//               {card.ctaText}
//             </motion.button>
//           </motion.div>
//         ))}
//       </ul>
//       <div className="text-center mt-8">
//         <a href="#" className="btn-shine ml-[-10px] md:ml-[50px]">
//           View more
//         </a>
//       </div>
//     </div>
//   );
// }

// export const CloseIcon = () => {
//   return (
//     <motion.svg
//       initial={{
//         opacity: 0,
//       }}
//       animate={{
//         opacity: 1,
//       }}
//       exit={{
//         opacity: 0 }}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="h-4 w-4 text-white"
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M18 6l-12 12" />
//       <path d="M6 6l12 12" />
//     </motion.svg>
//   );
// };

// const cards = [
//   {
//     description: "Celebrating Nigeria's Digital Payments Ecosystem",
//     title: "Nigerian Fintech Festival",
//     src: "/images/NFF.png",
//     ctaText: "Site",
//     ctaLink: "https://www.nigerianfintechfestival.com",
//     content: () => {
//       return (
//         <p>
//           Nigeria Fintech Festival is an all-inclusive festival for players
//           within the Fintech Industry. It is a unique platform for the leading
//           and emerging drivers of Nigeria&apos;s fintech industry to converge,
//           connect, collaborate and unwind. Leveraging a perfectly blended fusion
//           of finance, technology and performing arts, Nigeria Fintech Festival
//           is driving collaboration and innovation in Nigeria&apos;s fintech
//           industry with insightful conversations and entertaining performances.
//         </p>
//       );
//     },
//   },
//   {
//     description: "Kickstarting Your Fintech Journey",
//     title: "Youths For Fintech",
//     src: "/images/YFF.png",
//     ctaText: "Site",
//     ctaLink: "https://www.youthsforfintech.com",
//     content: () => {
//       return (
//         <p>
//           Empowering young individuals to shape the future of finance and
//           technology through Youths for Fintech
//         </p>
//       );
//     },
//   },

//   {
//     description: "A rock paper scissors game for fun and relaxing",
//     title: "Rock-Paper-Scissors",
//     src: "/images/RPS.png",
//     ctaText: "Site",
//     ctaLink: "https://rock-paper-scissors-next-js-chi.vercel.app/",
//     content: () => {
//       return (
//         <p>
//           An intransitive hand game, usually played between two people, in which
//           each player simultaneously forms one of three shapes with an
//           outstretched hand.
//         </p>
//       );
//     },
//   },

//   {
//         description: "A todo app created with React.Js",
//         title: "Todo App",
//         src: "/images/todo.png",
//         ctaText: "Site",
//         ctaLink: "https://todo-list-ruby-kappa.vercel.app/",
//         content: () => {
//           return (
//             <p>
//               ToDo is a great app for keeping yourself organized and on track with
//               all the things that you have to do! It&apos;s very intuitive and easy
//               to navigate.
//             </p>
//           );
//         },
//       },
// ];

"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";
import "@/components/styles/portfolioButton.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
import "@/components/styles/homepage-effects.css"

export function Portfolio() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);

    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true,     // Whether animation should happen only once - while scrolling down
      offset: 200,    // Offset (in px) from the original trigger point
    });

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="bg-[#020202] h-[1440px] md:h-[600px] p-4">
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#313137]/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100] ">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-[#020202] rounded-full h-6 w-6 "
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-[#020202] dark:bg-neutral-900 sm:rounded-3xl overflow-hidden" //popup card bg
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top "
                />
              </motion.div>
              <div>
                <div className="flex justify-between items-start p-4 ">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 "
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-[#ff8906] text-white" //popup button
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4 ">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-6xl mx-auto mt-[80px] w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="aos-element p-4 flex flex-col md:flex-row justify-between items-center hover:bg-[#23242A] dark:hover:bg-[#23242A] rounded-xl cursor-pointer"
            data-aos={index === 0 ? "fade-right" : index === 1 ? "fade-left" : index === 2 ? "fade-right" : "fade-left"}
            data-aos-offset="0" // Offset to make the elements start from 500px away
            data-aos-duration="1000" // Duration of the animation
             data-aos-anchor-placement={index === 0 ? "right-left" : index === 1 ? "left-right" : index === 2 ? "right-left" : "left-right"}
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={1080}
                  height={1080}
                  src={card.src}
                  alt={card.title}
                  className="h-30 md:h-40 w-80 md:w-60 rounded-lg object-cover object-top mx-auto md:mx-0"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-extrabold text-xl text-[#ff8906] mt-0 md:mt-[50px] dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-[#ff8906] hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

const CloseIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.12665 2.1266C2.52952 1.72373 3.18686 1.72373 3.58973 2.1266L10 8.53687L16.4103 2.1266C16.8131 1.72373 17.4705 1.72373 17.8733 2.1266C18.2762 2.52947 18.2762 3.18681 17.8733 3.58968L11.4631 10L17.8733 16.4103C18.2762 16.8131 18.2762 17.4705 17.8733 17.8734C17.4705 18.2762 16.8131 18.2762 16.4103 17.8734L10 11.4631L3.58973 17.8734C3.18686 18.2762 2.52952 18.2762 2.12665 17.8734C1.72378 17.4705 1.72378 16.8131 2.12665 16.4103L8.53692 10L2.12665 3.58968C1.72378 3.18681 1.72378 2.52947 2.12665 2.1266Z"
        fill="#FF8906"
      />
    </svg>
  );
};

const cards = [
  {
    description: "Celebrating Nigeria's Digital Payments Ecosystem",
    title: "Nigerian Fintech Festival",
    src: "/images/NFF.png",
    ctaText: "Site",
    ctaLink: "https://www.nigerianfintechfestival.com",
    content: () => (
      <p>
        Nigeria Fintech Festival is an all-inclusive festival for players
        within the Fintech Industry. It is a unique platform for the leading
        and emerging drivers of Nigeria&apos;s fintech industry to converge,
        connect, collaborate and unwind. Leveraging a perfectly blended fusion
        of finance, technology and performing arts, Nigeria Fintech Festival
        is driving collaboration and innovation in Nigeria&apos;s fintech
        industry with insightful conversations and entertaining performances.
      </p>
    ),
  },
  {
    description: "Kickstarting Your Fintech Journey",
    title: "Youths For Fintech",
    src: "/images/YFF.png",
    ctaText: "Site",
    ctaLink: "https://www.youthsforfintech.com",
    content: () => (
      <p>
        Empowering young individuals to shape the future of finance and
        technology through Youths for Fintech
      </p>
    ),
  },
  {
    description: "A rock paper scissors game for fun and relaxing",
    title: "Rock-Paper-Scissors",
    src: "/images/RPS.png",
    ctaText: "Site",
    ctaLink: "https://rock-paper-scissors-next-js-chi.vercel.app/",
    content: () => (
      <p>
        An intransitive hand game, usually played between two people, in which
        each player simultaneously forms one of three shapes with an
        outstretched hand.
      </p>
    ),
  },
  {
    description: "A todo app created with React.Js",
    title: "Todo App",
    src: "/images/todo.png",
    ctaText: "Site",
    ctaLink: "https://todo-list-ruby-kappa.vercel.app/",
    content: () => (
      <p>
        ToDo is a great app for keeping yourself organized and on track with
        all the things that you have to do! It&apos;s very intuitive and easy
        to navigate.
      </p>
    ),
  },
];
