"use client";
import React from "react";

import { motion } from "framer-motion";

interface Props {
  name: string;
  x: string;
  y: string;
}

const Skill = ({ name, x, y }: Props) => {
  return (
    <motion.div
      className="lg:py-2 lg:px-4 md:py-1.5 md:px-3 flex items-center justify-center rounded-full font-semibold bg-white py-3 px-6 shadow-white text-black cursor-pointer border-[1px] border-black absolute md:text-sm xs:bg-transparent xs:dark:bg-transparent xs:text-black xs:dark:text-white xs:font-bold xs:border-none xs:text-xs"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-40 md:mt-20 md:text-5xl sm:text-4xl w-full text-center  ">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full
       bg-lightc dark:bg-darkc lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-lightclg lg:dark:bg-darkclg md:bg-lightcmd md:dark:bg-darkcmd sm:bg-lightcsm sm:dark:bg-darkcsm
      "
      >
        <motion.div
          className="xs:text-xs xs:p-2 lg:p-6 md:p-4 flex items-center md:text-[8px] justify-center rounded-full font-semibold bg-white p-8 relative   shadow-white text-black cursor-pointer border-[1px] border-black"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="10vw" y="-6vw" />
        <Skill name="C++" x="-5vw" y="17vw" />
        <Skill name="HTML" x="20vw" y="6vw" />
        <Skill name="JAVASCRIPT" x="-5vw" y="12vw" />
        <Skill name="NEXTJS" x="-20vw" y="-12vw" />
        <Skill name="REACTJS" x="15vw" y="-19vw" />
        <Skill name="FIGMA" x="32vw" y="9vw" />
        <Skill name="TAILWINDCSS" x="-21vw" y="1vw" />
        <Skill name="PHP" x="10vw" y="21vw" />
        <Skill name="FIREBASE" x="-21vw" y="18vw" />
        <Skill name="SANITY" x="-8vw" y="7vw" />
        <Skill name="GITHUB" x="-2vw" y="-13vw" />
      </div>
    </>
  );
}

export default Skills;
