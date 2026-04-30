"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { BiSolidDonateHeart } from "react-icons/bi";

const bgImages = [
  "/image/sukoon-bnr-01.webp",
  "/image/sukoon-bnr-02.webp",
  "/image/sukoon-bnr-03.webp",
  "/image/sukoon-bnr-04.webp",
];

const RamadanBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentBg, setCurrentBg] = useState(bgImages[0]);

  const shuffleBg = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * bgImages.length);
    setCurrentBg(bgImages[randomIndex]);
  }, []);

  useEffect(() => {
    shuffleBg();
    const hasShownPopup = sessionStorage.getItem("ramadan_popup_shown");

    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        shuffleBg();
        setIsOpen(true);
        sessionStorage.setItem("ramadan_popup_shown", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [shuffleBg]);

  const handleOpen = () => {
    if (!isOpen) {
      shuffleBg();
      setIsOpen(true);
    }
  };

  const handleClose = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    setIsOpen(false);
  };

  // Smoother, more natural transition
  const springTransition = {
    type: "spring",
    damping: 28,
    stiffness: 220,
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

      <div 
        className={`fixed z-[101] flex transition-all duration-700 ease-in-out pointer-events-none
          ${isOpen 
            ? "inset-0 items-center justify-center p-4 md:p-8" 
            : "bottom-6 left-0 right-0 md:left-auto md:right-[90px] justify-center md:block"
          }`}
      >
        <motion.div
          layout
          initial={false}
          className="pointer-events-auto relative overflow-hidden bg-[#0d1a04] flex flex-col items-center justify-center shadow-2xl"
          style={{
            width: isOpen ? "min(92vw, 900px)" : "180px",
            height: isOpen ? "500px" : "48px",
            borderRadius: isOpen ? "20px" : "24px",
            cursor: isOpen ? "default" : "pointer",
          }}
          onClick={handleOpen}
          transition={springTransition}
        >
          {/* Background Image Layer */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('${currentBg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{ 
              opacity: isOpen ? 1 : 0,
              scale: isOpen ? 1 : 1.1
            }}
            transition={springTransition}
          />

          {/* Close Button */}
          <AnimatePresence>
            {isOpen && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={springTransition}
                onClick={handleClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 rounded-full p-2 text-neutral-500 hover:text-neutral-800 transition-colors z-30"
              >
                <IoCloseCircleOutline size={30} />
              </motion.button>
            )}
          </AnimatePresence>

          <div
            className={`relative z-10 w-full h-full flex flex-col 
              ${isOpen
                ? "justify-center items-center md:flex-row md:justify-end px-6 md:px-16"
                : "items-center justify-center"
              }`}
          >
            <div
              className={`flex flex-col justify-center transition-all duration-300
                ${isOpen
                  ? "items-center text-center md:items-start md:text-left md:w-[48%]"
                  : "items-center w-full h-full"
                }`}
            >
              <div
                className={`flex gap-3 transition-all duration-300 ${
                  isOpen ? "mb-6 flex-col items-center md:items-start" : "flex-row items-center"
                }`}
              >
                <h2
                  className={`font-black whitespace-nowrap tracking-tight transition-all duration-300
                  ${isOpen ? "text-4xl md:text-5xl text-lime-700 leading-tight" : "text-white text-[15px] opacity-95 flex items-center gap-2"}`}
                >
                  {!isOpen && <BiSolidDonateHeart />}
                  <span className={isOpen ? "text-lime-800" : ""}>Gift</span>
                  {isOpen ? <br /> : " "}
                  Education
                </h2>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ ...springTransition, damping: 30 }}
                    className="flex flex-col items-center md:items-start space-y-8"
                  >
                    <p className="text-neutral-800 text-lg font-medium leading-relaxed max-w-[380px]">
                      Help a child learn, grow, and dream beyond limits. Join our journey to bring education, care, and dignity to every child.
                    </p>

                    <Link
                      href="/donate"
                      className="group relative px-8 py-4 bg-lime-700 hover:bg-lime-800 text-white font-black text-lg rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95"
                    >
                      Donate Now
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Pulse Effect for closed state */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 bg-lime-500 pointer-events-none"
            />
          )}
        </motion.div>
      </div>
    </>
  );
};

export default RamadanBanner;
