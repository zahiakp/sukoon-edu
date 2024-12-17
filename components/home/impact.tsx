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
    <div className="bg-lime-100 py-8">
      <div className="w-full max-w-[1200px] mx-auto p-10 flex flex-col items-center">
        <h6 className="Grotesque-font text-6xl text-lime-800 font-semibold">
          Our Impact
        </h6>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {ITEMS.map((item: any, i: number) => (
            <div key={i} className="px-10 py-5 pt-2 bg-lime-300 rounded-2xl">
              <p className="Grotesque-font text-7xl font-semibold text-lime-800"><NumberTicker value={item.count} className="text-lime-800"/></p>
              <p>{item.dis}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Impact;
