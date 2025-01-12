import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdArrowForward, IoMdCall } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";

function Footer() {
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="mx-auto sm:px-6 px-7 lg:px-10 max-w-7xl">
        <div className="grid grid-cols-1 md:col-span-3 lg:grid-cols-5 gap-y-7 md:gap-x-7">
          <div className="col-span-2 md:col-span-2 lg:col-span-2 lg:pr-8">
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

          <div className="hidden md:block">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              pages
            </p>

            <ul className="mt-6  space-y-4">
              {["Feel Sukoon","Our Projects","Life atSukoon", "Stories","Join us","Connect us",].map(
                (item: string, index: number) => (
                  <li key={index}>
                    <a
                      href="#"
                      title=""
                      className="flex text-base group items-center hover:translate-x-0 -translate-x-2 gap-2 text-black transition-all duration-200 hover:text-primary hover:font-semibold focus:text-primary"
                    >
                      {" "}
                      <span className="group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 duration-300 text-lime-600 opacity-0"><IoMdArrowForward />
                      </span>{item}{" "}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className=" col-span-1">
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
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-1 lg:pl-8">
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
          </div>
        </div>

        <hr className="mt-16 mb-10 border-cyan-400/60" />

        <div className="flex items-center justify-center md:justify-between">
          <p className="text-sm text-center text-gray-600">
          © 2025 Sukoon Edu Foundation
            <a
              href="https://ziqx.in"
              className="text-violet-600 cursor-pointer"
            ></a>
          </p>
          <div className="md:flex gap-3 hidden">
            <a
              href=""
              className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center hover:text-primary duration-300"
            >
              <RiWhatsappFill className="text-zinc-800" />
            </a>
            <a
              href=""
              className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center hover:text-primary duration-300"
            >
              <FaFacebookF className="text-zinc-800" />
            </a>
            <a
              href=""
              className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center hover:text-primary duration-300"
            >
              <AiFillInstagram className="text-zinc-800" />
            </a>
            <a
              href=""
              className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center hover:text-primary duration-300"
            >
              <FaXTwitter className="text-zinc-800" />
            </a>
            <a
              href=""
              className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center hover:text-primary duration-300"
            >
              <FaYoutube
              className="text-zinc-800" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
