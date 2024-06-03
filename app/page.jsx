// components
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return <main>
    <Hero/>
    <About/>
    <Work/>
    <Services/>
    <Certifications/>
    <Contact/>
    </main>;
}
