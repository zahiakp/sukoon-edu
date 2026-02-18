"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaMosque } from "react-icons/fa";
import Link from "next/link";

const RamadanBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem("ramadan_popup_shown");

    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("ramadan_popup_shown", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Symmetrical snappy transition for opening and closing
  const springTransition = {
    type: "spring",
    damping: 26,
    stiffness: 320,
    mass: 1,
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
        )}
      </AnimatePresence>

      {/* Dynamic Island Container */}
      <div className="fixed bottom-6 left-0 right-0 md:left-auto md:right-[90px] z-[101] flex justify-center md:block pointer-events-none">
        <motion.div
          layout
          initial={false}
          animate={{
            width: isOpen
              ? typeof window !== "undefined" && window.innerWidth < 640
                ? "min(92vw, 800px)"
                : "900px"
              : "180px",
            height: isOpen ? "500px" : "48px",
            borderRadius: isOpen ? "40px" : "24px",
            // Center horizontally on desktop when open; mobile is already centered by container
            x:
              isOpen &&
              typeof window !== "undefined" &&
              window.innerWidth >= 768
                ? "calc(-50vw + 450px + 90px)"
                : 0,
            y: isOpen
              ? typeof window !== "undefined" && window.innerWidth < 640
                ? "calc(-50vh + 250px + 1.5rem)"
                : "calc(-50vh + 250px + 1.5rem)"
              : 0,
          }}
          transition={springTransition}
          className={`pointer-events-auto relative overflow-hidden bg-[#0d1a04] border border-white/10 flex flex-col items-center justify-center`}
          onClick={() => !isOpen && setIsOpen(true)}
        >
          {/* Background Image Layer */}
          <motion.div
            layout
            className="absolute inset-0 z-0 overflow-hidden"
            style={{
              background:
                "url('/image/ramadan_banner.jpg') no-repeat center center/cover",
            }}
            animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 1.1 }}
            transition={springTransition}
          >
            {/* <img
              src="/image/ramadan_banner.jpg"
              className="w-full h-full object-cover"
              alt="Ramadan"
            /> */}
            {/* Dark Overlay for Text Legibility */}
            {/* <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-[#0d1a04] via-black/20 to-black/40" /> */}
          </motion.div>

          {/* Close Button - Absolute Positioned over everything */}
          <AnimatePresence>
            {isOpen && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={springTransition}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="absolute top-6 right-6 rounded-full p-2 text-neutral-500 hover:text-neutral-600 transition-all z-30"
              >
                <IoCloseCircleOutline size={28} />
              </motion.button>
            )}
          </AnimatePresence>

          <motion.div
            layout
            className={`relative z-10 w-full h-full flex flex-col transition-all duration-300
              ${
                isOpen
                  ? "justify-center items-center md:flex-row md:justify-end px-8 md:px-20"
                  : "items-center justify-center px-0"
              }`}
          >
            <motion.div
              layout
              className={`flex flex-col justify-center ${
                isOpen
                  ? "items-center text-center md:items-start md:text-left md:w-[45%]"
                  : "items-center text-center w-full h-full"
              }`}
            >
              {/* Morphing Header Section */}
              <motion.div
                layout
                className={`flex gap-3 ${
                  isOpen
                    ? "mb-8 flex-col items-center md:items-start"
                    : "flex-row items-center"
                }`}
              >
                {/* <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0, y: 10 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0, opacity: 0, y: 10 }}
                      transition={{ ...springTransition, damping: 30 }}
                      className="text-amber-400 text-6xl mb-2"
                    >
                      <FaMosque />
                    </motion.div>
                  )}
                </AnimatePresence> */}

                <motion.h2
                  layout
                  className={`font-black whitespace-nowrap tracking-tight transition-all
                  ${isOpen ? "text-4xl md:text-5xl text-lime-700" : "text-white cursor-pointer text-[15px] opacity-95"}`}
                >
                  Ramadan {isOpen ? <br /> : " "} Mubarak
                </motion.h2>
              </motion.div>

              {/* Content Body */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ ...springTransition, duration: 0.2 }}
                    className="flex flex-col items-center md:items-start space-y-10"
                  >
                    <p className="text-neutral-600 text-lg font-medium leading-relaxed max-w-[350px]">
                      Wishing you a month of peace and spiritual growth. Support
                      our noble mission this season.
                    </p>

                    <Link
                      href="/donate"
                      className="group relative px-6 py-3 bg-lime-600 rounded-[1rem]"
                    >
                      <span className="relative z-10 text-white font-black text-lg">
                        Donate Now
                      </span>
                      {/* <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" /> */}
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Pulse Effect for closed state */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-lime-500/50 animate-pulse pointer-events-none"
            />
          )}
        </motion.div>
      </div>
    </>
  );
};

export default RamadanBanner;
