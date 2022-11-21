import React from "react";
const AboutMe = () => {
  return (
    <div
      id="about"
      className="sm:flex flex-row justify-between w-full lg:h-screen slide"
    >
      <div className="flex flex-col max-w-[1240px] w-full h-full mx-auto p-6 justify-center items-center ">
        <h1 className="text text-5xl text-white my-5 font-bold mb-10 ">
          About <span className="text-green text-green-400">me.</span>
        </h1>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 sm:px-10">
          <img
            src="dv.jpg "
            className="w-[24rem] sm:w-[24.5rem] rounded-md margin opacity-90"
            alt=""
          />
          <p className="text-white text-[1.08rem] leading-9 bg-[#112240] px-4 py-6 rounded-md scales">
            I specialize in building mobile responsive front-end UI applications
            that connect with API&#39;s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. <br />
            Though I am most proficient in building front-end applications using
            HTML, CSS, Javascript, and React, I am a quick learner and can pick
            up new tech stacks as needed. I believe that being a great developer
            is not using one specific language, but choosing the best tool for
            the job. <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
