'use client';
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoMenu, IoMenuOutline } from "react-icons/io5";
import { Twirl as Hamburger } from "hamburger-react";
import { Link } from "lucide-react";
import classNames from "classnames";

function Nav({ active }: any) {
  const [isOpen, setOpen] = useState(false);
  const NAV_ITEMS = [
    { label: "Feel Sukoon", path: "" },
    { label: "Our Projects", path: "" },
    { label: "Resources", path: "" },
    { label: "Life at Sukoon", path: "" },
  ];
  // const [navBarHeight, setNavBarHeight] = useState(0);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     let nav = document.getElementById("navbar");

  //     if (nav) {
  //       setNavBarHeight(nav.clientHeight);
  //     }
  //   }
  // }, []);
  return (
    <div className="w-full px-10 bg-white sticky top-0 z-10">
      <div className="w-full max-w-[1200px] h-24 md:h-28 flex items-center justify-between mx-auto">
        <img src="/svg/sukoon-logo.svg" alt="" className="h-[40px] md:h-[50px]" />
        <div className="items-center gap-10 hidden md:flex">
          <div className="flex items-center justify-center gap-10 text-[16px]">{NAV_ITEMS.map((item:any,i:number)=>(
            <a href={item.path}>{item.label}</a>
          ))}</div>
          <button className=" p-2 px-5 rounded-xl text-white bg-lime-500 flex items-center gap-2 text-base">
            <FaHeart /> Donate
          </button>
        </div>
        <Hamburger toggled={isOpen} toggle={setOpen} color="#179900" />
        {/* <IoMenuOutline className="md:hidden text-4xl text-lime-600"/> */}
      </div>
      {isOpen && (
        <section
          data-aos="fade-down"
          className={`z-50 md:hidden bg-lime-50 fixed top-24 w-full px-5 py-5 h-full overflow-y-scroll`}
        >
          
            {NAV_ITEMS.map((item, index) => {
              return (
                <Link
                  href={item.path}
                  key={index}
                  className={classNames({
                    "block p-5 hover:translate-x-1 duration-300": true,
                    "font-bold text-lime-600": active === item.label,
                    "flex items-center p-3 border-b border-lime-100": true,
                  })}
                >
                  {/* <span className="mr-3 text-lg">{item.icon}</span> */}
                  <p className="text-xl text-lime-700 bg-lime-300">ssgsfg</p>{item.label}
                </Link>
              );
            })}
        </section>
      )}
    </div>
  );
}

export default Nav;
