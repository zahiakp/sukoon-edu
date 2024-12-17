import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

function Footer() {
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <div className="flex items-center gap-2">
              <img src="/svg/sukoon-logo.svg" alt="" className="h-[55px]" />
            </div>

            <p className="text-sm leading-relaxed text-zinc-500 mt-4">
              Welcome to the official portal of Skoon edu. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Blanditiis, sed. Harum rerum
              vitae quo possimus corrupti eos enim assumenda ad veritatis ea
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              pages
            </p>

            <ul className="mt-6 space-y-4">
              {["Events", "News", "testimonials", "About Us", "Support us"].map(
                (item: string, index: number) => (
                  <li key={index}>
                    <a
                      href="#"
                      title=""
                      className="flex text-base text-black transition-all duration-200 hover:text-primary hover:font-semibold focus:text-primary"
                    >
                      {" "}
                      {item}{" "}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Help
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-primary hover:font-semibold focus:text-primary"
                >
                  {" "}
                  Customer Support{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-primary hover:font-semibold focus:text-primary"
                >
                  {" "}
                  Delivery Details{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-primary hover:font-semibold focus:text-primary"
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-primary hover:font-semibold focus:text-primary"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
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

        <div className="flex items-center justify-between">
          <p className="text-sm text-center text-gray-600">
            Sukoon edu villa © Copyright 2024.
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
