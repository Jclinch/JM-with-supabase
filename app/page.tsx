import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { FlipWordsDemo } from "@/components/HeroHeader";

export default function Home() {
  return (
    <>
    <div className="border-red-600">
    <Navbar />
    <FlipWordsDemo />
    </div>
    </>
  );
}
