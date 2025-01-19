import React from "react";
import router from "./func";
import UserLayout from "@/components/Layout/UserLayout";

function page({ params }: { params: any }) {
  const data = router;
  console.log(data);

  return (
    <UserLayout>
      <div className="">
        <div className="w-[80%] flex flex-col justify-center items-center max-w-[1200px] mx-auto min-h-[400px] bg-green-500/10 md:p-20 my-20 rounded-2xl border border-green-500">
          <div className="relative w-fit">
            <img src="\svg\success.svg" alt="" className="absolute animate-ping mx-auto top-0 bottom-0 opacity-20 -z-[1]"/>
            <img src="\svg\success.svg" alt="" className="z-[5]"/>
          </div>
          <h6 className="text-6xl text-green-600 font-bold Grotesque-font mt-7">You're Making Dreams Come True</h6>
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
      </div>
    </UserLayout>
  );
}

export default page;
