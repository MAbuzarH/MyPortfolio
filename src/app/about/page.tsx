"use client";
import React, { useRef, useEffect } from "react";

import { AnimatedText, Layout, Skills, Education } from "@/components";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface Props {
  value: number;
}

const AnimatedNumbers = ({ value }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  // const newValue = Number(value);
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [value, springValue]);

  return <span ref={ref}></span>;
};

function About() {
  return (
    <>
      <main className="!overflow-x-hidden flex w-full flex-col items-center justify-center bg-white text-black dark:bg-black dark:text-white">
        <Layout style="pt-16">
          <AnimatedText
            text="Dedication Powers Achievement!"
            style="text-[22px]  mb-16 sm:mb-5 text-[4rem] mb-16 lg:text-7xl sm:text-4xl"
          />
          <div className="flex w-full lg:block gap-14 pt-5 sm:gap-8">
            <div className=" w-[40%] sm:order-3 lg:w-[100%] flex flex-col items-start justify-start">
              <h2 className="mb-4 text-2xl font-bold uppercase ">Biography</h2>
              <p className="my-4  font-medium  text-[14px] ">
                I&#39;m a passionate Next.js developer with a knack for crafting
                web experiences. With a solid foundation in HTML, CSS, and
                JavaScript, I specialize in bringing digital visions to life. My
                proficiency extends to working with Sanity, Sass, PHP, and
                leveraging the power of Tailwind CSS and Shaidon UI to create
                seamless, user-friendly interfaces. I find joy in the art of
                coding, transforming ideas into elegant, functional websites.
              </p>
              <p className="my-4 font-medium    text-[14px]">
                My dedication to crafting clean, intuitive designs ensures that
                every project I tackle is not just visually appealing but also
                user-focused. Driven by a curiosity for emerging technologies
                and a commitment to staying up-to-date with industry trends,
                I&#39;m always excited to take on new challenges and bring
                innovative solutions to the table.
              </p>
              <p className="my-4 font-medium  text-[14px]">
                In this ever-evolving digital landscape, I thrive on the endless
                possibilities of web development and the thrill of turning
                concepts into reality. Let&#39;s build something incredible
                together!
              </p>
            </div>
            {/* profile picture */}
            <div className="w-[40%] lg:w-[60%] sm:order-1 m-auto lg:h-[50%] h-full rounded-2xl border-2 border-solid border-black bg-white dark:bg-black dark:border-white p-5 relative">
              <div
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%]
              rounded-[2rem] bg-black/50  dark:bg-slate-50
              "
              />
              <Image
                src={"/witout.png"}
                alt="profile Picture"
                className="w-full h-auto rounded-2xl  "
                width={2100}
                height={2100}
                priority
              />
            </div>
            {/* experience */}
            <div className="flex sm:order-2 flex-col items-end justify-between sm:w-full lg:flex-row lg:mt-8">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-extrabold sm:font-bold sm:text-3xl ">
                  <AnimatedNumbers value={50} />+
                </span>{" "}
                <h2 className="text-xl font-medium capitalize sm:font-normal sm:text-[12px]">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-extrabold  sm:font-bold sm:text-3xl">
                  {" "}
                  <AnimatedNumbers value={30} />+
                </span>
                <h2 className="text-xl text-center font-medium capitalize sm:font-normal sm:text-[12px]">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-extrabold sm:font-bold sm:text-3xl ">
                  {" "}
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium text-center capitalize sm:font-normal sm:text-[12px]">
                  Year&#39;s Of Experirnce
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Education />
        </Layout>
      </main>
    </>
  );
}

export default About;
