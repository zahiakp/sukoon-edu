

import React from "react";
import Content from "./Content";
import SocialShare from "./SocialShare";
import { decodeId } from "@/components/common/decode";
import UserLayout from "@/components/Layout/UserLayout";
import { ROOT_URL } from "@/components/data/func";
import Hero from "./Hero";
import { getArticlebyId } from "@/app/(admin)/admin/diaries/Add/func";



async function page({ params }: { params: any }) {
  console.log(params);
  
  const data = await getArticlebyId(decodeId(params.link));

  return (
    
    <UserLayout>
      <Hero data={data?.data}/>
      <main className="flex w-full justify-center my-20">
        <div className="w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-3  gap-10">
          <div className="col-span-2">
          
            <Content data={data?.data} />
          </div>
          <div className="md:col-span-1 flex flex-col gap-5">
            <div className="bg-lime-50 border border-lime-300 flex flex-col gap-4 rounded-xl p-7">
              <p className="font-semibold">Share Post</p>
              <SocialShare data={data?.data}/>
            </div>
            {/* <article
                        className="p-10 rounded-xl bg-blue-100"
                        dangerouslySetInnerHTML={{ __html: data?.data?.body }}
                      /> */}
            <div className="flex flex-col">
              <p className="text-xl font-bold">Recents</p>
              <div className="flex flex-col gap-3 my-3">
                {[1,1,1,1,1].map((it:any)=>(
                  <div className="h-24 w-full bg-zinc-100 rounded-xl animate-pulse" key={it}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </UserLayout>
  );
}

export default page;




export async function generateMetadata({ params }: { params: any }) {
  const id = decodeId(params.link)
  const data = await getArticlebyId(id);
  return {
    title: `${data?.data?.title} | Sukoon Edu Foundation`,
    description: `${data?.data?.body}`,
    metadataBase: new URL(`https://www.mysukoon.in/diary/${params.link}`),
    openGraph: {
      url: `https://www.mysukoon.in/diary/${params.link}`,
      title: data?.data?.title,
      description: `${data?.data?.body}`,
      images: [data?.data?.image!=""? `${ROOT_URL}uploads/news/${data?.data?.image}`:"https://mysukoon.in/image/sukoonlogo.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: data?.data?.title,
      description: `${data?.data?.body}`,
      image: data?.data?.image!=""? `${ROOT_URL}uploads/news/${data?.data?.image}`:"https://mysukoon.in/image/sukoonlogo.png",
    },
  };
}