'use client'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import dynamic from 'next/dynamic';
import { RiArrowRightLine } from 'react-icons/ri';

function page() {
  const DEMO_ITEMS = [
    { icon: "", size: "Admission Fee (one-time)", plan: "15,000" },
    { icon: "", size: "Annual Academic Fee", plan: "35,000" },
    { icon: "", size: "Residential & Food Fee", plan: "88,000" },
    { icon: "", size: "Extra-Curricular & Study Tours", plan: "20,000" },
    { icon: "", size: "Other", plan: "Custom" },
  ];
  const LoginForm = dynamic(() => import('./Form'), { ssr: false });
  return (
    <div className='w-screen min-h-screen flex items-center justify-center flex-col relative overflow-hidden'>
      <LoginForm/>
<div className="mt-10 w-[90%] max-w-[1000px] grid grid-cols-2 md:grid-cols-3 gap-4">
          {DEMO_ITEMS.map((item: any, i: number) => (
            <div
              key={i}
              className=" relative border z-[1] border-b-sky-500 group-hover/box:border-b-4 border-zinc-300 bg-zinc-100 hover:shadow-lg hover:-translate-y-1 duration-300 group/box rounded-2xl"
            >
              {" "}
              <p className="p-3 px-5 text-center">{item.size}</p>
              <div className="w-full h-1 relative after:h-1 after:bg-sky-600 after:w-0 after:duration-300  group-hover/box:after:w-full after:left-0 after:absolute after:top-0"></div>
              <div className="rounded-b-2xl   px-4 md:px-10 py-5 pt-2 bg-white border-t border-sky-400  flex flex-col h-20">
                {/* <p className="text-sm mt-5">{item.size}</p> */}
                <p className="Grotesque-font group-hover/box:scale-110 duration-300 text-3xl md:text-4xl font-semibold text-sky-600">
                  {item.plan}
                </p>
                <a href="/login" className="flex items-center gap-3 text-sm justify-center absolute px-5 bottom-4 right-5 text-white group-hover/box:shadow-lg duration-300 p-2 rounded-3xl bg-sky-200 group-hover/box:bg-sky-500 mt-4">
                  <RiArrowRightLine className="group-hover/box:text-lg md:group-hover/box:text-2xl duration-300" />
                </a>
              </div>
            </div>
          ))}
          
        </div>
      <a href="/" className='mt-5 text-zinc-500 flex hover:text-lime-600 duration-200 items-center gap-1'><IoIosArrowBack />
      back to home</a>
      <img src="/svg/Logo.svg" alt="" className="w-[500px] hidden md:block absolute -bottom-44 -right-20 opacity-10 " />
    </div>
  )
}

export default page
