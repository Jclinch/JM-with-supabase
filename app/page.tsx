import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { FlipWordsDemo } from "@/components/HeroHeader";
import { Skills } from "@/components/Skills";
import { AboutUs } from "@/components/AboutUs";
import { Portfolio } from "@/components/Portfolio";
import { OurClients } from "@/components/OurClients";
import { GetInTouch } from "@/components/GetInTouch";
import Contact from "@/components/Contact";
import "@/components/styles/portfolioButton.css";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <div id="header" className="">
        <Navbar />
        <FlipWordsDemo />
      </div>
      <div id="service" className="service-section z-50 mt-[-140px] md:mt-[100px] ">
        <Skills />
      </div>
      <div id="portfolio" className=" bg-[#020202] ">
        <h1 className="pt-[60px] mb-0 md:mb-0 text-center font-extrabold text-3xl md:text-5xl text-[#f25f4c] bg-[#020202] ">
          Portfolio
        </h1>
        <Portfolio />
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="clients" className="pb-4 bg-[#020202]">
        <h1 className="pt-8 mb-4 text-center font-extrabold text-3xl md:text-5xl text-[#f25f4c] ">
          Our Clients
        </h1>
        <OurClients />
      </div>
      <div id="socials" className=" bg-[#323233] py-2 ">
        <h1 className="mt-8 mb-4 text-center font-extrabold text-3xl md:text-5xl text-[#f25f4c] ">
          Get in touch
        </h1>
        <GetInTouch />
      </div>
      <div id="contact" className="bg-[#f25f4c] px-4 md:px-0 pb-2">
        <h1 className="pt-8 mb-4 text-center font-extrabold text-3xl md:text-5xl text-black">
          Contact Us
        </h1>
        <Contact />
      </div>
      <div >
        <Footer />
      </div>
    </>
  );
}
