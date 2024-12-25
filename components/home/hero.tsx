import React from "react";
import WordPullUp from "../ui/word-pull-up";

function hero() {
  return (
    <div className="py-32 md:h-[80vh] overflow-hidden relative"
    style={{
        background:"url(/image/banner.jpg)",
        backgroundPosition:"center",
        backgroundSize:"cover"
    }}>
      <div className="w-[70%] max-w-[1200px] mx-auto h-full text-[110px] leading-[90px] text-white justify-center flex flex-col items-start">
      <WordPullUp
      className="md:w-[60%] Grotesque-font font-medium text-left tracking-[-0.02em] text-7xl leading-[60px] md:text-[180px] md:leading-[130px]"
      words="Stories  that  Shape lives"
    />
        {/* <p className="w-[70%] Grotesque-font font-medium text-lime-50 text-left">Feel Sukoon Through Stories That Shape Lives<span className="text-[200px] text-lime-500  leading-[10px]">.</span></p> */}
        <p className="text-base text-lime-100 md:w-[55%] mt-10">Welcome to Sukoon Edu Village, nestled in the heart of Andhaka Village. A sanctuary of harmony and
learning, we nurture young minds through education and the universal language of love.</p>
      </div>
      <img src="/image/Logo strock.png" alt="" className="absolute -bottom-52 right-[15%] h-[350px] md:h-[500px]"/>
    </div>
  );
}

export default hero;
