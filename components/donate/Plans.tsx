import { div } from "framer-motion/client";
import React from "react";
import NumberTicker from "../ui/number-ticker";
import { RiArrowRightLine } from "react-icons/ri";
import StyledButton from "../StyledButton";

function Plans() {
  const ITEMS = [
    { icon: "", size: "1 Sq feet",amount:"1500",label:"1%20Sq%20feet", plan: "1,500" ,link:""},
    { icon: "", size: "10 Sq feet",amount:"15000",label:"10%20Sq%20feet", plan: "15,000" ,link:""},
    { icon: "", size: "50 Sq feet",amount:"75000",label:"50%20Sq%20feet", plan: "75,000",link:"" },
    { icon: "", size: "100 Sq feet",amount:"150000",label:"100%20Sq%20feet", plan: "1,50,000",link:"" },
    { icon: "", size: "Classroom",amount:"800000",label:"Classroom", plan: "8,00,000",link:"" },
    { icon: "", size: "Classroom furniture",amount:"200000",label:"Classroom%20furniture", plan: "2,00,000",link:"" },
  ];
  return (
    <div className=" py-8 relative overflow-hidden group bg-lime-50">
      <div className="w-full max-w-[1000px] mx-auto p-10 flex flex-col items-center">
        <div className="mt-10 w-full grid grid-cols-2 md:grid-cols-3 gap-4">
          {ITEMS.map((item: any, i: number) => (
            <div
              key={i}
              className="relative border z-[1] border-b-lime-500 group-hover/box:border-b-4 border-zinc-300 bg-zinc-100 hover:shadow-lg hover:-translate-y-1 duration-300 group/box rounded-2xl"
            >
              {" "}
              <p className="text-xl p-3 px-5 text-center">Plan</p>
              <div className="w-full h-1 relative after:h-1 after:bg-lime-600 after:w-0 after:duration-300  group-hover/box:after:w-full after:left-0 after:absolute after:top-0"></div>
              <div className="rounded-b-2xl   px-4 md:px-10 py-5 pt-2 bg-white border-t border-lime-400  flex flex-col h-40">
                <p className="text-sm mt-5">{item.size}</p>
                <p className="Grotesque-font group-hover/box:scale-110 duration-300 text-3xl md:text-4xl font-semibold text-lime-600">
                  {item.plan}
                </p>
                <a target="_blank" href={`upi://pay?pa=9645900097@okbizaxis&pn=SUKOON%20EDU%20FOUNDATION&mc=8220&aid=uGICAgMD7wdTTKg&ver=01&mode=01&tr=BCR2DN4TYPV7N7IR&am=${item.amount}&tn=Donation%20${item.label}%20for%20Sukoon%20Edu`} className="flex items-center gap-3 text-sm justify-center absolute px-5 bottom-4 right-5 text-white group-hover/box:shadow-lg duration-300 p-2 rounded-3xl bg-lime-200 group-hover/box:bg-lime-500 mt-4">
                  <RiArrowRightLine className="group-hover/box:text-lg md:group-hover/box:text-2xl duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plans;
