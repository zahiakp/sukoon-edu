import React from 'react'

function Hero() {
  return (
    <div className='w-full h-[400px] md:h-[500px]'
    style={{backgroundImage:'linear-gradient(to top, rgba(0, 0, 0,0.9), rgba(0,0,0,0)),url(https://www.lawputra.com/wp-content/uploads/2020/06/TC-min-1536x711.png)',
        backgroundPosition:"center",
        backgroundSize:"cover",
    }}>
      <div className='p-20 px-[15%] flex flex-col h-full items-start justify-end text-white'>
        <h1 className='text-5xl md:text-7xl font-bold font Grotesque-font text-sky-200'>Terms & Conditions</h1>
        {/* <p className='text-zinc-300 text-left hidden md:flex gap-2 text-[12px] md:text-[15px] mt-4 w-[80%]'>Sukoon Residential School provides a high-quality education for
          students in Grades from Nursery to 12 in a structured residential
          setting. Focused on academic excellence, character development, and
          moral studies, the campus equips students with the skills to tackle
          global challenges</p> */}
      </div>
    </div>
  )
}

export default Hero
