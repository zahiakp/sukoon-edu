import React from "react";

function Hero() {
  return (
    <div
      className="w-full h-[400px] md:h-[500px]"
      style={{
        backgroundImage:
          "linear-gradient(to top, rgba(42, 64, 10,0.9), rgba(0,0,0,0)),url(/image/banner.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="p-20 px-[15%] flex flex-col h-full items-start justify-end text-white">
        <h1 className="text-5xl md:text-7xl font-bold font Grotesque-font text-lime-200">
          About Us
        </h1>
        <p className="text-zinc-300 text-left hidden md:flex gap-2 text-[12px] md:text-[15px] mt-4 w-[80%]">
          Sukoon Residential School provides a high-quality education for Sukoon
          Edu Foundation is a non-profit organization dedicated to providing
          quality education to underprivileged children and empowering
          communities through innovative learning initiatives. We believe
          education is the cornerstone of sustainable development and societal
          progress. At the heart of our mission lies the Sukoon Edu Village, a
          sanctuary for harmony and learning nestled in Andhaka, Haryana.
        </p>
      </div>
    </div>
  );
}

export default Hero;
