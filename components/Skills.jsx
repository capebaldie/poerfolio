import React from "react";
const Skills = () => {
  return (
    <div id="skills" className=" w-full">
      <div className="flex flex-col max-w-[1240px] w-full h-screen mx-auto p-4 justify-center items-center">
        <h1 className="text text-5xl text-white my-8 font-bold">
          My <span className="text-green text-green-400">skills.</span>
        </h1>
        <div className="grid grid-flow-row-dense  grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="flex justify-between items-center bg-[#112240] px-3 py-1 rounded-md border">
            <img className="w-20 sm:w-20 sm:h-auto" src="html.png" alt="" />
            <p className="sm:text-3xl text-xl">html</p>
          </div>
          <div className="flex justify-between items-center bg-[#112240] px-3 py-1 rounded-md border">
            <img
              className="w-20  sm:w-20"
              src="https://img.icons8.com/color/512/css3.png"
              alt=""
            />
            <p className="sm:text-3xl text-xl">css</p>
          </div>

          <div className="flex justify-between items-center bg-[#112240] px-3 py-1 rounded-md border">
            <img
              className="w-20  sm:w-20"
              src="https://img.icons8.com/color/512/javascript.png"
              alt=""
            />
            <p className="sm:text-3xl text-xl">Javascript</p>
          </div>

          <div className="flex justify-between items-center bg-[#112240] px-3 py-1 rounded-md border">
            <img
              className="w-20  sm:w-20"
              src="https://img.icons8.com/plasticine/512/react.png"
              alt=""
            />
            <p className="sm:text-3xl text-xl">React</p>
          </div>

          <div className="flex justify-between items-center bg-[#112240] px-3 py-1 rounded-md border">
            <img
              className="w-20  sm:w-20"
              src="https://img.icons8.com/color/512/nextjs.png"
              alt=""
            />
            <p className="sm:text-3xl text-xl">NextJs</p>
          </div>

          <div className="flex justify-between items-center bg-[#112240] px-3 py-1 rounded-md border">
            <img
              className="w-20  sm:w-20"
              src="https://img.icons8.com/color/512/firebase.png"
              alt=""
            />
            <p className="sm:text-3xl text-xl">Firebase</p>
          </div>

          <div className="flex justify-between items-center bg-[#112240] px-3 py-1 rounded-md border">
            <img
              className="w-20  sm:w-20"
              src="https://img.icons8.com/fluency/512/tailwind_css.png"
              alt=""
            />
            <p className="sm:text-3xl text-xl">Tailwind</p>
          </div>

          <div className="flex justify-between items-center bg-[#112240] px-3 py-1 rounded-md border text-center">
            <img
              className="w-20  sm:w-20"
              src="https://img.icons8.com/color/512/bootstrap.png"
              alt=""
            />
            <p className="sm:text-3xl text-xl">Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
