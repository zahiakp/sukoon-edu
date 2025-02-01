import StyledButton from "@/components/common/StyledButton";
import FlickeringGrid from "@/components/ui/flickering-grid";
import React from "react";

function SukoonianLife() {
  return (
    <div className="bg-lime-50 relative w-full  overflow-hidden">
      <FlickeringGrid 
        className="z-0 absolute overflow-x-hidden inset-0 size-full"
        squareSize={14}
        gridGap={9}
        color="#4cd633"
        maxOpacity={0.1}
        flickerChance={0.5}
        height={800}
        width={2000}
      />
      <div className="w-[90%]  max-w-[1200px] mx-auto py-20 flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-20">
        <div
          data-aos="fade-left"
          className="w-[300px] h-[300px] bg-white shadow-xl border border-lime-400 overflow-hidden rounded-[60px]"
        >
          <img
            src="/image/IMG_1830test.JPG"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div
          data-aos="fade-right"
          className="flex items-start flex-col md:w-1/2 px-10"
        >
          <h6 className="Grotesque-font text-5xl md:text-6xl text-zinc-500 !leading-[55px] font-medium">
            A Day in the Life of <br className="hidden md:block" /><span className="font-bold text-lime-600"> A Sukoonian</span>
          </h6>
          <p className="text-left mt-5">
            Each day at Sukoon begins with morning prayers and wellness
            activities such as nature walks followed by interactive academic
            sessions. Evenings are dedicated to sports, club activities, and
            personal interests, culminating in reflective discussions or
            recreational bonding over a community dinner.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SukoonianLife;
