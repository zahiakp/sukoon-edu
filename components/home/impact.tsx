import { div } from "framer-motion/client";
import React from "react";
import NumberTicker from "../ui/number-ticker";

function Impact() {
  const ITEMS = [
    { icon: "", count: "1", dis: "Residential Campus" },
    { icon: "", count: "7", dis: "Learning Centres" },
    { icon: "", count: "25+", dis: "Villages" },
    { icon: "", count: "350+", dis: "Students" },
  ];
  return (
    <div className="bg-lime-100 py-8 relative overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto p-10 flex flex-col items-center">
        <h6 className="Grotesque-font text-6xl text-lime-800 font-semibold">
          Our Impact
        </h6>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {ITEMS.map((item: any, i: number) => (
            <div key={i} className="relative overflow-hidden pb-9 px-10 py-5 pt-2 bg-gradient-to-br from-lime-200 to-lime-300 hover:shadow-lg hover:-translate-y-1 duration-300 group rounded-2xl">
              <p className="Grotesque-font group-hover:scale-110 duration-300 text-7xl font-semibold text-lime-800"><NumberTicker value={item.count} className="text-lime-800"/></p>
              <p>{item.dis}</p>
              <p className="text-lime-600 absolute left-0 bottom-0">///////////////////////////////////////////</p>
            </div>
          ))}
        </div>
      </div>
      <img src="/image/Logo strock.png" alt="" className="absolute rotate-12  -top-56 left-[10%] h-[400px] opacity-20"/>
    </div>
  );
}

export default Impact;
