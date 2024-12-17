import React from "react";
import { FaHeart } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";

function Nav() {
  const NAV_ITEMS = [
    { label: "Feel Sukoon", path: "" },
    { label: "Sukoon Dairies", path: "" },
    { label: "Our Projects", path: "" },
    { label: "Resources", path: "" },
    { label: "Join Sukoon", path: "" },
    { label: "Connect Sukoon", path: "" },
  ];
  return (
    <div className="w-full px-10 bg-white">
      <div className="w-full  max-w-[1200px] h-28 flex items-center justify-between mx-auto">
        <img src="/svg/sukoon-logo.svg" alt="" className="h-[60px]" />
        <div className=" flex items-center gap-10">
          <div className="flex items-center justify-center gap-5 text-[16px]">{NAV_ITEMS.map((item:any,i:number)=>(
            <a href={item.path}>{item.label}</a>
          ))}</div>
          <button className=" p-2 px-5 rounded-xl text-white bg-lime-500 flex items-center gap-2 text-lg">
            <FaHeart /> Donate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
