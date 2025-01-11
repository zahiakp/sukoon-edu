import React from "react";
import StyledButton from "../StyledButton";
import { IoMdArrowForward } from "react-icons/io";

function About() {
  return (
    <div className="bg-white relative group pt-10">
      <div className="w-full max-w-[1200px] mx-auto py-10 flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center">
        <div className="w-[300px] h-[300px] relative bg-white shadow-xl border border-lime-400 overflow-hidden rounded-[60px]">
          <img src="/image/IMG_1830test.JPG" alt="" className="h-full w-full object-cover"/>
          {/* <div className="w-20 h-20 bg-lime-300/50 shadow-xl absolute top-5 -right-5 rounded-2xl backdrop-blur-lg"></div> */}
          </div>
        <div className="max-w-[80%] md:max-w-[50%]">
          <h6 className="Grotesque-font text-5xl md:text-6xl text-lime-700 font-semibold">
            Sukoon Edu <span className="font-normal"> Foundation</span>
          </h6>
          <p className="mt-5">
            Sukoon Edu Foundation is a non-profit organization dedicated to
            providing quality education to underprivileged children and
            empowering communities through innovative learning initiatives. We
            believe education is the cornerstone of sustainable development and
            societal progress. At the heart of our mission lies the Sukoon Edu
            Village, a sanctuary for harmony and learning nestled in Andhaka,
            Haryana.
          </p>
          <a href="" className="flex items-center gap-3 text-lime-600 mt-3">Know More <IoMdArrowForward />
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"></div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="#ecfccb"
          fill-opacity="1"
          d="M0,192L48,192C96,192,192,192,288,170.7C384,149,480,107,576,90.7C672,75,768,85,864,122.7C960,160,1056,224,1152,224C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default About;
