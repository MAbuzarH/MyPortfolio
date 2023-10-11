"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GiMoon } from "react-icons/gi";
import { BsSunFill } from "react-icons/bs";
import useSwitchtheem from "./hooks/useSwitchtheem";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CustomMobileLink = ({ href, title, style = "", toggle }) => {
  const pathname = usePathname();
  const router = useRouter();

  
  const handelClick = () => {
    toggle();
    router.push(href);
  };


  return (
    <button href={href} className={` ${style}`} onClick={handelClick}>
      {title}
      <span
        className={`h-[2px] inline-block dark:bg-white-200 bg-red-200 absolute left-0 -bottom-0.5 group-hover:w-full transition-width ease  duration-300  link ${
          pathname === href ? "w-full" : "w-0"
        }
   `}
      />
    </button>
  );
};

function Navbar() {

  // check the pathname from url
  const pathname = usePathname();


  const [mode, setMode] = useSwitchtheem();
  const [isOpen, setIsOpen] = useState(false);
  
  // set the state of mobile manue
  const handelClick = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="container pt-8 bg-white text-black dark:bg-black dark:text-white relative mb-8">
      <div className="flex justify-between items-center">
        <div className="text-4xl font-extrabold md:text-xl">ABUZAR</div>
        <ul className="gap-10 lg:hidden  flex items-center justify-between">
          <Link href="/" className={`text-xl xl:text-2xl menuLink group`}>
            Home{" "}
            <span
              className={`h-[2px] inline-block dark:bg-white-200 bg-red-200 absolute left-0 -bottom-0.5 group-hover:w-full transition-width ease duration-300  link ${
                pathname === "/" ? "w-full" : "w-0"
              }
   `}
            >
              &nbsp;
            </span>
          </Link>
          <Link href="/about" className=" text-xl xl:text-2xl menuLink group">
            {" "}
            About
            <span
              className={`h-[2px] inline-block w-0 dark:bg-white-200 bg-red-200 absolute left-0 -bottom-0.5
              group-hover:w-full transition-[width] ease duration-300
              link
            ${pathname === "/about" ? "w-full" : "w-0"}`}>
              &nbsp;
            </span>
          </Link>
          <Link href="/projects" className="text-xl xl:text-2xl menuLink group">
            {" "}
            Projects
            <span
              className={`h-[2px] inline-block w-0 dark:bg-white-200 bg-red-200 absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            link ${pathname === "/projects" ? "w-full" : "w-0"} `}
            >
              &nbsp;
            </span>
          </Link>
          <Link href="/contact" className="text-xl xl:text-2xl menuLink group">
            {" "}
            Contact
            <span
              className={`h-[2px] inline-block w-0 dark:bg-white-200 bg-red-200 absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            link ${pathname === "/contact" ? "w-full" : "w-0"}`}
            >
              &nbsp;
            </span>
          </Link>
          <button
            className="ml-3 p-2 flex items-center justify-around rounded-full"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? <GiMoon /> : <BsSunFill />}
          </button>
          {/* <Link href='/about' className="menuLink" >  </Link> */}
        </ul>
        {/* mobile manue */}
        {isOpen ? (
          <ul className="min-w-[70vw] backdrop-blure-md flex py-32 flex-col fixed top-1/2  gap-10 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-between  rounded-2xl z-30 dark:bg-white/90 dark:text-black bg-black/90 text-white my-20 ">
            <CustomMobileLink
              toggle={handelClick}
              href="/"
              title="Home"
              style="menuLink group"
            />
            <CustomMobileLink
              toggle={handelClick}
              href="/about"
              title="About"
              style="menuLink group"
            />
            <CustomMobileLink
              toggle={handelClick}
              href="/projects"
              title="Projects"
              style="menuLink group"
            />
            <CustomMobileLink
              toggle={handelClick}
              href="/contact"
              title="Contact"
              style="menuLink group"
            />
            <button
              className="ml-3 p-2 flex items-center justify-around rounded-full"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? <GiMoon /> : <BsSunFill />}
            </button>
            {/* <Link href='/about' className="menuLink" >  </Link> */}
          </ul>
        ) : null}
        {/* this is button for mobile manue */}
        <button
          onClick={handelClick}
          className="transition-all ease-in-out duration-300 hidden lg:flex"
        >
          {isOpen === true ? (
            <AiOutlineClose size={25} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
