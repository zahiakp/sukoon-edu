import { screenRatio } from "@/components/common/ScreenRatio";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { TextAnimate } from "@/components/ui/text-animate";
import React from "react";

function Highlight() {
 
  return (
    <div className="w-full  py-28 group bg-gradient-to-br to-lime-500 from-lime-600 relative overflow-hidden">
      <section className="w-[90%] max-w-[1200px] mx-auto flex gap-20 px-5">
       <p data-aos="fade-right" className="text-7xl leading-[55px] md:text-[100px] md:leading-[80px] text-lime-200 font-semibold Grotesque-font md:w-4/5"> Every child deserves not just an <span className="text-white"> education, </span>but the freedom to 
       <span className="text-white"> dream and
       achieve.</span></p>
       
       {/* <p className="text-[100px] leading-[80px] text-lime-200 font-semibold Grotesque-font w-[80%]"><TextAnimate animation="blurInUp" by="character">
       Every child deserves not just an education, but the freedom to dream and achieve.
    </TextAnimate></p> */}
      </section>
      {/* <div className="absolute rotate-12 hidden md:block -bottom-64 right-[10%]">
    <img className='h-[500px] contrast-more:'  src="/image/Logo strock.png" alt="" /></div> */}
    <div className="w-screen overflow-hidden md:w-fit  absolute md:-right-[25%] top-0"><FlickeringGrid 
        className="z-0 inset-0 hidden md:block [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={12}
        gridGap={6}
        color="#d4ffcc"
        maxOpacity={0.7}
        flickerChance={0.1}
        height={800}
        width={1200}
      />
      <FlickeringGrid 
        className="z-0 inset-0 md:hidden [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={12}
        gridGap={6}
        color="#d4ffcc"
        maxOpacity={0.2}
        flickerChance={0.1}
        height={800}
        width={1200}
      />
      </div>
    </div>
  );
}

export default Highlight;
