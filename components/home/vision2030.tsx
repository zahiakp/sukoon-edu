import { div } from "framer-motion/client";
import React from "react";
import NumberTicker from "../ui/number-ticker";
import StyledButton from "../common/StyledButton";
import { TextAnimate } from "../ui/text-animate";
import { IoMdArrowForward } from "react-icons/io";

function Impact() {
  const ITEMS = [
    { icon: "", count: "2", dis: "Residential Campus" },
    { icon: "", count: "20", dis: "Learning Centres" },
    { icon: "", count: "300", dis: "Active Villages" },
    { icon: "", count: "3000", dis: "Students" },
  ];
  return (
    <div className="bg-lime-50 py-8 relative group">
      <div className="w-full max-w-[1200px] mx-auto p-7 md:p-10 flex flex-col md:flex-row items-center">
        <div data-aos="fade-up" className="md:w-1/2 flex flex-col md:items-start gap-3">
          <h6 className="Grotesque-font text-5xl md:text-6xl text-lime-600 font-semibold text-center">
             <TextAnimate animation="blurInUp" by="character">Vision 2030</TextAnimate>
          </h6>
          <p className="text-sm md:w-3/4 text-center md:text-left">
            As Mahatma Gandhi said, "The soul of India lives in its villages."
            Sukoon's Vision 2030 is focused on transforming rural communities
            through sustainable education, fostering growth and opportunities
            for future generations. We are committed to creating lasting change
            by empowering students and uplifting communities across India.
          </p>
          <a data-aos="fade-up" data-aos-delay="500" href="/donate" className="flex items-center gap-2 hover:gap-3 duration-300 p-2 px-5 rounded-xl w-fit text-sm bg-lime-500 text-white mt-4">Yes! I want to help<IoMdArrowForward />
                                    </a>
          {/* <p className="text-lime-300 leading-[12px] mt-5 hidden md:block">{`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`} <br />{`<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`}</p> */}
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-2 gap-4">
          {ITEMS.map((item: any, i: number) => (
            <div data-aos="fade-up" data-aos-delay={`${i+4}00`}
              key={i}
              className="relative overflow-hidden min-w-full pb-9 px-5 md:px-10 py-5 pt-2 bg-gradient-to-br from-lime-200 to-lime-300 hover:shadow-lg hover:-translate-y-1 duration-300 group/box rounded-2xl"
            >
              <p className="Grotesque-font  overflow-hidden group-hover/box:scale-110 duration-300 text-5xl md:text-7xl font-semibold text-lime-800">
                {item.count}
              </p>
              <p>{item.dis}</p>
              <p className="text-lime-600/40 absolute left-0 bottom-0">
                ///////////////////////////////////////////////////////////////////////////////////////
              </p>
              <p className="text-lime-600/80 max-w-0 overflow-hidden duration-500 group-hover/box:max-w-96 absolute left-0 bottom-0">
                ///////////////////////////////////////////////////////////////////////////////////////
              </p>
            </div>
          ))}
        </div>
      </div>
      <img
        src="/image/Logo strock.png"
        alt=""
        className="absolute rotate-12 hidden md:block -top-64 left-[10%] h-[400px] opacity-10"
      />
    </div>
  );
}

export default Impact;
