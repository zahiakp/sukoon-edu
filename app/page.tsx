
import Hero from '@/components/home/hero'
import Impact from "@/components/home/impact";
import Plans from "@/components/home/Plans";
import SDGs from "@/components/home/SDGs";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
export default function Home() {
  return (
    
    <div className="">
    <Hero/>
    <About/>
    <Projects/>
    <Impact/>
    <Plans/>
    <SDGs/>
</div>
  );
}
