'use client'
import React, { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import PaymentModal from "./PaymentModal";
import dynamic from "next/dynamic";
import { TextAnimate } from "@/components/ui/text-animate";
import { FiMinus, FiPlus } from "react-icons/fi";
import { GiHotMeal } from "react-icons/gi";
import { BiSolidDonateHeart } from "react-icons/bi";

const PaymentModal = dynamic(() => import("./PaymentModal"), { ssr: false });

function General() {
  const [view, setView] = useState<any>('');
  const [cusAmount,setCusAmount] = useState<any>()
  const [tenSqFeet,setTenSqFeet] =useState<any>(1)
  const [tenSqFeetAmd,setTenSqFeetAmd] =useState<any>(1000)
  const [fiftySqFeet,setFiftySqFeet] =useState<any>(1)
  const [fiftySqFeetAmd,setFiftySqFeetAmd] =useState<any>(2500)
  const [fiftySq2Feet,setFiftySq2Feet] =useState<any>(1)
  const [fiftySq2FeetAmd,setFiftySq2FeetAmd] =useState<any>(5000)
  const ITEMS = [
    { icon: "",id:"1",count:tenSqFeet,min:1,max:9999,addvalue:1,setCount:setTenSqFeet,setCountAmd:setTenSqFeetAmd,amd:1000, size: `${tenSqFeet} Bronze Plan`,amount:tenSqFeetAmd,label:`${tenSqFeet}%20Sq%20feet`, plan: tenSqFeetAmd ,link:""},
    { icon: "",id:"2",count:fiftySqFeet,min:1,max:9999,addvalue:1,setCount:setFiftySqFeet,setCountAmd:setFiftySqFeetAmd,amd:2500, size: `${fiftySqFeet} Silver Plan`,amount:fiftySqFeetAmd,label:`${fiftySqFeet}%20Sq%20feet`, plan: fiftySqFeetAmd,link:"" },
    { icon: "",id:"3",count:fiftySq2Feet,min:1,max:9999,addvalue:1,setCount:setFiftySq2Feet,setCountAmd:setFiftySq2FeetAmd,amd:5000, size: `${fiftySq2Feet} Gold Plan`,amount:fiftySq2FeetAmd,label:`${fiftySq2Feet}%20Sq%20feet`, plan: fiftySq2FeetAmd,link:"" },
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
    <div id="meals" className=" py-8 relative overflow-hidden group bg-sky-50">
      <div className="w-full max-w-[1000px] mx-auto p-7 md:p-10 flex flex-col items-center">
       
                        <h6 className="text-4xl md:text-5xl text-center Grotesque-font text-sky-600 font-bold flex gap-4 items-center">
                                                                                                        
                                                                                                                <span className="text-2xl text-sky-600 p-4 w-fit rounded-2xl bg-sky-200/70"><BiSolidDonateHeart /></span>
                                                                                                                  {/* <TextAnimate animation="blurInUp" by="word"> */}
                                                                                                                  Donation
                                                                                                                          {/* </TextAnimate> */}
                                                                                                                        </h6>
                                                                                                        <p className="text-zinc-500 text-center text-[16px] my-5">
Your contribution will support underprivileged students, helping provide the resources and opportunities they need to excel in their education and build a brighter future.                                                                                                        </p>
      <div className="mt-10 w-full grid grid-cols-2 md:grid-cols-2 gap-4">
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
        <div data-aos="fade-up" data-aos-delay={400}
                  className="relative border z-[1] border-b-sky-500 group-hover/box:border-b-4 border-zinc-300 bg-zinc-100 hover:shadow-lg hover:-translate-y-1 duration-300 group/box rounded-2xl"
                >
                  {" "}
                  <p className=" p-3 px-5 flex items-center justify-between">Custom Amount</p>
                  <div className="w-full h-1 relative after:h-1 after:bg-sky-600 after:w-0 after:duration-300  group-hover/box:after:w-full after:left-0 after:absolute after:top-0"></div>
                  <div className="rounded-b-2xl px-4 md:px-10 py-5 pt-2 bg-white border-t border-sky-400  flex flex-col h-32">
                  <p className="Grotesque-font flex items-center gap-2 text-3xl md:text-4xl font-medium text-sky-600">₹<input onChange={(e) => setCusAmount(e.target.value)} placeholder="Enter Here" className="w-full border-none outline-none text-3xl md:text-5xl font-semibold"/></p>
                  
                  <button onClick={()=>setView(cusAmount)} className="flex items-center gap-3 text-sm justify-center absolute px-5 bottom-4 right-5 text-white group-hover/box:shadow-lg duration-300 p-2 rounded-3xl bg-sky-200 group-hover/box:bg-sky-500 mt-4">
                    <RiArrowRightLine className="group-hover/box:text-lg md:group-hover/box:text-2xl duration-300" />
                  </button>
                  </div>
                </div>
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
              <div data-aos="fade-up" data-aos-delay={400}
                className="relative border z-[1] border-b-sky-500 group-hover/box:border-b-4 border-zinc-300 bg-zinc-100 hover:shadow-lg hover:-translate-y-1 duration-300 group/box rounded-2xl"
              >
                {" "}
                <p className=" p-3 px-5 flex items-center justify-between">Custom Amount</p>
                <div className="w-full h-1 relative after:h-1 after:bg-sky-600 after:w-0 after:duration-300  group-hover/box:after:w-full after:left-0 after:absolute after:top-0"></div>
                <div className="rounded-b-2xl px-4 md:px-10 py-5 pt-2 bg-white border-t border-sky-400  flex flex-col h-32">
                <p className="Grotesque-font flex items-center gap-2 text-3xl md:text-4xl font-medium text-sky-600">₹<input onChange={(e) => setCusAmount(e.target.value)} placeholder="Enter Here" className="w-full border-none outline-none text-3xl md:text-5xl font-semibold"/></p>
                
                <button onClick={()=>setView(cusAmount)} className="flex items-center gap-3 text-sm justify-center absolute px-5 bottom-4 right-5 text-white group-hover/box:shadow-lg duration-300 p-2 rounded-3xl bg-sky-200 group-hover/box:bg-sky-500 mt-4">
                  <RiArrowRightLine className="group-hover/box:text-lg md:group-hover/box:text-2xl duration-300" />
                </button>
                </div>
              </div>
            </div>
      </div>
      <PaymentModal amount={view} visible={view} setVisible={setView} />
    </div>
  );
}

export default General;
