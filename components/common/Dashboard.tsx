"use client";
import React, { ReactNode } from "react";
import Logout from "@/app/(admin)/admin/Logout";
import { usePathname } from "next/navigation";
import { TbLayoutDashboard, TbListDetails, TbUserSquareRounded } from "react-icons/tb";
import {PiNewspaperClippingBold, PiUsersThreeBold } from "react-icons/pi";
import { HiOutlineBookmarkAlt, HiOutlineCog } from "react-icons/hi";
import StyledButton from "./StyledButton";
import { MdOutlineAutoStories } from "react-icons/md";

function Dashboard() {
  const pathname = usePathname();

  interface Items {
    title:string;
    url:string;
    icon:ReactNode;
  }
  const NAV_ITEMS = [
    {
      title: "Dashboard",
      url: "/admin",
      icon: (
        <TbLayoutDashboard className="text-xl flex-shrink-0 w-5 h-5 mr-4"/>
      ),
    },
    {
      title: "Diaries",
      url: "/admin/articles",
      icon: <PiNewspaperClippingBold className="text-xl flex-shrink-0 w-5 h-5 mr-4"/>
    },
    {
      title: "Stories",
      url: "/admin/stories",
      icon: <MdOutlineAutoStories className="text-xl flex-shrink-0 w-5 h-5 mr-4"/>
    },
    // {
    //   title: "Publications",
    //   url: "/admin/publications",
    //   icon: (
    //     <TbListDetails className="text-xl flex-shrink-0 w-5 h-5 mr-4"/>
    //   ),
    // },
    // {
    //   title: "Guideline",
    //   url: "/admin/guideline",
    //   icon: (
    //     <PiNewspaperClippingBold className="text-xl flex-shrink-0 w-5 h-5 mr-4"/>

    //   ),
    // },
    // {
    //   title: "Rendezvous",
    //   url: "/admin/rendezvous",
    //   icon: (
    //     <HiOutlineBookmarkAlt  className="text-xl flex-shrink-0 w-5 h-5 mr-4"/>
    //   ),
    // },
    // {
    //   title: "Programs",
    //   url: "/admin/programs",
    //   icon: (
    //     <PiUsersThreeBold className="text-xl flex-shrink-0 w-5 h-5 mr-4"/>
    //   ),
    // },
    {
      title: "Settings",
      url: "/admin/settings",
      icon: (
        <HiOutlineCog className="text-xl flex-shrink-0 w-5 h-5 mr-4"/>
      ),
    },
  ];

  return (
    <div className="flex flex-1 bg-gray-50">
      <div className="hidden md:flex md:w-72 md:flex-col">
        <div className="flex flex-col flex-grow overflow-y-auto bg-white md:w-72 fixed h-screen">
          <div className="flex items-center justify-center flex-shrink-0 py-20 pb-16 bg-lime-50">
           <img src="/svg/Logo.svg" alt="Logo" className="h-36" />
          </div>

          {/* <div className="px-10 mt-6">
            <hr className="border-violet-600/90" />
          </div> */}

          <div className="flex flex-col flex-1 px-7 mt-20">
            <div className="space-y-1">
              {NAV_ITEMS.map((item: Items, index: number) => (
                <a
                  key={index}
                  href={item.url}
                  title=""
                  className={`${
                    item.url==pathname
                      ? "text-white  bg-lime-600 "
                      : "bg-white text-zinc-800 hover:bg-lime-500/20"
                  } flex items-center px-4 py-3 text-sm font-medium  transition-all duration-300   rounded-xl group`}
                >
                  {item.icon}
                  <StyledButton text={item.title} type="bold"/>
                </a>
              ))}
            </div>
          </div>
          <Logout />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
