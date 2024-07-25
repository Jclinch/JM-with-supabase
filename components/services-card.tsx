import { HoverEffect } from "./ui/card-hover-effect";

export function ServicesCard() {
  return (
    <div className="max-w-5xl mx-auto px-8 z-0">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Custom Software Development",
    description:
      "We build softwares that fits your business needs.",
    link: "https://stripe.com",
  },
  {
    title: "Mobile App Development",
    description:
      "We create mobile apps that helps you connect with your customers whereever they are.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
