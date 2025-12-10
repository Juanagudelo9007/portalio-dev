import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Hero = () => {
  return (
    <div className=" h-full mt-14 p-4" id="about">
      <div className="flex  flex-col items-center  justify-center text-white p-4 md:p-6">
        <div className="flex gap-4 items-center mb-5">
          <img
            src={"/public/me.jpeg"}
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <h1 className="title text-2xl md:text-3xl font-bold">
            <span className="text-blue-500/70">Hello,</span> My Name is Juan
          </h1>
        </div>
        <p className="parr text-justify md:text-center text-sm  md:text-[17px] leading-relaxed  ">
          Self-taught web developer creating modern websites while expanding my
          skills. I’ve worked with HTML, CSS, JavaScript, React, tailwindcss and
          Firebase for auth, database, and storage, consulting documentation as
          needed. I recently started learning Astro and showcase projects that
          reflect my growth.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/juan-agudelo-294b40232/"
            target="_blank"
            className="  cursor-pointer hover:text-blue-500 transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin size={21} />
          </a>
          <a
            href="https://github.com/Juanagudelo9007"
            target="_blank"
            className="hover:text-white/40 transition-all duration-300 hover:scale-125 "
          >
            <FaGithubSquare size={20} />
          </a>
          <a
            href="#contact"
            className="hover:text-red-600 transition-all duration-300 hover:scale-120"
          >
            <SiGmail size={19} />
          </a>
          <a
            href="https://github.com/Juanagudelo9007?tab=repositories"
            target="_blank"
            className="bg-white/80 text-black/70 px-1 py-0.5 text-xs rounded-md cursor-pointer border transition-all duration-500 hover:bg-black hover:text-white hover:border-white "
          >
            My Projects
          </a>
        </div>
        <div
          className="flex justify-center items-center gap-2 mt-4"
          id="tech-stack"
        >
          <img
            src={"/public/html-logo.png"}
            alt="html-logo"
            className="w-8 h-8 "
          />
          <img
            src={"/public/css-logo.png"}
            alt="css-logo"
            className="w-8 h-8"
          />
          <img src={"/public/js-log.png"} alt="js-logo" className="w-8 h-8" />
          <img
            src={"/public/react-logo.png"}
            alt="react-logo"
            className="w-8 h-8"
          />
          <img
            src={"/public/tailwind-logo.png"}
            alt="tailwindcss-logo"
            className="w-7 h-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
