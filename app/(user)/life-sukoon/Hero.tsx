import React from "react";

function Hero() {
  return (
    <div
      className="w-full h-[400px] md:h-[500px]"
      style={{
        backgroundImage:
          "linear-gradient(to top, rgba(0, 0, 0,0.7), rgba(0,0,0,0)),url(/image/7.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="p-20 px-[15%] flex flex-col h-full items-start justify-end text-white">
        <h1 className="text-5xl md:text-7xl font-bold font Grotesque-font text-lime-200">
          Life at Sukoon
        </h1>
        <p className="text-zinc-300 text-left hidden md:flex gap-2 text-[12px] md:text-[15px] mt-4 w-[80%]">
          At Sukoon, we offer a global standard of education and lifestyle,
          seamlessly blending academic excellence with world-class facilities in
          a serene, eco-friendly environment. Our emphasis on holistic
          development creates a nurturing ground for future leaders, inspiring
          students to excel intellectually, ethically, and socially.
        </p>
      </div>
    </div>
  );
}

export default Hero;
