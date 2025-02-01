'use client'
import React, { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import GooglePayButton from "@google-pay/button-react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { gateway } from "@/components/common/PhonePyGt";
import { ROOT_URL } from "@/components/data/func";
import { initPayment } from "@/components/common/init";

function Plans() {
  const [cusAmount,setCusAmount] = useState<any>()
  const [sqFeet,setSqFeet] =useState<any>(1)
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
    { icon: "",count:sqFeet,min:1,max:99,addvalue:1,setCount:setSqFeet,setCountAmd:setSqFeetAmd,amd:1500, size: `${sqFeet} Sq feet`,amount:sqFeetAmd,label:`${sqFeet}%20Sq%20feet`, plan: sqFeetAmd ,link:""},
    { icon: "",count:tenSqFeet,min:10,max:990,addvalue:10,setCount:setTenSqFeet,setCountAmd:setTenSqFeetAmd,amd:1500, size: `${tenSqFeet} Sq feet`,amount:tenSqFeetAmd,label:`${tenSqFeet}%20Sq%20feet`, plan: tenSqFeetAmd ,link:""},
    { icon: "",count:hundredSqFeet,min:100,max:9900,addvalue:100,setCount:setHundredSqFeet,setCountAmd:setHundredSqFeetAmd,amd:1500, size: `${hundredSqFeet} Sq feet`,amount:hundredSqFeetAmd,label:`${hundredSqFeet}%20Sq%20feet`, plan: hundredSqFeetAmd,link:"" },
    { icon: "",count:classRoomFur,min:1,max:9,addvalue:1,setCount:setClassRoomFur,setCountAmd:setClassRoomFurAmd,amd:200000, size: `${classRoomFur} Classroom Furniture`,amount:classRoomFurAmd,label:`${classRoomFur}%20Classroom%20Furniture`, plan:"2,00,000",link:"" },
    { icon: "",count:classRoom,min:1,max:9,addvalue:1,setCount:setClassRoom,setCountAmd:setClassRoomAmd,amd:800000, size:`${classRoom} Classroom`,amount:classRoomAmd,label:`${classRoom}%20Classroom`, plan: "8,00,000",link:"" },
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
const handlePayment = async (amount:any) => {
  try {
    // const merchantTransactionId = "SEF" + Date.now()
    const resp = await initPayment(amount)
// console.log(resp.data.instrumentResponse.redirectInfo.url);

    // Check for specific success codes or messages
    if (resp.success) {
      console.log('Payment initiated successfully:', resp);
      // Redirect the user to the payment gateway's page
      window.location.href = resp.data.instrumentResponse.redirectInfo.url; 
    } else {
      console.error('Payment initiation failed:', resp);
      // Handle the specific error (e.g., display an error message to the user)
    }

  } catch (error) {
    console.error('Payment failed:', error);
    // Handle the error (e.g., display an error message to the user)
  }
};

console.log(cusAmount);


  return (
    <div className=" py-8 relative overflow-hidden group bg-lime-50">
      <div className="w-full max-w-[1000px] mx-auto p-7 md:p-10 flex flex-col items-center">
      <div className="mt-10 w-full grid grid-cols-2 md:grid-cols-3 gap-4">
        {ITEMS.map((item: any, i: number) => (
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
          {/* <p className="text-sm mt-5"></p> */}
          <p className="Grotesque-font group-hover/box:scale-110 duration-300 text-3xl md:text-5xl font-semibold text-lime-600">
            {item.amount}
          </p>
          <button onClick={()=>handlePayment(item.amount)} className="flex items-center gap-3 text-sm justify-center absolute px-5 bottom-4 right-5 text-white group-hover/box:shadow-lg duration-300 p-2 rounded-3xl bg-lime-200 group-hover/box:bg-lime-500 mt-4">
            <RiArrowRightLine className="group-hover/box:text-lg md:group-hover/box:text-2xl duration-300" />
          </button>
          </div>
        </div>
        ))}
        <div data-aos="fade-up" data-aos-delay={600}
          className="relative border z-[1] border-b-lime-500 group-hover/box:border-b-4 border-zinc-300 bg-zinc-100 hover:shadow-lg hover:-translate-y-1 duration-300 group/box rounded-2xl"
        >
          {" "}
          <p className="text-lg p-3 px-5 flex items-center justify-between">Other</p>
          <div className="w-full h-1 relative after:h-1 after:bg-lime-600 after:w-0 after:duration-300  group-hover/box:after:w-full after:left-0 after:absolute after:top-0"></div>
          <div className="rounded-b-2xl px-4 md:px-10 py-5 pt-2 bg-white border-t border-lime-400  flex flex-col h-32">
          <p className="Grotesque-font flex items-center gap-2 text-3xl md:text-4xl font-medium text-lime-600">₹<input onChange={(e) => setCusAmount(e.target.value)} placeholder="Enter Here" className="w-full border-none outline-none text-3xl md:text-5xl font-semibold"/></p>
          
            {/* 456564 */}
          <button onClick={()=>handlePayment(cusAmount)} className="flex items-center gap-3 text-sm justify-center absolute px-5 bottom-4 right-5 text-white group-hover/box:shadow-lg duration-300 p-2 rounded-3xl bg-lime-200 group-hover/box:bg-lime-500 mt-4">
            <RiArrowRightLine className="group-hover/box:text-lg md:group-hover/box:text-2xl duration-300" />
          </button>
          </div>
        </div>
      </div>
      </div>
      {/* <div className="mx-auto w-fit">
        <GooglePayButton
      environment="TEST"
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
          },
          tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
          },
        },
        ],
        merchantInfo: {
        merchantId: '12345678901234567890',
        merchantName: 'Demo Merchant',
        },
        transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        totalPrice: '100.00',
        currencyCode: 'USD',
        countryCode: 'US',
        },
      }}
      onLoadPaymentData={(paymentRequest: any) => {
        console.log('load payment data', paymentRequest);
      }}
      /></div> */}
    </div>
  );
}

export default Plans;
