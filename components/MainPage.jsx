import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { TbMail } from "react-icons/tb";
import "animate.css";

const MainPage = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center ">
        <div className="animate__animated animate__fadeInUp">
          <p className="text-lg text-gray-100 opacity-50  hover-strike-animation  ease-in duration-200 ">
            Let's build something..
          </p>
          <h1 className="py-3 text-white text-5xl sm:text-6xl font-bold mt-4 text ">
            Hi, I'm <span className="text-green-400 text-green"> Amal</span>
          </h1>
          <h1 className="py-2 text-[#e3e8f7] text-5xl sm:text-6xl font-bold hover:text-green-400 ease-in-out duration-200  hover-underline-animation">
            A Front-End Web Developer
          </h1>

          <p className="py-4 text-gray-300 sm:max-w-[70%] m-auto ">
            I&#39;m focused on building responsive front-end web applications
            while learinig back-end technologies.
          </p>

          <div className="flex items-center justify-center gap-4 text-white mt-4 animate__animated animate__fadeInUp">
            <a href="https://github.com/capebaldie" target="_blank">
              <FiGithub className="link hover:text-[#64ffda]" />
            </a>
            <a
              href="https://www.linkedin.com/in/amal-a-s-683ba31aa/"
              target="_blank"
            >
              <FiLinkedin className="link hover:text-[#64ffda]" />
            </a>

            <a href="mailto:amalsunil863@gmail.com">
              <TbMail className="link hover:text-[#64ffda]" />
            </a>
            <a href="Amal-a-s.pdf" download="Amal-a-s.pdf">
              <p className="hidden sm:inline border border-green-400 px-2 py-[0.20rem] rounded-sm hover:bg-[#64ffda] hover:text-[#0a192f] link">
                Resume
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
