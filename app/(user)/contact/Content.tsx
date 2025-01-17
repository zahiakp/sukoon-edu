import Link from "next/link";
import React from "react";
import { LuYoutube } from "react-icons/lu";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import { FiGlobe } from "react-icons/fi";

function Content() {
  const SOCIAL_LINKS: any[] = [
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/delhithaibaheritage",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/delhithaibaheritage/",
    },
    {
      icon: <LuYoutube />,
      link: "https://www.youtube.com/delhithaibaheritage",
    },
    // {
    //     icon: <RiTwitterXLine  />,
    // link:"",
    // },
  ];
  return (
    <div className="w-full bg-lime-50">
      <div className="w-[80%] max-w-[1000px] mx-auto flex flex-col md:flex-row justify-center gap-14 py-20">
    <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-lime-600">Contact <span className="font-[300]"> Us</span></h1>

          <section>
            <div className="text-gray-600 text-lg  mt-5">
              <b>Sukoon Edu Foundation</b> <br />
              New Delhi, India
              <section className="py-3">
                <a href="" className="flex items-center gap-2 mt-2"><HiOutlineMail className="text-lime-600"/>
                            <p>connect@mysukoon.in</p></a>
                            <a href="" className="flex items-center gap-2 mt-2"><IoMdCall className="text-lime-600"/>
                            <p>+91- 9645900096</p></a>
                            <a href="" className="flex items-center gap-2 mt-2"><FiGlobe className="text-lime-600"/>
                            <p>www.mysukoon.in</p></a>

                <div className="flex mt-5">
                  {SOCIAL_LINKS.map((link: any, index: number) => (
                    <a
                      key={index}
                      href={link.link}
                      className="bg-gradient-to-tr from-lime-600 to-lime-500 text-white duration-300 p-2 rounded-[10px] mr-2 hover:scale-[1.1]"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </section>
            </div>
           
          </section>
        </div>
        <div className="relative overflow-hidden rounded-2xl w-full max-w-[600px] shadow-xl  group"><iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.561111123978!2d77.5995165!3d12.999899399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17073e951009%3A0xf7162f643b3c6608!2sQUEST%20Foundation!5e0!3m2!1sen!2sin!4v1711389898892!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className=" h-[40vh] hover:shadow-xl"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe><Link href={'https://maps.app.goo.gl/Fsbj6aGZdHfsQZvX8?g_st=iw'} className="pointer absolute bottom-5 left-[50%] translate-x-[-50%] translate-y-20 group-hover:translate-y-0 duration-300 py-2 px-5 bg-lime-600 text-white rounded-[50px]">View In Google Map</Link></div>
        </div>
    </div>

  );
}

export default Content;
