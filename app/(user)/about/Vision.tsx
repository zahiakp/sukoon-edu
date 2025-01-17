import StyledButton from "@/components/common/StyledButton";
import React from "react";

function Vision() {
  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto py-20 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
      <div data-aos="fade-left" className="w-[300px] h-[300px] bg-white shadow-xl border border-lime-400 overflow-hidden rounded-[60px]">
          <img src="/image/IMGtest_1824.JPG" alt="" className="h-full w-full object-cover"/>
          </div>
        <div data-aos="fade-right" className="flex items-start flex-col md:w-1/2 px-10">
        <h6 className="Grotesque-font text-5xl md:text-6xl text-lime-600 font-semibold">
        <StyledButton text="Vision"/> 
        </h6>
        <p className=" text-left mt-5">
            A world where every child has the right to dream, learn, and achieve their full potential, irrespective of their circumstances.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vision;
