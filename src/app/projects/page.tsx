import React from "react";
import type { Metadata } from "next";
import { AnimatedText, Layout } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

export const metadata: Metadata = {
  title: "Abuzar | Projects Page",
};

interface Props {
  type?: string;
  title: string;
  link: string;
  github: string;
  summary?: string;
  img: string;
}

const FeaturedProjects = ({
  type,
  title,
  link,
  github,
  summary,
  img,
}: Props) => {
  return (
    <article className="flex w-full sm:w-[99%]  lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl  rounded-3xl border-[2px] dark:bg-white/40 border-solid border-black dark:border-white items-center justify-between sm:p-2 bg-gray-200 p-12 relative rounded-br-2xl">
      <div
        className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%]
              rounded-[3rem] bg-black/50  dark:bg-slate-50  xs:-right-2 xs:h-[102%] xs:w-[100%]
              "
      />
      <Link
        className="w-1/2 lg:w-full overflow-hidden rounded-lg cursor-pointer"
        href={link}
        target="_blank"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          width={2200}
          height={2200}
          priority
        />
      </Link>
      <div className="flex w-1/2 lg:w-full flex-col items-start justify-between pl-6 lg:pl-0 lg:pt-6">
        <span className="text-blue-600 font-medium text-xl xs:text-base sm:text-sm">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-4xl font-bold sm:text-base">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium sm:font-base sm:text-sm ">{summary}</p>
        <div className="flex mt-2 items-center text-xl  ">
          <Link href={github} target="_blank" className=" text-4xl">
            <AiFillGithub />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded text-white bg-blue-800 p-2 font-samibold text-lg sm:text-sm"
          >
            Visit The project
          </Link>
        </div>
      </div>
    </article>
  );
};

const OtherProject = ({ title, link, github, type, img }: Props) => {
  return (
    <article className="w-full sm:w-[99%]  h-[100%]  lg:p-[16px] rounded-2xl border-[2px] border-solid dark:bg-white/40 border-black items-center justify-center bg-gray-200 shadow-xl shadow-white/60 p-12 relative flex-col sm:p-4 dark:border-white">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[1.5rem] bg-black rounded-br-3xl" />
      <Link
        className="w-full overflow-hidden rounded-lg cursor-pointer"
        href={link}
        target="_blank"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          width={2200}
          height={2200}
        />
      </Link>
      <span className="text-blue-500 font-medium text-xl pl-10 mt-2 sm:pl-0">
        {type}
      </span>
      <div className="flex w-full flex-col items-start justify-between pl-6 sm:pl-0">
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>

        <div className="flex mt-2 items-center text-xl w-full justify-between">
          <Link href={github} target="_blank" className=" text-4xl">
            <AiFillGithub />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded text-white bg-blue-800 p-2 font-samibold text-lg md:text-base sm:text-sm"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

function Projects() {
  return (
    <>
      <main className="bg-white text-black dark:bg-black dark:text-white sm:w-full !overflow-x-hidden ">
        <Layout style="pt-16 flex-col flex items-center justify-center">
          <AnimatedText
            text="Imagination Trumps Knowledge"
            style="pb-4 text-5xl lg:text-6xl sm:mb-8 sm:text-4xl xs:tex-2xl "
          />
          <div className="grid-cols-12 grid gap-24 pt-20 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-20  sm:gap-x-0">
            <div className="col-span-12 ">
              <FeaturedProjects
                github="https://github.com/MAbuzarH/weather-info-ai"
                link="https://weather-app-ai.vercel.app"
                title="Weather App"
                summary="This weather app, powered by Next.js and GraphQL, provides accurate and real-time weather information. With a user-friendly interface and robust data retrieval, it delivers comprehensive weather forecasts, making it a reliable choice for staying informed about changing weather conditions."
                img="/weatherapp.png"
                type="Featured Project"
              />
            </div>
            <div className=" col-span-6 sm:col-span-12 ">
              <OtherProject
                github="https://github.com/MAbuzarH/portfollio"
                link="https://super-advertisement.surge.sh/"
                title="Portfolio Website"
                img="/portfolio.png"
                type="Featured Project"
              />
            </div>
            <div className=" col-span-6 sm:col-span-12 ">
              {" "}
              <OtherProject
                github="https://github.com/MAbuzarH/buisness-next"
                link="https://buisness-web-mabuzarh.vercel.app/"
                title="Buisness Website"
                img="/business.png"
                type="Featured Project"
              />
            </div>
            <div className=" col-span-12 ">
              <FeaturedProjects
                github="https://github.com/MAbuzarH/Fb-clone"
                link="https://outgoing-nose.surge.sh/"
                title="Facebook Clone"
                summary="This Facebook clone, built using HTML, CSS, and Bootstrap, mimics the iconic social media platform's design and functionality. It offers users a familiar experience for posting, connecting with friends, and sharing content, all while showcasing the power of front-end web development."
                img="/facebookclone.png"
                type="Featured Project"
              />
            </div>
            <div className=" col-span-6 sm:col-span-12 ">
              <OtherProject
                github="https://github.com/MAbuzarH/weather-app"
                link="https://weather-info-mabuzarh.vercel.app/"
                title="WeatherTelling website "
                img="/weatherinfo.png"
                type="Featured Project"
              />
            </div>
            <div className=" col-span-6 sm:col-span-12 ">
              <OtherProject
                github="https://github.com/MAbuzarH/business"
                link="https://weather-info-mabuzarh.vercel.app/"
                title="buisness web"
                img="/busines2.png"
                type="Featured Project"
              />
            </div>
            <div className=" col-span-12 ">
              <FeaturedProjects
                github="https://github.com/MAbuzarH/Fb-clone"
                link="https://gallery-9oj5zwgzl-mabuzarh.vercel.app/"
                title="Gallery App"
                summary="The gallery app, developed using React, Redux, and Tailwind CSS, offers a seamless and organized way to showcase and manage images and videos. Its intuitive interface, combined with Redux for state management and Tailwind CSS for styling, ensures an efficient and visually appealing gallery experience."
                img="/gallery.png"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default Projects;
