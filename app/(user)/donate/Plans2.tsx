'use client'
import React, { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import PaymentModal from "./PaymentModal";
import dynamic from "next/dynamic";
import { TextAnimate } from "@/components/ui/text-animate";
import { FiMinus, FiPlus } from "react-icons/fi";

const PaymentModal = dynamic(() => import("./PaymentModal"), { ssr: false });

function Plans2() {
  const [view, setView] = useState<any>('');
  const [cusAmount,setCusAmount] = useState<any>()
  const [tenSqFeet,setTenSqFeet] =useState<any>(10)
  const [tenSqFeetAmd,setTenSqFeetAmd] =useState<any>(800)
  const [fiftySqFeet,setFiftySqFeet] =useState<any>(50)
  const [fiftySqFeetAmd,setFiftySqFeetAmd] =useState<any>(4000)
  const [hundredSqFeet,setHundredSqFeet] =useState<any>(100)
  const [hundredSqFeetAmd,setHundredSqFeetAmd] =useState<any>(8000)
  const [fivehundredSqFeet,setFivehundredSqFeet] =useState<any>(500)
  const [fivehundredSqFeetAmd,setFivehundredSqFeetAmd] =useState<any>(40000)
  const ITEMS = [
    { icon: "",id:"1",count:tenSqFeet,min:10,max:990,addvalue:10,setCount:setTenSqFeet,setCountAmd:setTenSqFeetAmd,amd:80, size: `${tenSqFeet} Bricks`,amount:tenSqFeetAmd,label:`${tenSqFeet}%20Sq%20feet`, plan: tenSqFeetAmd ,link:""},
    { icon: "",id:"2",count:fiftySqFeet,min:50,max:9900,addvalue:50,setCount:setFiftySqFeet,setCountAmd:setFiftySqFeetAmd,amd:80, size: `${fiftySqFeet} Bricks`,amount:fiftySqFeetAmd,label:`${fiftySqFeet}%20Sq%20feet`, plan: fiftySqFeetAmd,link:"" },
    { icon: "",id:"3",count:hundredSqFeet,min:100,max:9900,addvalue:100,setCount:setHundredSqFeet,setCountAmd:setHundredSqFeetAmd,amd:80, size: `${hundredSqFeet} Bricks`,amount:hundredSqFeetAmd,label:`${hundredSqFeet}%20Sq%20feet`, plan: hundredSqFeetAmd,link:"" },
    { icon: "",id:"4",count:fivehundredSqFeet,min:500,max:99000,addvalue:100,setCount:setFivehundredSqFeet,setCountAmd:setFivehundredSqFeetAmd,amd:80, size: `${fivehundredSqFeet} Bricks`,amount:fivehundredSqFeetAmd,label:`${fivehundredSqFeet}%20Sq%20feet`, plan: fivehundredSqFeetAmd,link:"" },
  ];

const handleIncrement = (count: number, amount: number, setCount: any, setCountAmd: any, max: number, addvalue: number) => {
  if (count < max) {
    const newCount = count + addvalue;
    setCount(newCount);
    setCountAmd(amount * newCount);
  }
};

const handleDecrement = (count: number, amount: number, setCount: any, setCountAmd: any, min: number, addvalue: number) => {
  if (count > min) {
    const newCount = count - addvalue;
    setCount(newCount);
    setCountAmd(amount * newCount);
  }
};

// console.log(cusAmount);
// const validCounts = [tenSqFeet]

  return (
    <div className=" py-8 relative overflow-hidden group bg-sky-50">
      <div className="w-full max-w-[1000px] mx-auto p-7 md:p-10 flex flex-col items-center">
        <h6 className="text-4xl md:text-5xl text-center Grotesque-font text-sky-600 font-bold">
                          {/* <TextAnimate animation="blurInUp" by="word"> */}
                            Donate for Bricks
                          {/* </TextAnimate> */}
                        </h6>
      <div className="mt-10 w-full hidden md:grid grid-cols-2 md:grid-cols-2 gap-4">
        {ITEMS.map((item: any, i: number) => (
        <div data-aos="fade-up" data-aos-delay={i*100}
          key={i}
          className="relative border z-[1] border-b-sky-500 group-hover/box:border-b-4 border-zinc-300 bg-zinc-100 hover:shadow-lg hover:-translate-y-1 duration-300 group/box rounded-2xl"
        >
          {" "}
          <p className="text-lg p-3 px-5 flex items-center justify-between">{item.size}{item.label!=="other"&&<span className="flex gap-1">
            <button onClick={()=>handleDecrement(item.count,item.amd,item.setCount,item.setCountAmd,item.min,item.addvalue)} className="rounded-[8px] border border-sky-300 text-sky-800 p-2 bg-sky-50 w-8 h-8 flex items-center justify-center cursor-pointer"><FiMinus /></button>
            <button onClick={()=>{handleIncrement(item.count,item.amd,item.setCount,item.setCountAmd,item.max,item.addvalue)}} className="rounded-[8px] border border-sky-300 text-sky-800 p-2 bg-sky-50 w-8 h-8 flex items-center justify-center cursor-pointer"><FiPlus /></button></span>}</p>
          <div className="w-full h-1 relative after:h-1 after:bg-sky-600 after:w-0 after:duration-300  group-hover/box:after:w-full after:left-0 after:absolute after:top-0"></div>
          <div className="rounded-b-2xl px-4 md:px-10 py-5 pt-2 bg-white border-t border-sky-400  flex flex-col h-32">
          <p className="Grotesque-font group-hover/box:scale-110 duration-300 text-5xl font-semibold text-sky-600">
          <span className="text-4xl font-normal mr-2">₹</span>{item.amount}
          </p>
          <button onClick={()=>setView(item.amount)} className="flex items-center gap-3 text-sm justify-center absolute px-5 bottom-4 right-5 text-white group-hover/box:shadow-lg duration-300 p-2 rounded-3xl bg-sky-200 group-hover/box:bg-sky-500 mt-4">
            <RiArrowRightLine className="group-hover/box:text-lg md:group-hover/box:text-2xl duration-300" />
          </button>
          </div>
        </div>
        ))}
        {/* <div data-aos="fade-up" data-aos-delay={600}
          className="relative border z-[1] border-b-sky-500 group-hover/box:border-b-4 border-zinc-300 bg-zinc-100 hover:shadow-lg hover:-translate-y-1 duration-300 group/box rounded-2xl"
        >
          {" "}
          <p className="text-lg p-3 px-5 flex items-center justify-between">Other Amount</p>
          <div className="w-full h-1 relative after:h-1 after:bg-sky-600 after:w-0 after:duration-300  group-hover/box:after:w-full after:left-0 after:absolute after:top-0"></div>
          <div className="rounded-b-2xl px-4 md:px-10 py-5 pt-2 bg-white border-t border-sky-400  flex flex-col h-32">
          <p className="Grotesque-font flex items-center gap-2 text-3xl md:text-4xl font-medium text-sky-600">₹<input onChange={(e) => setCusAmount(e.target.value)} placeholder="Enter Here" className="w-full border-none outline-none text-3xl md:text-5xl font-semibold"/></p>
          
            
          <button onClick={()=>setView(cusAmount)} className="flex items-center gap-3 text-sm justify-center absolute px-5 bottom-4 right-5 text-white group-hover/box:shadow-lg duration-300 p-2 rounded-3xl bg-sky-200 group-hover/box:bg-sky-500 mt-4">
            <RiArrowRightLine className="group-hover/box:text-lg md:group-hover/box:text-2xl duration-300" />
          </button>
          </div>
        </div> */}
      </div>
       <div className="mt-10 w-full grid md:hidden grid-cols-2 gap-4">
              {ITEMS.map((item: any, i: number) => (
              <div data-aos="fade-up" data-aos-delay={i*100}
                key={i}
                className="relative border z-[1] border-b-sky-500 group-hover/box:border-b-4 border-zinc-300 bg-zinc-100 hover:shadow-lg hover:-translate-y-1 duration-300 group/box rounded-2xl"
              >
                {" "}
                <p className="p-2 px-3 flex flex-col items-start justify-between">{item.size}{item.label!=="other"&&<span className="flex w-full gap-1 justify-end">
                  <button onClick={()=>handleDecrement(item.count,item.amd,item.setCount,item.setCountAmd,item.min,item.addvalue)} className="rounded-[8px] border border-sky-300 text-sky-800 p-2 bg-sky-50 w-8 h-8 flex items-center justify-center cursor-pointer"><FiMinus /></button>
                  <button onClick={()=>{handleIncrement(item.count,item.amd,item.setCount,item.setCountAmd,item.max,item.addvalue)}} className="rounded-[8px] border border-sky-300 text-sky-800 p-2 bg-sky-50 w-8 h-8 flex items-center justify-center cursor-pointer"><FiPlus /></button></span>}</p>
                <div className="w-full h-1 relative after:h-1 after:bg-sky-600 after:w-0 after:duration-300  group-hover/box:after:w-full after:left-0 after:absolute after:top-0"></div>
                <div className="rounded-b-2xl px-4 md:px-10 py-5 pt-2 bg-white border-t border-sky-400  flex flex-col h-24">
                <p className="Grotesque-font group-hover/box:scale-110 duration-300 text-3xl font-semibold text-sky-600">
                <span className="text-2xl font-normal mr-2">₹</span>{item.amount}
                </p>
                <button onClick={()=>setView(item.amount)} className="flex items-center gap-3 text-sm justify-center absolute px-5 bottom-4 right-5 text-white group-hover/box:shadow-lg duration-300 p-2 rounded-3xl bg-sky-200 group-hover/box:bg-sky-500 mt-4">
                  <RiArrowRightLine className="group-hover/box:text-lg md:group-hover/box:text-2xl duration-300" />
                </button>
                </div>
              </div>
              ))}
              {/* <div data-aos="fade-up" data-aos-delay={400}
                className="relative border z-[1] border-b-sky-500 group-hover/box:border-b-4 border-zinc-300 bg-zinc-100 hover:shadow-lg hover:-translate-y-1 duration-300 group/box rounded-2xl"
              >
                {" "}
                <p className=" p-3 px-5 flex items-center justify-between">Other Amount</p>
                <div className="w-full h-1 relative after:h-1 after:bg-sky-600 after:w-0 after:duration-300  group-hover/box:after:w-full after:left-0 after:absolute after:top-0"></div>
                <div className="rounded-b-2xl px-4 md:px-10 py-5 pt-2 bg-white border-t border-sky-400  flex flex-col h-32">
                <p className="Grotesque-font flex items-center gap-2 text-3xl md:text-4xl font-medium text-sky-600">₹<input onChange={(e) => setCusAmount(e.target.value)} placeholder="Enter Here" className="w-full border-none outline-none text-3xl md:text-5xl font-semibold"/></p>
                
                <button onClick={()=>setView(cusAmount)} className="flex items-center gap-3 text-sm justify-center absolute px-5 bottom-4 right-5 text-white group-hover/box:shadow-lg duration-300 p-2 rounded-3xl bg-sky-200 group-hover/box:bg-sky-500 mt-4">
                  <RiArrowRightLine className="group-hover/box:text-lg md:group-hover/box:text-2xl duration-300" />
                </button>
                </div>
              </div> */}
            </div>
      </div>
      <PaymentModal amount={view} visible={view} setVisible={setView} />
    </div>
  );
}

export default Plans2;
