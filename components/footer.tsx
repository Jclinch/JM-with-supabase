"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Contact from "./Contact";

export function Footer() {
  return (
    <div className="h-[8rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
     <div className=" text-white py-6">
        {/* <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        /> */}

        {/* <div className="max-w-7xl px-4"> */}
          <div className="flex flex-col md:flex-row justify-evenly items-center text-sm md:text-lg text-white">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 J.M Web Development. All rights reserved.</p>
            </div>
            <div className="space-x-4">
              <a
                href="#"
                className="text-gray-100 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-100 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          {/* </div> */}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
