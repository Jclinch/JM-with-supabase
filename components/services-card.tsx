import { HoverEffect } from "./ui/card-hover-effect";

export function ServicesCard() {
  return (
    <>
     <h1 className="text-5xl font-extrabold text-slate-100 text-center mt-5 z-0">Our Services</h1>
    <div className="max-w-6xl mx-auto px-8 z-0">
      <HoverEffect items={projects} />
    </div>
    </>
  );
}
export const projects = [
  {
    title: "Custom Software Development",
    description: "We build softwares that fits your business needs.",
    link: "https://stripe.com",
  },
  {
    title: "Mobile App Development",
    description:
      "We create mobile apps that helps you connect with your customers whereever they are.",
    link: "https://netflix.com",
  },
  {
    title: "Web Development",
    description:
      "We design and develope websites that help you reach a global audience.",
    link: "https://google.com",
  },
];
