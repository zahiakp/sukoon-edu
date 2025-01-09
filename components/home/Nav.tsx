'use client';
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { IoArrowDownCircle, IoMenu, IoMenuOutline } from "react-icons/io5";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import classNames from "classnames";
import { IoIosArrowDown, IoIosArrowDropdownCircle, IoMdArrowForward } from "react-icons/io";

function Nav({ active }: any) {
  const [isOpen, setOpen] = useState(false);
  const [drop,setDrop] = useState<any>(false)
  const [mobileDrop, setMobileDrop] = useState<number | null>(null);
  const NAV_ITEMS = [
    { label: "Feel Sukoon", path: "" ,items:[
      {label:"Our Story",path:""},
      {label:"About us",path:""},
      {label:"Diary",path:""},
    ]},
    { label: "Our Projects", path: "",items:[
      {label:"Edu Village",path:""},
      {label:"Village School",path:""},
      {label:"Learning Centers",path:""},
      {label:"Travel with Sukoon",path:""},
    ] },
    { label: "Life at Sukoon", path: "" },
    { label: "Stories", path: "" },
    { label: "Join us", path: "" },
    { label: "Connect us", path: "" },
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
  console.log(drop);
  
  return (
    <div className="w-full px-10 bg-white sticky top-0 z-10">
      <div className="w-full max-w-[1200px] h-[90px] md:h-[100px] flex items-center justify-between mx-auto">
        <img src="/svg/sukoon-logo.svg" alt="" className="h-[40px] md:h-[50px]" />
        <div className="items-center gap-10 hidden md:flex">
            <ul className="flex items-center justify-center gap-10 text-[16px]">
            {NAV_ITEMS.map((item: any, i: number) => (
              <li
              onMouseEnter={() => setDrop(drop == i + 1 ? !drop : i + 1)}
              onMouseLeave={() => setDrop(drop == i + 1 ? !drop : i + 1)}
              key={i}
              className={`group/link relative cursor-pointer hover:scale-[1.02] flex gap-2 items-end hover:text-lime-800 duration-200`}
              >
              {item.label}
              {item.items && (
                <IoIosArrowDown
                className={`group-hover/link:rotate-180 group-hover/link:text-red-500 ${
                  drop == i + 1 && "rotate-180 text-red-500"
                } duration-300`}
                />
              )}
              {item?.items && (
                <ul
                className={`${
                  drop == i + 1
                  ? "translate-y-3 opacity-100"
                  : "opacity-0 -translate-y-[65px]"
                } overflow-hidden cursor-pointer min-w-40 pt-5 border-t-0 mx-auto absolute top-full left-[50%] -translate-x-[50%] rounded-xl duration-300 flex flex-col items-center bg-white border border-zinc-200`}
                >
                {item?.items?.map((it: any, ii: number) => (
                  <li
                  key={ii}
                  className="p-3 px-5 w-full text-center hover:bg-zinc-100 duration-300"
                  >
                  {it.label}
                  </li>
                ))}
                </ul>
              )}
              </li>
            ))}
            </ul>
          <button className=" p-2 px-5 rounded-xl text-white bg-lime-600 flex items-center gap-2 text-base">
            <FaHeart /> Donate
          </button>
        </div>
        <div className="md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#179900"/>
        </div>{/* <IoMenuOutline className="md:hidden text-4xl text-lime-600"/> */}
      </div>
      {isOpen && (
        <section
          data-aos="fade-down"
          className={`z-[5] md:hidden bg-lime-100 fixed top-[90px] w-full py-5 h-full overflow-y-scroll`}
        >

        {NAV_ITEMS.map((item, index) => (
                <div key={index} className="w-full">
                  <div
                  onClick={() => setDrop(drop === index+1 ? null : index+1)}
                  className={
                    "hover:font-bold hover:translate-x-1 w-full justify-between box-border p-3 px-10 pr-20 hover:bg-lime-200 duration-300 font-bold text-lime-600 flex items-center border-b border-lime-100"
                  }
                  >
                  <p className="text-xl text-lime-700 flex items-center gap-4 ">
                    <span className="text-lg text-zinc-600"><IoMdArrowForward /></span>{item.label}
                  </p>
                  {item?.items && <><IoIosArrowDropdownCircle className={`text-2xl text-lime-700 ${drop === index+1 ? 'rotate-180' : ''} duration-300`} /></>}
                  </div>
                  {item?.items && (
                  <ul className={`bg-lime-200 overflow-hidden transition-[max-height] duration-500 ease-in-out ${drop === index+1 ? 'max-h-96' : 'max-h-0'}`}>
                    {item.items.map((subItem, subIndex) => (
                    <li key={subIndex} className="p-3 px-14 text-lime-700 border-b border-lime-100">
                      {subItem.label}
                    </li>
                    ))}
                  </ul>
                  )}
                </div>
            ))}
        </section>
      )}
    </div>
  );
}

export default Nav;
