import React from 'react'
import StyledButton from '../common/StyledButton'
import { GoArrowRight } from 'react-icons/go'
import { IoMdArrowForward, IoMdArrowRoundForward } from 'react-icons/io'

function Projects() {
    const PROJECTS = [
        {img:"Residential Campus (2).jpg",label:"Residential Campus",dis:"Sukoon Residential School provides a high-quality education for students in Grades 7 to 12 in a structured residential setting. Focused on academic excellence, character development, and moral studies, the campus equips students with the skills to tackle global challenges. It fosters independence and responsibility, preparing students to become confident leaders in a rapidly changing world."},
        {img:"VILLAGE SCHOOL.webp",label:"Village School",dis:"Sukoon Village School, a CBSE-affiliated institution, it provides localized learning that integrates the village's cultural and environmental aspects, empowering children with education while preserving their traditional values."},
        {img:"Learning Centers Photo.webp",label:"Learning Centers",dis:"Sukoon Learning Centres offer foundational education to children in rural and underserved areas, focusing on literacy, numeracy, and social skills. Designed to support personal growth, these centres provide flexible and accessible learning opportunities for children who lack the time or resources for formal schooling. By offering supplementary education in key subjects, they help bridge gaps in the formal education system."},
        {img:"banner.jpg",label:"Milan",dis:"Sukoon Milan is our social empowerment initiative that blends skill development and community engagement to create meaningful opportunities for individuals and communities. It aims to equip youth and women with practical skills, foster economic self-reliance, and promote inclusivity. By strengthening community bonds and driving collective growth, Sukoon Milan embodies our mission of harmony and transformation."},
    ]
    // caters to students from Pre-KG to Grade 12. Designed for rural communities,
  return (
    <div className="bg-lime-100 py-8 pb-14 relative group">
    <div className="w-full max-w-[1200px] mx-auto p-7 md:p-10 flex flex-col items-center">
      <h6 className="Grotesque-font text-5xl md:text-6xl text-lime-600 font-semibold">
      <StyledButton text="Our Projects"/>
      </h6>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4 z-[2]">
        {PROJECTS.map((project:any,i:number)=>(
            <div key={i} className='flex cursor-pointer group/box flex-col border hover:-translate-y-1 duration-300 hover:shadow-lg bg-lime-50 border-lime-500 overflow-hidden rounded-2xl'>
                <div className='h-40'>
                    <img src={`/image/${project.img}`} className='w-full h-full object-cover'/>
                    </div>
                    <p className='w-full justify-center duration-300 translate-x-2 group-hover/box:translate-x-0 py-5 flex items-center gap-2'>{project.label} <IoMdArrowRoundForward className='text-lime-600 opacity-0 duration-300 -translate-x-4 group-hover/box:opacity-100  group-hover/box:translate-x-0'/>
                    </p>
                    <p className='text-[12px] px-7 pb-7'>{project.dis}</p>
                    </div>
        ))}
      </div>
       {/* <a href="/donate" className="flex items-center gap-2 hover:gap-3 duration-300 p-2 px-5 rounded-xl w-fit text-sm bg-lime-500 text-white mt-4">Yes! I want to help<IoMdArrowForward />
                </a> */}
    </div>
    <div className="absolute rotate-12 hidden md:block -top-64 right-[10%]  opacity-20">
    <img className='h-[400px]' data-aos="fade-left" src="/image/Logo strock.png" alt="" /></div>
  </div>
  )
}

export default Projects
