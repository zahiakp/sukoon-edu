import React from "react";
import UserLayout from "@/components/Layout/UserLayout";
import Ripple from "@/components/ui/ripple";
import { HiBadgeCheck, HiCheckCircle } from "react-icons/hi";
import { CheckPaymentStatus } from "./func";
import PaymentSuccessUI from "./paymentUi";

async function page({params}:{params:any}) {
  const status = await CheckPaymentStatus(params.id);

  return (
    <UserLayout>
      {/* <div className="">
        <div className="w-[80%] flex flex-col justify-center items-center max-w-[1200px] mx-auto min-h-[400px] bg-green-500/10 md:p-20 my-20 rounded-2xl border border-green-500">
          <div className="relative  flex h-full w-full  flex-col items-center justify-center">
            <div className="absolute z-0 bg-gradient"></div>
            <Ripple numCircles={5} className="" />
            <HiBadgeCheck className="text-[170px] text-green-500" />
          </div>
          <h6 className="text-6xl text-green-600 font-bold Grotesque-font mt-7">
            You're Making Dreams Come True
          </h6>
          <p className="text-sm text-zinc-700 mt-3 text-center w-3/4">
            Incredible! Your donation has been received, and with it, you've
            just helped turn dreams into reality. Your generosity means more
            than just numbers – it means real change for real people. We're
            thrilled to have you as part of our mission. Get ready to see the
            magic your support creates!
          </p>
          <div className="w-full border-t border-green-400 pt-5 mt-5 flex flex-col items-center justify-center">
            <p className="text-[12px]">Transaction ID</p>
            <p className="font-semibold">{params.id}</p>
          </div>
        </div>
      </div> */}
      <PaymentSuccessUI paymentData={status}/>
    </UserLayout>
  );
}

export default page;
