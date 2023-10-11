"use client";
import React from "react";
import { GrShare } from "react-icons/gr";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const quote = {
  intial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      disply: 0.5,
    },
  },
};

function Hero() {
  return (
    <div className="px-6 py-12 text-center md:px-12 lg:text-left bg-white text-black dark:bg-black dark:text-white h-[100vh] ">
      <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className=" items-center gap-12  flex w-full  justify-around h-[100vh]">
          <div className="mt-12 lg:mt-0  sm:mt-25">
            <motion.h1
              variants={quote}
              initial="intial"
              animate="animate"
              className="mt-0 mb-16 text-5xl sm:text-4xl font-bold tracking-tight md:text-6xl md:text-center xl:text-8xl text-black/60 dark:text-white  "
            >
              I&#39;am <br />
              <motion.span className="text-[hsl(218,81%,55%)] ">
                Abuzar Haider
              </motion.span>
            </motion.h1>
            <div className="flex items-center justify-around">
              <Link
                href="/abuzarcv.pdf"
                className="sm:p-4 border-[1px] border-black sm:text-[12px]  rounded bg-neutral-50 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-gray-400 hover:shadow-black  hover:text-white dark:hover:shadow-white  dark:text-black md:mr-2 md:mb-0"
                data-te-ripple-init
                data-te-ripple-color="light"
                role="button"
                target="_blank"
              >
                <div className="flex justify-between items-center gap-2 font-bold ">
                  {" "}
                  Resume <GrShare />
                </div>{" "}
              </Link>
              <Link
                className="border-[2px] sm:pt-4 sm:px-4 sm:text-[12px]  inline-block rounded px-8 py-3.5 text-sm font-medium uppercase leading-normal dark:border-[2px]   transition duration-50 ease-in-out hover:bg-[#014121] hover:text-white 
               
                "
                data-te-ripple-init
                data-te-ripple-color="light"
                href="https://wa.me/03421210217"
                role="button"
                target="_blank"
              >
                Conact
              </Link>
            </div>
          </div>
          <div className="mb-12 lg:mb-0  sm:hidden flex">
            <Image
              src="/witout.png"
              className="w-full  rounded-lg bg-cover dark:shadow-white/20 h-[50%] shadow-black/50 shadow-2xl"
              alt=""
              width={2100}
              height={2000}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
