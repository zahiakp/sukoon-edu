"use client";

import { motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface WordPullUpProps {
  words: string;
  show?:string;
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
}

export default function LetterPullUp({
  words,show,
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  className,
}: WordPullUpProps) {
  return (
    <motion.h1
      variants={wrapperFramerProps}
      initial="hidden"
      animate={show !== undefined ? show : "show"}
      className={cn(
      "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
      className,
      )}
    >
      {[...words].map((word, i) => (
      <motion.span
      key={i}
      variants={framerProps}
      style={{ display: "inline-block", paddingRight: "19px" }}
      >
      {word === " " ? <span>&nbsp;</span> : word}
      </motion.span>
      ))}
    </motion.h1>
  );
}
