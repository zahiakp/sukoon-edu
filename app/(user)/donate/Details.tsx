import Link from 'next/link'
import React from 'react'

function Details() {
  return (
   <main className='w-full'>
     <section className="w-[80%] max-w-[1000px] mx-auto py-20 bg-white relative overflow-hidden">
        <div className="commonWidth flex flex-col md:flex-row items-center justify-between">
          <section data-aos="fade-up" data-aos-delay="100" className="flex flex-col justify-center items-center ">
            <img src="/image/Google-Pay-logo.png" className="h-14" alt="" />
            <p className='text-4xl my-4 font-bold py-4 flex flex-col items-center text-gray-700 rounded-2xl px-7 bg-gray-100'>9645900096 <br />
            9645900097</p>
            <Link href="upi://pay?pa=ukoonedu55575@fbl&cu=INR" className="text-lg gap-2 flex items-center justify-center">
           <img src="/image/upi.png" className=" h-auto w-14" alt="" />sukoonedu55575@fbl
            </Link>
          </section>
          {/* ACCOUNTS SECTION */}
          <section data-aos="fade-up" data-aos-delay="300" className="p-10  text-center lg:text-left ">
            <h5 className="text-2xl  text-gray-400 border-b py-1 mb-2">
              Account Details
            </h5>
            <div className="text-lg">Name: Sukoon Edu Foundation</div>
            <div className="text-lg font-bold">A/C No: 13020200055575</div>
            <div className="text-lg font-bold">IFSC: FDRL0001302</div>
            <div className="text-lg">Bank: FEDERAL BANK</div>
            <div className="text-lg">Branch: Nehru Place - New Delhi
            </div>
          </section>
          <section data-aos="fade-up" data-aos-delay="500" className="p-4 border border-gray-300 rounded-2xl overflow-hidden w-fit"><img src="/image/qrcode.png" className="h-60" /></section>
        </div>
        {/* <img
          src="/image/qrcode.png"
          className="absolute h-[500px] right-40 -bottom-40 hidden md:block"
        /> */}
      </section>
   </main>
  )
}

export default Details
