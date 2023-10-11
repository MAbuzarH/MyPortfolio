"use client";
import { useScroll } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { LiIcons } from ".";

interface Props {
  schoolName: string;
  className: string;
  moreinfo: string;
  time: string;
}

const Detailes = ({ schoolName, className, moreinfo, time }: Props) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 mx-auto justify-between items-start flex flex-col w-[60%]"
    >
      <LiIcons rafrence={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize text-2xl font-bold sm:text-xl ">
          {className}&nbsp;{" "}
        </h3>
        <span className="capitalize font-medium sm:text-[10px]">
          {time} | {schoolName}
        </span>
        <p className="font-medium w-full sm:text-[12px]">{moreinfo}</p>
      </motion.div>
    </li>
  );
};
function Education() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 md:my-20">
      <h2 className="font-bold text-8xl mb-32 w-full md:mb-20  text-center sm:text-4xl md:text-6xl">
        Education
      </h2>
      <div ref={ref} className="w-[75%] m-auto relative md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 h-full w-[4px] md:w-[2px] bg-black dark:bg-slate-100 origin-top"
        />
        <ul className="w-full flex ml-4 flex-col items-start justify-between">
          <Detailes
            className="Bachelor Of Science In Computer Science"
            schoolName="VirtualUniversity"
            time="2021-2025"
            moreinfo="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />
          <Detailes
            className="Online Coursework"
            schoolName="PIAIC"
            time="2022-2023"
            moreinfo="web development using Next js and React js,Web 3, and Artificial Intelligence."
          />
          <Detailes
            className="Online Coursework"
            schoolName="Samart Learning"
            time="2021-2022"
            moreinfo="Basic And Advance C++"
          />
        </ul>
      </div>
    </div>
  );
}

export default Education;
