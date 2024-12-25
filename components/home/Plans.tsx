import { div } from "framer-motion/client";
import React from "react";
import NumberTicker from "../ui/number-ticker";
import { RiArrowRightLine } from "react-icons/ri";

function Plans() {
  const ITEMS = [
    { icon: "", size: "Sq feet", plan: "1,500" },
    { icon: "", size: "Classroom", plan: "8,00,000" },
    { icon: "", size: "Furnished Classroom", plan: "10,00,000" },
    { icon: "", size: "Smart Classroom", plan: "12,00,000" },
    { icon: "", size: "Classroom furniture", plan: "2,00,000" },
  ];
  return (
    <div className=" py-8 relative overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto p-10 flex flex-col items-center">
        <h6 className="Grotesque-font text-5xl md:text-6xl text-lime-800 font-semibold">
          Help Us Build Sukoon
        </h6>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
          {ITEMS.map((item: any, i: number) => (
            <div key={i} className="relative border border-zinc-300 bg-zinc-100 hover:shadow-lg hover:-translate-y-1 duration-300 group rounded-2xl"
            > <p className="text-xl p-3 px-5 text-center">Plan</p>
              <div className="rounded-b-2xl px-5 md:px-10 py-5 pt-2 bg-white border-t border-lime-400  flex flex-col h-40">
                <p className="Grotesque-font group-hover:scale-110 duration-300 text-3xl md:text-4xl font-semibold text-lime-600">
                  {item.plan}
                </p>
                <p className="text-sm">{item.size}</p>
                <button className="flex items-center gap-3 text-sm justify-center absolute w-32 md:w-40 bottom-4 left-[50%] text-white group-hover:shadow-lg duration-300 -translate-x-[50%] p-2 rounded-3xl bg-lime-500 mt-4">Get Started <RiArrowRightLine className="hidden md:block"/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plans;
