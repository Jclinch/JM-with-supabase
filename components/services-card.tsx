import { HoverEffect } from "./ui/card-hover-effect";

export function SkillsCard() {
  return (
    <>
    <div className="w-3 md:w-full max-w-6xl mx-auto md:mx-0 px-8 text-center md:text-left"
    data-aos="zoom-in">
      <HoverEffect items={projects} />
    </div>
    </>
  );
}
export const projects = [
  {
    title: "Frontend & Backend",
    skills: "HTML, CSS, JavaScript, PostgreSQL",
    description: "Proficient in building responsive and accessible web interfaces using modern HTML, CSS, JavaScript and Database backend techniques.",
    link: "",
  },
  {
    title: "Frameworks",
    skills: "React, Next.js",
    description: "Experienced in building complex web applications using popular JavaScript frameworks and libraries like React and Next.js.",
    link: "",
  },
  {
    title: "Tools",
    skills: "Git, Tailwind CSS",
    description: "Proficient in using various development tools and technologies to streamline the development process and create visually appealing designs.",
    link: "",
  },
];


