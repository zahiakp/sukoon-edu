import { div } from "framer-motion/client";
import React from "react";
import NumberTicker from "../ui/number-ticker";
import StyledButton from "../StyledButton";

function Impact() {
  const ITEMS = [
    { icon: "", count: "2", dis: "Residential Campus" },
    { icon: "", count: "20", dis: "Learning Centres" },
    { icon: "", count: "300", dis: "Active Villages" },
    { icon: "", count: "3000", dis: "Students" },
  ];
  return (
    <div className="bg-lime-50 py-8 relative group">
      <div className="w-full max-w-[1200px] mx-auto p-10 flex flex-col items-center">
        <h6 className="Grotesque-font text-5xl md:text-6xl text-lime-800 font-semibold">
        <StyledButton text="Vision 2030"/>
        </h6>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {ITEMS.map((item: any, i: number) => (
            <div key={i} className="relative overflow-hidden pb-9 px-5 md:px-10 py-5 pt-2 bg-gradient-to-br from-lime-200 to-lime-300 hover:shadow-lg hover:-translate-y-1 duration-300 group/box rounded-2xl">
              <p className="Grotesque-font group-hover/box:scale-110 duration-300 text-5xl md:text-7xl font-semibold text-lime-800"><NumberTicker value={item.count} className="text-lime-800"/></p>
              <p>{item.dis}</p>
              <p className="text-lime-600/40 absolute left-0 bottom-0">///////////////////////////////////////////////////////////////////////////////////////</p>
              <p className="text-lime-600/80 max-w-0 overflow-hidden duration-500 group-hover/box:max-w-96 absolute left-0 bottom-0">///////////////////////////////////////////////////////////////////////////////////////</p>
            </div>
          ))}
        </div>
      </div>
      <img src="/image/Logo strock.png" alt="" className="absolute rotate-12 hidden md:block -top-64 left-[10%] h-[400px] opacity-10"/>
    </div>
  );
}

export default Impact;
