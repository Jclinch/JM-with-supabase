"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import FooterColumn from "@/hooks/FooterColumn";
import Link from "next/link";

export function Footer() {
  return (
    <div className="h-[300px] md:h-[130px] w-full bg-neutral-950 relative flex flex-col items-center antialiased">
      <div className="container text-xs md:text-sm max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[2px] md:gap-8 mx-auto">
        <FooterColumn
          title="About"
          links={[
            { text: "Portfolio", href: "#portfolio" },
            { text: "GitHub", href: "https://github.com/Jclinch" },
            { text: "LinkedIn", href: "https://www.linkedin.com/in/sunnyugwu/" }
          ]}
        />
        <FooterColumn
          title="Services"
          links={[
            { text: "Web Development", href: "#service" },
            { text: "Consulting", href: "#service" },
            { text: "Maintenance", href: "#service" }
          ]}
        />
        <FooterColumn title="Tools" links={[
          { text: "ReactJs", href: "https://reactjs.org/" },
          { text: "NextJs", href: "https://nextjs.org/" },
          { text: "Git", href: "https://git-scm.com/" }
        ]} />
        <FooterColumn
          title="Legal"
          links={[
            { text: "Privacy Policy", href: "#" },
            { text: "Terms of Service", href: "#" },
            { text: "Cookie Policy", href: "#" }
          ]}
        />
        <FooterColumn
          title="Contact"
          links={[
            { text: "Email", href: "#contact" },
            { text: "Phone", href: "#contact" },
            { text: "Social Media", href: "https://www.#socials" }
          ]}
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-evenly w-full mt-4 h-1 text-[#A4A4A6]">
        <p className="text-xs text-center sm:text-left">
          &copy; 2024 Jclinch Multimedia. All rights reserved.
        </p>
        <div className="flex gap-4 sm:gap-6 mt-2 sm:mt-0">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
