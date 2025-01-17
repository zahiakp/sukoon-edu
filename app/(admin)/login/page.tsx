'use client'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import dynamic from 'next/dynamic';

function page() {
  const LoginForm = dynamic(() => import('./Form'), { ssr: false });
  return (
    <div className='w-screen min-h-screen flex items-center justify-center flex-col relative overflow-hidden'>
      <LoginForm/>
      <a href="/" className='mt-5 text-zinc-500 flex hover:text-lime-600 duration-200 items-center gap-1'><IoIosArrowBack />
      back to home</a>
      <img src="/svg/Logo.svg" alt="" className="w-[500px] hidden md:block absolute -bottom-44 -right-20 opacity-10 " />
    </div>
  )
}

export default page
