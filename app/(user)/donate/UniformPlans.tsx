'use client'
import React, { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import PaymentModal from "./PaymentModal";
import dynamic from "next/dynamic";
import { TextAnimate } from "@/components/ui/text-animate";
import { FiMinus, FiPlus } from "react-icons/fi";

const PaymentModal = dynamic(() => import("./PaymentModal"), { ssr: false });

function UniformPlans() {
  const [view, setView] = useState<any>('');
  const [cusAmount,setCusAmount] = useState<any>()
  const [tenSqFeet,setTenSqFeet] =useState<any>(1)
  const [tenSqFeetAmd,setTenSqFeetAmd] =useState<any>(1000)
  const [fiftySqFeet,setFiftySqFeet] =useState<any>(10)
  const [fiftySqFeetAmd,setFiftySqFeetAmd] =useState<any>(10000)
  const ITEMS = [
    { icon: "",id:"1",count:tenSqFeet,min:1,max:99,addvalue:1,setCount:setTenSqFeet,setCountAmd:setTenSqFeetAmd,amd:1000, size: `${tenSqFeet} Set Uniform`,amount:tenSqFeetAmd,label:`${tenSqFeet}%20Sq%20feet`, plan: tenSqFeetAmd ,link:""},
    { icon: "",id:"2",count:fiftySqFeet,min:10,max:9999,addvalue:10,setCount:setFiftySqFeet,setCountAmd:setFiftySqFeetAmd,amd:1000, size: `${fiftySqFeet} Set Uniform`,amount:fiftySqFeetAmd,label:`${fiftySqFeet}%20Sq%20feet`, plan: fiftySqFeetAmd,link:"" },
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
    <div className=" py-8 relative overflow-hidden group bg-lime-50">
      <div className="w-full max-w-[1000px] mx-auto p-7 md:p-10 flex flex-col items-center">
        <h6 className="text-4xl md:text-5xl text-center Grotesque-font text-lime-600 font-bold">
                          {/* <TextAnimate animation="blurInUp" by="word"> */}
                            Uniform
                          {/* </TextAnimate> */}
                        </h6>
      <div className="mt-10 w-full hidden md:grid grid-cols-2 md:grid-cols-2 gap-4">
        {ITEMS.map((item: any, i: number) => (
        <div data-aos="fade-up" data-aos-delay={i*100}
          key={i}
          className="relative border z-[1] border-b-lime-500 group-hover/box:border-b-4 border-zinc-300 bg-zinc-100 hover:shadow-lg hover:-translate-y-1 duration-300 group/box rounded-2xl"
        >
          {" "}
          <p className="text-lg p-3 px-5 flex items-center justify-between">{item.size}{item.label!=="other"&&<span className="flex gap-1">
            <button onClick={()=>handleDecrement(item.count,item.amd,item.setCount,item.setCountAmd,item.min,item.addvalue)} className="rounded-[8px] border border-lime-300 text-lime-800 p-2 bg-lime-50 w-8 h-8 flex items-center justify-center cursor-pointer"><FiMinus /></button>
            <button onClick={()=>{handleIncrement(item.count,item.amd,item.setCount,item.setCountAmd,item.max,item.addvalue)}} className="rounded-[8px] border border-lime-300 text-lime-800 p-2 bg-lime-50 w-8 h-8 flex items-center justify-center cursor-pointer"><FiPlus /></button></span>}</p>
          <div className="w-full h-1 relative after:h-1 after:bg-lime-600 after:w-0 after:duration-300  group-hover/box:after:w-full after:left-0 after:absolute after:top-0"></div>
          <div className="rounded-b-2xl px-4 md:px-10 py-5 pt-2 bg-white border-t border-lime-400  flex flex-col h-32">
          <p className="Grotesque-font group-hover/box:scale-110 duration-300 text-5xl font-semibold text-lime-600">
          <span className="text-4xl font-normal mr-2">₹</span>{item.amount}
          </p>
          <button onClick={()=>setView(item.amount)} className="flex items-center gap-3 text-sm justify-center absolute px-5 bottom-4 right-5 text-white group-hover/box:shadow-lg duration-300 p-2 rounded-3xl bg-lime-200 group-hover/box:bg-lime-500 mt-4">
            <RiArrowRightLine className="group-hover/box:text-lg md:group-hover/box:text-2xl duration-300" />
          </button>
          </div>
        </div>
        ))}
        {/* <div data-aos="fade-up" data-aos-delay={600}
          className="relative border z-[1] border-b-lime-500 group-hover/box:border-b-4 border-zinc-300 bg-zinc-100 hover:shadow-lg hover:-translate-y-1 duration-300 group/box rounded-2xl"
        >
          {" "}
          <p className="text-lg p-3 px-5 flex items-center justify-between">Other Amount</p>
          <div className="w-full h-1 relative after:h-1 after:bg-lime-600 after:w-0 after:duration-300  group-hover/box:after:w-full after:left-0 after:absolute after:top-0"></div>
          <div className="rounded-b-2xl px-4 md:px-10 py-5 pt-2 bg-white border-t border-lime-400  flex flex-col h-32">
          <p className="Grotesque-font flex items-center gap-2 text-3xl md:text-4xl font-medium text-lime-600">₹<input onChange={(e) => setCusAmount(e.target.value)} placeholder="Enter Here" className="w-full border-none outline-none text-3xl md:text-5xl font-semibold"/></p>
          
            
          <button onClick={()=>setView(cusAmount)} className="flex items-center gap-3 text-sm justify-center absolute px-5 bottom-4 right-5 text-white group-hover/box:shadow-lg duration-300 p-2 rounded-3xl bg-lime-200 group-hover/box:bg-lime-500 mt-4">
            <RiArrowRightLine className="group-hover/box:text-lg md:group-hover/box:text-2xl duration-300" />
          </button>
          </div>
        </div> */}
      </div>
       <div className="mt-10 w-full grid md:hidden grid-cols-2 gap-4">
              {ITEMS.map((item: any, i: number) => (
              <div data-aos="fade-up" data-aos-delay={i*100}
                key={i}
                className="relative border z-[1] border-b-lime-500 group-hover/box:border-b-4 border-zinc-300 bg-zinc-100 hover:shadow-lg hover:-translate-y-1 duration-300 group/box rounded-2xl"
              >
                {" "}
                <p className="p-2 px-3 flex flex-col items-start justify-between">{item.size}{item.label!=="other"&&<span className="flex w-full gap-1 justify-end">
                  <button onClick={()=>handleDecrement(item.count,item.amd,item.setCount,item.setCountAmd,item.min,item.addvalue)} className="rounded-[8px] border border-lime-300 text-lime-800 p-2 bg-lime-50 w-8 h-8 flex items-center justify-center cursor-pointer"><FiMinus /></button>
                  <button onClick={()=>{handleIncrement(item.count,item.amd,item.setCount,item.setCountAmd,item.max,item.addvalue)}} className="rounded-[8px] border border-lime-300 text-lime-800 p-2 bg-lime-50 w-8 h-8 flex items-center justify-center cursor-pointer"><FiPlus /></button></span>}</p>
                <div className="w-full h-1 relative after:h-1 after:bg-lime-600 after:w-0 after:duration-300  group-hover/box:after:w-full after:left-0 after:absolute after:top-0"></div>
                <div className="rounded-b-2xl px-4 md:px-10 py-5 pt-2 bg-white border-t border-lime-400  flex flex-col h-24">
                <p className="Grotesque-font group-hover/box:scale-110 duration-300 text-3xl font-semibold text-lime-600">
                <span className="text-2xl font-normal mr-2">₹</span>{item.amount}
                </p>
                <button onClick={()=>setView(item.amount)} className="flex items-center gap-3 text-sm justify-center absolute px-5 bottom-4 right-5 text-white group-hover/box:shadow-lg duration-300 p-2 rounded-3xl bg-lime-200 group-hover/box:bg-lime-500 mt-4">
                  <RiArrowRightLine className="group-hover/box:text-lg md:group-hover/box:text-2xl duration-300" />
                </button>
                </div>
              </div>
              ))}
              {/* <div data-aos="fade-up" data-aos-delay={400}
                className="relative border z-[1] border-b-lime-500 group-hover/box:border-b-4 border-zinc-300 bg-zinc-100 hover:shadow-lg hover:-translate-y-1 duration-300 group/box rounded-2xl"
              >
                {" "}
                <p className=" p-3 px-5 flex items-center justify-between">Other Amount</p>
                <div className="w-full h-1 relative after:h-1 after:bg-lime-600 after:w-0 after:duration-300  group-hover/box:after:w-full after:left-0 after:absolute after:top-0"></div>
                <div className="rounded-b-2xl px-4 md:px-10 py-5 pt-2 bg-white border-t border-lime-400  flex flex-col h-32">
                <p className="Grotesque-font flex items-center gap-2 text-3xl md:text-4xl font-medium text-lime-600">₹<input onChange={(e) => setCusAmount(e.target.value)} placeholder="Enter Here" className="w-full border-none outline-none text-3xl md:text-5xl font-semibold"/></p>
                
                <button onClick={()=>setView(cusAmount)} className="flex items-center gap-3 text-sm justify-center absolute px-5 bottom-4 right-5 text-white group-hover/box:shadow-lg duration-300 p-2 rounded-3xl bg-lime-200 group-hover/box:bg-lime-500 mt-4">
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

export default UniformPlans;
