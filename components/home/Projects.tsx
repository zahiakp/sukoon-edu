import React from 'react'
import StyledButton from '../StyledButton'
import { GoArrowRight } from 'react-icons/go'
import { IoMdArrowRoundForward } from 'react-icons/io'

function Projects() {
    const PROJECTS = [
        {img:"banner.jpg",label:"Residential Campus"},
        {img:"banner.jpg",label:"Village School"},
        {img:"banner.jpg",label:"Learning Centers"},
        {img:"banner.jpg",label:"Milan"},
    ]
  return (
    <div className="bg-lime-100 py-8 pb-14 relative group">
    <div className="w-full max-w-[1200px] mx-auto p-10 flex flex-col items-center">
      <h6 className="Grotesque-font text-5xl md:text-6xl text-lime-800 font-semibold">
      <StyledButton text="Our Projects"/>
      </h6>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 z-[2]">
        {PROJECTS.map((project:any,i:number)=>(
            <div className='flex cursor-pointer group/box flex-col border hover:-translate-y-1 duration-300 hover:shadow-lg bg-lime-50 border-lime-500 overflow-hidden rounded-2xl'>
                <div className='h-40'>
                    <img src={`/image/${project.img}`} className='w-full h-full object-cover'/>
                    </div>
                    <p className='w-full justify-center duration-300 translate-x-2 group-hover/box:translate-x-0 py-5 flex items-center gap-2'>{project.label} <IoMdArrowRoundForward className='text-lime-600 opacity-0 duration-300 -translate-x-4 group-hover/box:opacity-100  group-hover/box:translate-x-0'/>
                    </p>
                    </div>
        ))}
      </div>
    </div>
    <img src="/image/Logo strock.png" alt="" className="absolute rotate-12 hidden md:block -top-64 right-[10%] h-[400px] opacity-20"/>
  </div>
  )
}

export default Projects
