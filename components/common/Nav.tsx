"use client";
import React, { useState, useCallback } from "react";
import { FaArrowRight, FaHeart, FaYoutube } from "react-icons/fa";
import { IoArrowDownCircle, IoMenu, IoMenuOutline } from "react-icons/io5";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import classNames from "classnames";
import {
  IoIosArrowDown,
  IoIosArrowDropdownCircle,
  IoMdArrowForward,
} from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";

const NAV_ITEMS = [
  {
    label: "Feel Sukoon",
    items: [
      { label: "About us", path: "/about" },
      { label: "Stories", path: "" },
      { label: "Diaries", path: "/diary" },
    ],
  },
  {
    label: "Our Projects",
    path: "/projects",
    items: [
      { label: "Residential Campus", path: "/projects#Residential-Campus" },
      { label: "Village School", path: "/projects#Village-School" },
      { label: "Learning Centers", path: "/projects#Learning-Centres" },
      { label: "Sukoon Milan", path: "/projects#Sukoon-Milan" },
    ],
  },
  { label: "Life at Sukoon" ,path:"/life-sukoon"},
  { label: "Get Admission", path: "/admissions" },
  { label: "Join us",items: [
    { label: "Career", path: "/join" },
    { label: "Contact", path: "/contact" },
  ],},
];

interface NavProps {
  active?: string;
}

const Nav = React.memo(({ active }: NavProps) => {
  const [isOpen, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<number | null>(null);

  const handleDropdown = useCallback((index: number) => {
    setDropdown((prev) => (prev === index ? null : index));
  }, []);

  const handleMobileDropdown = useCallback((index: number) => {
    setDropdown((prev) => (prev === index ? null : index));
  }, []);

  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <nav className="w-full px-10 bg-white sticky top-0 z-10">
      <div className="w-full max-w-[1200px] h-[90px] md:h-[100px] flex items-center justify-between mx-auto">
        <Link href="/">
          <img
            src="/svg/sukoon-logo.svg"
            alt="Sukoon Logo"
            className="h-[40px] md:h-[50px]"
          />
        </Link>
        <div className="items-center gap-10 hidden md:flex">
          <ul className="flex items-center justify-center gap-10 text-[16px]">
            {NAV_ITEMS.map((item, i) => (
              <li
                key={i}
                onMouseEnter={() => handleDropdown(i + 1)}
                onMouseLeave={() => handleDropdown(i + 1)}
                className="group/link relative cursor-pointer hover:scale-[1.02] flex gap-2 items-end hover:text-lime-800 duration-200"
              >
                <Link href={item.path || "#"} className="flex items-center gap-2">
                  {item.label}
                  {item.items && (
                    <IoIosArrowDown
                      className={`group-hover/link:rotate-180 group-hover/link:text-red-500 ${
                        dropdown === i + 1 && "rotate-180 text-red-500"
                      } duration-300`}
                    />
                  )}
                </Link>
                {item.items && (
                  <ul
                  className={`${
                    dropdown === i + 1 ? "max-h-96" : "max-h-0 opacity-0"
                  } overflow-hidden cursor-pointer transition-[max-height] min-w-40 pt-7 border-t-0 mx-auto absolute top-full left-[50%] -translate-x-[50%] rounded-xl duration-300 flex flex-col items-center bg-white border border-zinc-200`}
                >
                  {item?.items?.map((it: any, ii: number) => (
                    <Link
                      href={it.path || "#"}
                      key={ii}
                      className="p-3 px-5 w-full text-center border-b border-zinc-200 hover:bg-zinc-100 duration-300 whitespace-nowrap"
                    >
                      {it.label}
                    </Link>
                  ))}
                </ul>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/donate"
            className="p-2 px-5 rounded-xl text-white font-semibold bg-lime-500 flex items-center gap-2 text-base"
          >
            <FaHeart className="text-yellow-300" />
            Donate
          </Link>
        </div>
        <div className="md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={toggleMenu}
            color="#179900"
            size={27}
            rounded
          />
        </div>
      </div>
      {isOpen && (
        <section className="z-[5] md:hidden bg-lime-100 fixed top-[90px] right-0 w-full py-5 h-[100vh] flex flex-col justify-start overflow-y-scroll">
          <div>
            {NAV_ITEMS.map((item, index) => (
              <div key={index} className="w-full">
                <div
                  onClick={() => handleMobileDropdown(index + 1)}
                  className="hover:font-bold hover:translate-x-1 w-full justify-between box-border p-3 px-10 pr-20 hover:bg-lime-200/70 duration-300 font-bold text-lime-600 flex items-center border-b border-lime-100"
                >
                  <Link
                    href={item.path || "#"}
                    className="text-xl text-lime-700  flex items-center gap-4"
                  >
                    <span className="text-lg text-zinc-600">
                      <IoMdArrowForward />
                    </span>
                    {item.label}
                  </Link>
                  {item.items && (
                    <IoIosArrowDropdownCircle
                      className={`text-2xl text-lime-700 ${
                        dropdown === index + 1 ? "rotate-180" : ""
                      } duration-300`}
                    />
                  )}
                </div>
                {item.items && (
                  <ul
                    className={`bg-lime-200 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                      dropdown === index + 1 ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.path || "#"}
                          className="p-3 px-14 text-lime-700 gap-3 flex items-center border-b hover:bg-lime-300/60 border-lime-100"
                        >
                          <span>-</span>
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <Link
              href="/donate"
              className="p-3 px-6 my-5 w-fit ml-10 rounded-xl text-white font-semibold bg-lime-500 flex items-center gap-2 text-base"
            >
              <FaHeart />
              Donate
            </Link>
          </div>
          <div className="py-3 mt-3 border-t flex gap-2 border-lime-500 mx-10">
            {[
              {
                                icon: <AiFillInstagram />,
                                link: "https://www.instagram.com/mysukoon.in?igsh=ejhubHRlMGJ6dmZo",
                              },
                              { icon: <RiWhatsappFill />, link: "https://wa.me/+919645900096?text=Hello%20Sukoon%20Edu%20Village" },
                              { icon: <TiSocialFacebook />, link: "https://www.facebook.com/share/12LAMTKXN79/?mibextid=wwXIfr" },
                              // { icon: <FaXTwitter />, link: "" },
                              { icon: <FaYoutube />, link: "https://youtu.be/qvimT91m6V0" },
            ].map((icon, i) => (
              <Link
                target="_blank"
                key={i}
                href={icon.link || "#"}
                className="p-2 bg-lime-200 text-lime-700 rounded-lg text-xl"
              >
                {icon.icon}
              </Link>
            ))}
          </div>
        </section>
      )}
    </nav>
  );
});

Nav.displayName = "Nav";

export default Nav;