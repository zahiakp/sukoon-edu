import Nav from "@/components/home/Nav";
import Image from "next/image";
import Hero from '@/components/home/hero'
import Impact from "@/components/home/impact";
import Footer from "@/components/home/Footer";
export default function Home() {
  return (
    
    <div className="">
    <Nav/>
    <Hero/>
    <Impact/>
    <Footer/>
</div>
  );
}
