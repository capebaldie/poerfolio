import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-4 py-16 sm:pt-[12rem] w-full text-white/80">
        <h1 className="text text-center text-5xl text-white my-8 font-bold">
          Contact <span className="text-green text-green-400">me.</span>
        </h1>
        <div className="flex sm:flex-row flex-col gap-8">
          {/* left */}
          <div className="flex flex-col">
            <img
              src="connect.jpg"
              alt=""
              className="connect w-[25rem] sm:w-[35rem]"
            />
            <p className="py-4">
              I am available for freelance or full-time positions. Contact me
              and let&apos;s talk.
            </p>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto bg-[#112240] rounded-xl lg:p-4">
            <div className="p-5 sm:p-2">
              <form
                className="text-white/60"
                action="https://getform.io/f/3964f7e3-0634-49d2-83cc-912b18da894e"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="flex flex-col">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="focus:outline-none bg-[#0a192f] h-10 px-2 my-3 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    className="focus:outline-none bg-[#0a192f] h-10 px-2 my-3 rounded-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="focus:outline-none bg-[#0a192f] h-10 px-2 my-3 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Message</label>
                  <textarea
                    name="message"
                    id=""
                    rows="5"
                    className="focus:outline-none bg-[#0a192f] px-2 my-2 py-2 rounded-lg"
                  ></textarea>
                </div>
                <button className="w-full bg-green-400/90 mt-4 py-2 rounded-md">
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
