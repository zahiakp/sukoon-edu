import Hero from "@/components/home/hero";
import Impact from "@/components/home/vision2030";
import Plans from "@/components/home/Plans";
import SDGs from "@/components/home/SDGs";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import UserLayout from "@/components/Layout/UserLayout";
import Highlight from "./about/Highlight";
import { SukoonSection } from "@/components/home/BuildSukoon";
export default function Home() {
  return (
    <UserLayout>
      <Hero />
      <About />
      <Projects />
      <Impact />
      {/* <Plans /> */}
      <SukoonSection />
      <Highlight/>
      <SDGs />
    </UserLayout>
  );
}
