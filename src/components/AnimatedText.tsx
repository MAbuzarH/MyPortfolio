'use client';
import React from 'react';
import { motion } from 'framer-motion';

const quote = {
  intial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      disply: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const singleWord = {
  intial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
interface Props {
  text: string;
  style: string;
}

function AnimatedText({ text, style }: Props) {
  return (
    <div
      className=" m-auto  flex  items-center justify-center
  text-center overflow-hidden py-0 sm:py-0
  "
    >
      <motion.h1
        variants={quote}
        initial="intial"
        animate="animate"
        className={`inline-block w-full text-dark font-bold capitalize  ${style}`}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            variants={singleWord}
            initial="intial"
            animate="animate"
            key={word + "-" + index}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default AnimatedText;
