import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { FlipWordsDemo } from "@/components/HeroHeader";
import { Service } from "@/components/Service";

export default function Home() {
  return (
    <>
    <div className="border-red-600 hero-section">
    <Navbar />
    <FlipWordsDemo />
    </div>
    <div className="service-section mt-52">
    <Service />
    </div>
    </>
  );
}
