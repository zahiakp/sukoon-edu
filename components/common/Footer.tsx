import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdArrowForward, IoMdCall } from "react-icons/io";
import { LuYoutube } from "react-icons/lu";
import { RiWhatsappFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";

function Footer() {
  const SOCIAL_LINKS: any[] = [
                {
                  icon: <AiFillInstagram />,
                  link: "https://www.instagram.com/mysukoon.in?igsh=ejhubHRlMGJ6dmZo",
                },
                { icon: <RiWhatsappFill />, link: "" },
                { icon: <TiSocialFacebook />, link: "" },
                // { icon: <FaXTwitter />, link: "" },
                { icon: <FaYoutube />, link: "" },
              ]
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="mx-auto sm:px-6 px-7 lg:px-10 max-w-7xl">
        <div className="grid grid-cols-1 md:col-span-3 lg:grid-cols-5 gap-y-7 md:gap-x-7">
          <div data-aos="fade-up" data-aos-delay='100' className="col-span-2 md:col-span-2 lg:col-span-2 lg:pr-8">
            <div className="flex items-center gap-2">
              <img src="/svg/sukoon-logo.svg" alt="" className="h-[55px]" />
            </div>

            <p className="text-sm leading-relaxed text-zinc-500 mt-4">
              Sukoon Edu Foundation is a non-profit dedicated to providing
              quality education to underprivileged children. We empower
              communities through innovative learning initiatives, believing
              education is key to sustainable development. Our mission centers
              on the Sukoon Edu Village in Andhaka, Haryana.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay='200' className="col-span-2 md:col-span-1">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              pages
            </p>

            <ul className="mt-6  space-y-4">
              {[{label:"Feel Sukoon",path:""},{label:"Our Projects",path:""},{label:"Life at Sukoon",path:""},{label:"Join us",path:""},{label:"Connect us",path:""},{label:"Donate",path:"/donate"}
              ].map(
                (item: any, index: number) => (
                  <li key={index}>
                    <a
                      href={item.path}
                      title=""
                      className="flex text-base group items-center hover:translate-x-0 -translate-x-2 gap-2 text-black transition-all duration-200  hover:font-semibold focus:text-primary"
                    >
                      {" "}
                      <span className="group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 duration-300 text-lime-600 opacity-0"><IoMdArrowForward />
                      </span>{item.label}{" "}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay='200' className="col-span-2 md:col-span-1">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Useful Links
            </p>

            <ul className="mt-6  space-y-4">
              {[
               {label:"Privacy & Policy",path:'/privacypolicy'},{label:"Refund Policy",path:'/refundpolicy'},{label:"Terms & Conditions",path:'/terms'},
               {label:"Admin Panel",path:"/admin"}
              ].map(
                (item: any, index: number) => (
                  <li key={index}>
                    <a
                      href={item.path}
                      title=""
                      className="flex text-base group items-center hover:translate-x-0 -translate-x-2 gap-2 text-black transition-all duration-200  hover:font-semibold focus:text-primary"
                    >
                      {" "}
                      <span className="group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 duration-300 text-lime-600 opacity-0"><IoMdArrowForward />
                      </span>{item.label}{" "}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay='300' className=" col-span-1">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
            CONTACT
            </p>
            <p className="mt-5 font-semibold">Sukoon Edu Foundation
              {/* , New Delhi, India */}

            </p>
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
          </div>

          {/* <div data-aos="fade-up" data-aos-delay='400' className="col-span-2 md:col-span-1 lg:col-span-1 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Subscribe to newsletter
            </p>

            <form action="#" method="POST" className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-cyan-500
                         caret-primary"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 mt-3 font-semibold text-white bg-gradient-to-l from-lime-600 to-lime-500 rounded-xl bg-animation"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        <hr className="mt-16 mb-8 border-zinc-300/60" />

        <div className="flex items-center justify-center md:justify-between">
          <p className="text-sm text-center text-gray-600">
          © 2025 Sukoon Edu Foundation
            
          </p>
          {/* <div className="md:flex gap-3 hidden">
            <a
              href=""
              className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center duration-300"
            >
              <RiWhatsappFill className="text-zinc-800" />
            </a>
            <a
              href=""
              className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center duration-300"
            >
              <FaFacebookF className="text-zinc-800" />
            </a>
            <a
              href=""
              className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center duration-300"
            >
              <AiFillInstagram className="text-zinc-800" />
            </a>
            <a
              href=""
              className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center duration-300"
            >
              <FaXTwitter className="text-zinc-800" />
            </a>
            <a
              href=""
              className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center duration-300"
            >
              <FaYoutube
              className="text-zinc-800" />
            </a>
          </div> */}
          <a href="https://ziqx.cc" className="text-sm my-2">
          ⚡ ziqx.cc
        </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
