"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { HtmlProps } from "next/dist/shared/lib/html-context";

interface Props {
  rafrence: any;
}

function LiIcons({ rafrence }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: rafrence,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-white/70">
      <svg className="-rotate-90" height="75" width="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-pink-600 stroke-1 fill-none"
        />
        <motion.circle
          ref={ref}
          style={{ pathLength: scrollYProgress }}
          cx="75"
          cy="50"
          r="20"
          className=" stroke-[7px] fill-black dark:fill-slate-50 "
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className= "animate-pulse stroke-pink-400 stroke-1 fill-pink-800"
        />
      </svg>
    </figure>
  );
}

export default LiIcons;
