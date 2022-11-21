import React, { useState, useEffect } from "react";
import { BsList } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";

const NavBar = () => {
  //
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="fixed w-full z-[100] shadow-md shadow-black/30 smooth-transition ease-in-out duration-1000">
      <div className="flex flex-row items-center justify-between sm:h-16 h-20 bg-[#0a192f]">
        <div>
          <h1 className="text-3xl ml-4 font-bold hover-underline-animation hover:text-green-400 ease-in-out duration-300 text-white">
            <a href="#home">
              {" "}
              <span className="text-green-400">P</span>ortfolio.
            </a>
          </h1>
        </div>
        <div>
          <ul className="hidden sm:flex  mr-6 text-xl">
            <a href="#home">
              <li className="ml-8 text-white  hover:text-green-400 ease-in-out duration-100 hover-underline-animation">
                <span className="text-green-400 font-bold">H</span>ome
              </li>
            </a>
            <a href="#about">
              <li className="ml-8 text-white hover:text-green-400 ease-in duration-100 hover-underline-animation">
                <span className="text-green-400 font-bold ">A</span>bout Me
              </li>
            </a>
            <a href="#skills">
              <li className="ml-8 text-white  hover:text-green-400 ease-in duration-100 hover-underline-animation">
                <span className="text-green-400 font-bold">S</span>kills
              </li>
            </a>
            <a href="#projects">
              <li className="ml-8 text-white  hover:text-green-400 ease-in duration-100 hover-underline-animation">
                <span className="text-green-400 font-bold">P</span>rojects
              </li>
            </a>
            <a href="#contact">
              <li className="ml-8 text-white  hover:text-green-400 ease-in duration-100 hover-underline-animation">
                <span className="text-green-400 font-bold">C</span>ontact Me
              </li>
            </a>
          </ul>
        </div>
      </div>
      {/* mobile navbar */}
      {mobileMenu ? (
        <RiCloseFill
          onClick={() => setMobileMenu(!mobileMenu)}
          className="absolute sm:hidden block top-5 right-1 w-10 h-10 mr-2 text-white cursor-pointer z-20 smooth-transition"
        />
      ) : (
        <BsList
          onClick={() => setMobileMenu(!mobileMenu)}
          className="absolute sm:hidden block top-5 right-1 w-10 h-10 mr-2 text-white cursor-pointer z-20 smooth-transition"
        />
      )}
      <div
        className={`absolute top-0 h-screen w-[100%] bg-[#0a192f] z-10 p-6 sm:hidden smooth-transition ${
          mobileMenu ? "left-0" : "-left-full"
        }`}
      >
        <ul className="sm:hidden flex flex-col items-center justify-center w-full h-screen gap-y-5 text-3xl">
          <a onClick={() => setMobileMenu(!mobileMenu)} href="#home">
            <li className="my-2 text-white text underline-offset-8 ">
              <span className="text-green-400 text-green font-bold">H</span>
              ome.
            </li>
          </a>
          <a onClick={() => setMobileMenu(!mobileMenu)} href="#about">
            <li className="my-2 text-white text">
              <span className="text-green-400 text-green font-bold">A</span>bout
              Me.
            </li>
          </a>
          <a onClick={() => setMobileMenu(!mobileMenu)} href="#skills">
            <li className="my-2 text-white text">
              <span className="text-green-400 text-green  font-bold">S</span>
              kills.
            </li>
          </a>
          <a onClick={() => setMobileMenu(!mobileMenu)} href="#projects">
            <li className="my-2 text-white text">
              <span className="text-green-400 text-green font-bold">P</span>
              rojects.
            </li>
          </a>
          <a onClick={() => setMobileMenu(!mobileMenu)} href="#contact">
            <li className="my-2 text-white text">
              <span className="text-green-400 text-green font-bold">C</span>
              ontact Me.
            </li>
          </a>
          <a href="amal-a.s.pdf" download="amal-a.s.pdf">
            <p className="border border-green-400 px-2 py-[0.20rem] rounded-sm hover:bg-[#64ffda] hover:text-[#0a192f]">
              Resume
            </p>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
