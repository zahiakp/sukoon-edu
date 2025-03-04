'use client'
import React, { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import PaymentModal from "./PaymentModal";
import dynamic from "next/dynamic";

const PaymentModal = dynamic(() => import("./PaymentModal"), { ssr: false });

function Plans() {
  const [view, setView] = useState<any>('');
  const [cusAmount,setCusAmount] = useState<any>()
  const [sqFeet,setSqFeet] =useState<any>(1)
  const [sq5Feet,set5SqFeet] =useState<any>(5)
  const [sq5FeetAmd,set5SqFeetAmd] =useState<any>(7500)
  const [sqFeetAmd,setSqFeetAmd] =useState<any>(1500)
  const [tenSqFeet,setTenSqFeet] =useState<any>(10)
  const [tenSqFeetAmd,setTenSqFeetAmd] =useState<any>(15000)
  const [hundredSqFeet,setHundredSqFeet] =useState<any>(100)
  const [hundredSqFeetAmd,setHundredSqFeetAmd] =useState<any>(150000)
  const [classRoom,setClassRoom] =useState<any>(1)
  const [classRoomAmd,setClassRoomAmd] =useState<any>(800000)
  const [classRoomFur,setClassRoomFur] =useState<any>(1)
  const [classRoomFurAmd,setClassRoomFurAmd] =useState<any>(200000)
  const ITEMS = [
    { icon: "",id:"1",count:sqFeet,min:1,max:99,addvalue:1,setCount:setSqFeet,setCountAmd:setSqFeetAmd,amd:1500, size: `${sqFeet} Sq feet`,amount:sqFeetAmd,label:`${sqFeet}%20Sq%20feet`, plan: sqFeetAmd ,link:""},
    { icon: "",id:"2",count:sq5Feet,min:5,max:99,addvalue:1,setCount:set5SqFeet,setCountAmd:set5SqFeetAmd,amd:1500, size: `${sq5Feet} Sq feet`,amount:sq5FeetAmd,label:`${sq5Feet}%20Sq%20feet`, plan: sq5FeetAmd ,link:""},
    { icon: "",id:"3",count:tenSqFeet,min:10,max:990,addvalue:10,setCount:setTenSqFeet,setCountAmd:setTenSqFeetAmd,amd:1500, size: `${tenSqFeet} Sq feet`,amount:tenSqFeetAmd,label:`${tenSqFeet}%20Sq%20feet`, plan: tenSqFeetAmd ,link:""},
    { icon: "",id:"4",count:hundredSqFeet,min:100,max:9900,addvalue:100,setCount:setHundredSqFeet,setCountAmd:setHundredSqFeetAmd,amd:1500, size: `${hundredSqFeet} Sq feet`,amount:hundredSqFeetAmd,label:`${hundredSqFeet}%20Sq%20feet`, plan: hundredSqFeetAmd,link:"" },
    { icon: "",id:"5",count:classRoomFur,min:1,max:9,addvalue:1,setCount:setClassRoomFur,setCountAmd:setClassRoomFurAmd,amd:200000, size: `${classRoomFur} Classroom Furniture`,amount:classRoomFurAmd,label:`${classRoomFur}%20Classroom%20Furniture`, plan:"2,00,000",link:"" },
    { icon: "",id:"6",count:classRoom,min:1,max:9,addvalue:1,setCount:setClassRoom,setCountAmd:setClassRoomAmd,amd:800000, size:`${classRoom} Classroom`,amount:classRoomAmd,label:`${classRoom}%20Classroom`, plan: "8,00,000",link:"" },
    // { icon: "",count:"",min:"",max:"",addvalue:"",setCount:"",setCountAmd:"",amd:"", size: "Other",amount:"",label:"other", plan: "Custom",link:"" },
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

console.log(cusAmount);
const validCounts = [sqFeet, sq5Feet, tenSqFeet]

  return (
    <div className=" py-8 relative overflow-hidden group bg-lime-50">
      <div className="w-full max-w-[1000px] mx-auto p-7 md:p-10 flex flex-col items-center">
      <div className="mt-10 w-full md:grid hidden md:grid-cols-3 gap-4">
        {ITEMS.filter((item:any)=>item.min!==5).map((item: any, i: number) => (
        <div data-aos="fade-up" data-aos-delay={i*100}
          key={i}
          className="relative border z-[1] border-b-lime-500 group-hover/box:border-b-4 border-zinc-300 bg-zinc-100 hover:shadow-lg hover:-translate-y-1 duration-300 group/box rounded-2xl"
        >
          {" "}
          <p className="text-lg p-3 px-5 flex items-center justify-between">{item.size}{item.label!=="other"&&<span className="flex gap-1">
            <button onClick={()=>handleDecrement(item.count,item.amd,item.setCount,item.setCountAmd,item.min,item.addvalue)} className="rounded-[8px] border border-lime-300 text-lime-800 p-2 bg-lime-50 w-8 h-8 flex items-center justify-center cursor-pointer"><IoIosArrowBack /></button>
            <button onClick={()=>{handleIncrement(item.count,item.amd,item.setCount,item.setCountAmd,item.max,item.addvalue)}} className="rounded-[8px] border border-lime-300 text-lime-800 p-2 bg-lime-50 w-8 h-8 flex items-center justify-center cursor-pointer"><IoIosArrowForward /></button></span>}</p>
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
        <div data-aos="fade-up" data-aos-delay={600}
          className="relative border z-[1] border-b-lime-500 group-hover/box:border-b-4 border-zinc-300 bg-zinc-100 hover:shadow-lg hover:-translate-y-1 duration-300 group/box rounded-2xl"
        >
          {" "}
          <p className="text-lg p-3 px-5 flex items-center justify-between">Other Amount</p>
          <div className="w-full h-1 relative after:h-1 after:bg-lime-600 after:w-0 after:duration-300  group-hover/box:after:w-full after:left-0 after:absolute after:top-0"></div>
          <div className="rounded-b-2xl px-4 md:px-10 py-5 pt-2 bg-white border-t border-lime-400  flex flex-col h-32">
          <p className="Grotesque-font flex items-center gap-2 text-3xl md:text-4xl font-medium text-lime-600">₹<input onChange={(e) => setCusAmount(e.target.value)} placeholder="Enter Here" className="w-full border-none outline-none text-3xl md:text-5xl font-semibold"/></p>
          
            {/* 456564 */}
          <button onClick={()=>setView(cusAmount)} className="flex items-center gap-3 text-sm justify-center absolute px-5 bottom-4 right-5 text-white group-hover/box:shadow-lg duration-300 p-2 rounded-3xl bg-lime-200 group-hover/box:bg-lime-500 mt-4">
            <RiArrowRightLine className="group-hover/box:text-lg md:group-hover/box:text-2xl duration-300" />
          </button>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full grid md:hidden grid-cols-2 gap-4">
        {ITEMS.filter((item: any) => ['1','2','3'].includes(item.id)).map((item: any, i: number) => (
        <div data-aos="fade-up" data-aos-delay={i*100}
          key={i}
          className="relative border z-[1] border-b-lime-500 group-hover/box:border-b-4 border-zinc-300 bg-zinc-100 hover:shadow-lg hover:-translate-y-1 duration-300 group/box rounded-2xl"
        >
          {" "}
          <p className="p-2 px-3 flex flex-col items-start justify-between">{item.size}{item.label!=="other"&&<span className="flex w-full gap-1 justify-end">
            <button onClick={()=>handleDecrement(item.count,item.amd,item.setCount,item.setCountAmd,item.min,item.addvalue)} className="rounded-[8px] border border-lime-300 text-lime-800 p-2 bg-lime-50 w-8 h-8 flex items-center justify-center cursor-pointer"><IoIosArrowBack /></button>
            <button onClick={()=>{handleIncrement(item.count,item.amd,item.setCount,item.setCountAmd,item.max,item.addvalue)}} className="rounded-[8px] border border-lime-300 text-lime-800 p-2 bg-lime-50 w-8 h-8 flex items-center justify-center cursor-pointer"><IoIosArrowForward /></button></span>}</p>
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
        <div data-aos="fade-up" data-aos-delay={400}
          className="relative border z-[1] border-b-lime-500 group-hover/box:border-b-4 border-zinc-300 bg-zinc-100 hover:shadow-lg hover:-translate-y-1 duration-300 group/box rounded-2xl"
        >
          {" "}
          <p className=" p-3 px-5 flex items-center justify-between">Other Amount</p>
          <div className="w-full h-1 relative after:h-1 after:bg-lime-600 after:w-0 after:duration-300  group-hover/box:after:w-full after:left-0 after:absolute after:top-0"></div>
          <div className="rounded-b-2xl px-4 md:px-10 py-5 pt-2 bg-white border-t border-lime-400  flex flex-col h-32">
          <p className="Grotesque-font flex items-center gap-2 text-3xl md:text-4xl font-medium text-lime-600">₹<input onChange={(e) => setCusAmount(e.target.value)} placeholder="Enter Here" className="w-full border-none outline-none text-3xl md:text-5xl font-semibold"/></p>
          
            {/* 456564 */}
          <button onClick={()=>setView(cusAmount)} className="flex items-center gap-3 text-sm justify-center absolute px-5 bottom-4 right-5 text-white group-hover/box:shadow-lg duration-300 p-2 rounded-3xl bg-lime-200 group-hover/box:bg-lime-500 mt-4">
            <RiArrowRightLine className="group-hover/box:text-lg md:group-hover/box:text-2xl duration-300" />
          </button>
          </div>
        </div>
      </div>
      <div className="mt-5 w-full grid md:hidden grid-cols-1 gap-4">
        {ITEMS.filter((item: any) => ['4','5','6'].includes(item.id)).map((item: any, i: number) => (
        <div data-aos="fade-up" data-aos-delay={(i+5)*100}
          key={i}
          className="relative border z-[1] border-b-lime-500 group-hover/box:border-b-4 border-zinc-300 bg-zinc-100 hover:shadow-lg hover:-translate-y-1 duration-300 group/box rounded-2xl"
        >
          {" "}
          <p className="p-2 px-3 flex flex-col items-start justify-between">{item.size}{item.label!=="other"&&<span className="flex w-full gap-1 justify-end">
            <button onClick={()=>handleDecrement(item.count,item.amd,item.setCount,item.setCountAmd,item.min,item.addvalue)} className="rounded-[8px] border border-lime-300 text-lime-800 p-2 bg-lime-50 w-8 h-8 flex items-center justify-center cursor-pointer"><IoIosArrowBack /></button>
            <button onClick={()=>{handleIncrement(item.count,item.amd,item.setCount,item.setCountAmd,item.max,item.addvalue)}} className="rounded-[8px] border border-lime-300 text-lime-800 p-2 bg-lime-50 w-8 h-8 flex items-center justify-center cursor-pointer"><IoIosArrowForward /></button></span>}</p>
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
      </div>
      </div>
      <PaymentModal amount={view} visible={view} setVisible={setView} />
    </div>
  );
}

export default Plans;
