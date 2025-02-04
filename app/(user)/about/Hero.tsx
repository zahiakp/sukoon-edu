import React from "react";

function Hero() {
  return (
    <div
      className="w-full h-[400px] md:h-[500px] overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to top, rgba(0, 0, 0,0.7), rgba(0,0,0,0)),url(/image/9.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="p-20 px-[15%] flex flex-col h-full items-start justify-end text-white">
        <h1 className="text-5xl md:text-7xl font-bold font Grotesque-font text-lime-200">
          About Us
        </h1>
        <p className="text-zinc-300 text-left hidden md:flex gap-2 text-[12px] md:text-[15px] mt-4 w-[80%]">
          Sukoon Edu Foundation is dedicated to empowering children from
          economically and socially marginalized backgrounds through accessible,
          inclusive, and transformative education. The word “Sukoon” represents
          tranquility, wisdom, stability, and the positive transformation that
          education brings. From Sukoon to success, the foundation bridges the
          gap between dreams and destiny, ensuring that knowledge becomes the
          key to a brighter future.
        </p>
      </div>
    </div>
  );
}

export default Hero;
