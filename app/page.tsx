import Nav from "@/components/home/Nav";
import Image from "next/image";
import Hero from '@/components/home/hero'
import Impact from "@/components/home/impact";
import Footer from "@/components/home/Footer";
import Plans from "@/components/home/Plans";
import SDGs from "@/components/home/SDGs";
export default function Home() {
  return (
    
    <div className="">
    <Nav/>
    <Hero/>
    <Impact/>
    <Plans/>
    <SDGs/>
    <Footer/>
</div>
  );
}
