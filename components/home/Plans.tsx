import { div } from "framer-motion/client";
import React from "react";
import NumberTicker from "../ui/number-ticker";
import { RiArrowRightLine } from "react-icons/ri";
import StyledButton from "../common/StyledButton";
import GooglePayButton from "@google-pay/button-react";
import { TextAnimate } from "../ui/text-animate";

function Plans() {
  const ITEMS = [
    { icon: "", size: "1 Sq feet", plan: "1,500" },
    { icon: "", size: "10 Sq feet", plan: "15,000" },
    { icon: "", size: "50 Sq feet", plan: "75,000" },
    { icon: "", size: "100 Sq feet", plan: "1,50,000" },
    { icon: "", size: "Classroom", plan: "8,00,000" },
    { icon: "", size: "Other", plan: "Custom" },
  ];
  const DEMO_ITEMS = [
    { icon: "", size: "Admission Fee (one-time)", plan: "15,000" },
    { icon: "", size: "Annual Academic Fee", plan: "35,000" },
    { icon: "", size: "Residential & Food Fee", plan: "88,000" },
    { icon: "", size: "Extra-Curricular & Study Tours", plan: "20,000" },
    { icon: "", size: "Other", plan: "Custom" },
  ];

  return (
    <div className=" py-8 relative overflow-hidden group bg-blue-50 pb-72 md:pb-[350px]">
      <div className="w-full max-w-[1000px] mx-auto p-7 md:p-10 flex flex-col items-center">
        <h6 className="Grotesque-font text-5xl md:text-6xl text-sky-800 font-semibold">
          {/* <StyledButton text=""/>  */}
          <TextAnimate animation="blurInUp" by="word">
            Let’s Build Sukoon
          </TextAnimate>
        </h6>
        <p
          data-aos="fade-up"
          className="text-zinc-500 text-center text-[14px] mt-5"
        >
          Your donation helps us provide quality education, safe spaces, and
          essential resources for underprivileged children in North India who
          deserve a brighter tomorrow.
        </p>
        <div className="mt-10 w-full grid grid-cols-2 md:grid-cols-3 gap-4">
          {ITEMS.map((item: any, i: number) => (
            <div
              data-aos="fade-up"
              data-aos-delay={`${i + 2}00`}
              key={i}
              className=" relative border z-[1] border-b-sky-500 group-hover/box:border-b-4 border-zinc-300 bg-zinc-100 hover:shadow-lg hover:-translate-y-1 duration-300 group/box rounded-2xl"
            >
              {" "}
              <p className="p-3 px-5 text-center">{item.size}</p>
              <div className="w-full h-1 relative after:h-1 after:bg-sky-600 after:w-0 after:duration-300  group-hover/box:after:w-full after:left-0 after:absolute after:top-0"></div>
              <div className="rounded-b-2xl   px-4 md:px-10 py-5 pt-2 bg-white border-t border-sky-400  flex flex-col h-32">
                {/* <p className="text-sm mt-5">{item.size}</p> */}
                <p className="Grotesque-font group-hover/box:scale-110 duration-300 text-3xl md:text-4xl font-semibold text-sky-600">
                  {item.plan}
                </p>
                <a
                  href="/donate"
                  className="flex items-center gap-3 text-sm justify-center absolute px-5 bottom-4 right-5 text-white group-hover/box:shadow-lg duration-300 p-2 rounded-3xl bg-sky-200 group-hover/box:bg-sky-500 mt-4"
                >
                  <RiArrowRightLine className="group-hover/box:text-lg md:group-hover/box:text-2xl duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        data-aos="fade-up"
        data-aos-delay={`700`}
        src="/image/Sukoon Front View Without Sky.png"
        className="h-[500px] md:w-full w-auto object-cover md:object-bottom absolute bottom-0"
        alt=""
      />
    </div>
  );
}

export default Plans;
