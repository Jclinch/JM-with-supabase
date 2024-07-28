import { HoverEffect } from "./ui/card-hover-effect";

export function ServicesCard() {
  return (
    <>
    <div className="w-3 md:w-full max-w-6xl mx-auto md:mx-0 px-8 text-center md:text-left">  {/* z-0 removed */}
   
      <HoverEffect items={projects} />
    </div>
    </>
  );
}
export const projects = [
  {
    title: "Custom Software Development",
    description: "We build softwares that fits your business needs.",
    link: "",
  },
  {
    title: "Mobile App Development",
    description:
      "We create mobile apps that helps you connect with your customers whereever they are.",
    link: "",
  },
  {
    title: "Web Development",
    description:
      "We design and develope websites that help you reach a global audience.",
    link: "",
  },
];
