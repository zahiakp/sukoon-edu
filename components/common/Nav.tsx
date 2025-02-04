'use client';
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaHeart, FaYoutube } from "react-icons/fa";
import { IoArrowDownCircle, IoMenu, IoMenuOutline } from "react-icons/io5";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import classNames from "classnames";
import { IoIosArrowDown, IoIosArrowDropdownCircle, IoMdArrowForward } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";

function Nav({ active }: any) {
  const [isOpen, setOpen] = useState(false);
  const [drop,setDrop] = useState<any>(false)
  const [hidden,setHidden] = useState<any>()
  const [mobileDrop, setMobileDrop] = useState<number | null>(null);
  const NAV_ITEMS = [
    { label: "Feel Sukoon",items:[
      {label:"About us",path:"/about"},
      {label:"Stories",path:""},
      {label:"Diaries",path:"/diary"},
    ]},
    { label: "Our Projects",path:"/projects",
      items:[
      {label:"Residential Campus",path:"/projects#Residential-Campus"},
      {label:"Village School",path:"/projects#Village-School"},
      {label:"Learning Centers",path:"/projects#Learning-Centres"},
      {label:"Milan",path:"/projects#Sukoon-Milan"},
    ] 
  },
    { label: "Life at Sukoon", path: "/life-sukoon" },
    { label: "Join us", path: "/join" },
    { label: "Connect us", path: "/contact" },
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
  useEffect(()=>{
    let hidden;
    if(drop !== NAV_ITEMS[drop - 1]){
      // setTimeout(()=>{
       hidden = 'opacity-0'
       setHidden(hidden)
    // },1000)
    }
    
  },[])
  return (
    <div className="w-full px-10 bg-white sticky top-0 z-10">
      <div className="w-full max-w-[1200px] h-[90px] md:h-[100px] flex items-center justify-between mx-auto">
        <a href="/"><img src="/svg/sukoon-logo.svg" alt="" className="h-[40px] md:h-[50px]" /></a>
        <div className="items-center gap-10 hidden md:flex">
            <ul className="flex items-center justify-center gap-10 text-[16px]">
            {NAV_ITEMS.map((item: any, i: number) => (
              <a href={item.path}
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
                  ? "max-h-96 "
                  : `max-h-0 h-0 ${hidden}`
                } overflow-hidden cursor-pointer transition-[max-height] min-w-40 pt-7 border-t-0 mx-auto absolute top-full left-[50%] -translate-x-[50%] rounded-xl duration-300 flex flex-col items-center bg-white border border-zinc-200`}
                                >
                {item?.items?.map((it: any, ii: number) => (
                  <a href={it.path}
                  key={ii}
                  className="p-3 px-5 w-full text-center hover:bg-zinc-100 duration-300"
                  >
                  {it.label}
                  </a>
                ))}
                </ul>
              )}
              </a>
            ))}
            </ul>
          <a href="/donate" className=" p-2 px-5 rounded-xl text-white font-semibold bg-lime-500 flex items-center gap-2 text-base">
            <FaHeart className="text-yellow-300"/>
            Donate
          </a>
        </div>
        <div className="md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#179900" size={27} rounded/>
        </div>{/* <IoMenuOutline className="md:hidden text-4xl text-lime-600"/> */}
      </div>
      {
        <section
          className={`z-[5] md:hidden bg-lime-100 fixed top-[90px] ${isOpen ? 'max-w-[1000px]':"max-w-0"} right-0 transition-[max-width] duration-300 w-full py-5 h-[100vh] flex flex-col justify-start overflow-y-scroll`}
        >
<div>
        {NAV_ITEMS.map((item, index) => (
                <div key={index} className="w-full">
                  <div
                  onClick={() => setDrop(drop === index+1 ? null : index+1)}
                  className={
                    "hover:font-bold hover:translate-x-1 w-full justify-between box-border p-3 px-10 pr-20 hover:bg-lime-200/70 duration-300 font-bold text-lime-600 flex items-center border-b border-lime-100"
                  }
                  >
                  <a href={item.path} className="text-xl text-lime-700 flex items-center gap-4 ">
                    <span className="text-lg text-zinc-600"><IoMdArrowForward /></span>{item.label}
                  </a>
                  {item?.items && <><IoIosArrowDropdownCircle className={`text-2xl text-lime-700 ${drop === index+1 ? 'rotate-180' : ''} duration-300`} /></>}
                  </div>
                  {item?.items && (
                  <ul className={`bg-lime-200 overflow-hidden transition-[max-height] duration-500 ease-in-out ${drop === index+1 ? 'max-h-96' : 'max-h-0'}`}>
                    {item.items.map((subItem, subIndex) => (
                    <a href={subItem.path} key={subIndex} className="p-3 px-14 text-lime-700 gap-3 flex items-center border-b hover:bg-lime-300/60 border-lime-100">
                      <span>-</span>{subItem.label}
                    </a>
                    ))}
                  </ul>
                  )}
                </div>
            ))}
            <a href="/donate" className=" p-3 px-6 my-5 w-fit ml-10 rounded-xl text-white font-semibold bg-lime-500 flex items-center gap-2 text-base">
            <FaHeart />
            donate
          </a>
          </div>
            <div className="py-3 mt-3 border-t flex gap-2 border-lime-500 mx-10">
              {[{icon:<AiFillInstagram/>,link:'https://www.instagram.com/mysukoon.in?igsh=ejhubHRlMGJ6dmZo'},{icon:<RiWhatsappFill />,lnik:''},{icon:<TiSocialFacebook />,lnik:''},{icon:<FaXTwitter />,lnik:''},{icon:<FaYoutube />,lnik:''}
].map((icon:any,i:number)=>(
                      <a target="_blank" key={i} href={icon.link} className="p-2 bg-lime-200 text-lime-700 rounded-lg text-xl">{icon.icon}</a>
              ))}
            </div>
        </section>
      }
    </div>
  );
}

export default Nav;
