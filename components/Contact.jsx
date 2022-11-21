import React, { useState, useEffect } from "react";

const Contact = () => {
  //
  const initialValues = { name: "", email: "", subject: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    setFormErrors(validate(formValues));
    e.preventDefault();
    const formData = new FormData();
    Object.entries(formValues).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/f/3964f7e3-0634-49d2-83cc-912b18da894e", {
      method: "POST",
      body: formData,
    }).then(() =>
      setFormValues({ name: "", email: "", subject: "", message: "" })
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && setSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (values.name === "") {
      errors.name = "this field is required";
    }
    if (values.email === "") {
      errors.email = "this field is required";
    } else if (!regex.test(values.email)) {
      errors.email = "this is not a valid mail";
    }
    if (values.subject === "") {
      errors.subject = "this field is required";
    }
    if (values.message === "") {
      errors.message = "message cannot be empty";
    }
    return errors;
  };

  return (
    <div id="contact" className="w-full">
      <div className="max-w-[1240px] m-auto px-4 py-16 w-full text-white/80">
        <h1 className="text text-center text-5xl text-white my-8 mb-12 font-bold">
          Contact <span className="text-green text-green-400">me.</span>
        </h1>
        <div className="flex sm:flex-row flex-col gap-8 lg:px-8">
          {/* left */}
          <div className="flex flex-col items-center lg:w-[50%]">
            <img src="connect.jpg" alt="" className="connect w-[20rem]" />
            <p className="pt-4 px-8 sm:px-16 text-lg">
              I am available for{" "}
              <span className="text-green-400 text-xl">Freelance</span> or{" "}
              <span className="text-green-400 text-xl">
                Full-time positions.
              </span>{" "}
              Contact me and let&apos;s talk.
            </p>
          </div>

          {/* right */}
          <div className="w-full h-auto lg:w-[50%] bg-[#112240] rounded-xl lg:p-4">
            <div className="p-5 sm:p-2">
              <form
                onSubmit={handleSubmit}
                className="text-white/60"
                action="https://getform.io/f/3964f7e3-0634-49d2-83cc-912b18da894e"
                method="POST"
                encType="multipart/form-data"
              >
                <input
                  onChange={handleChange}
                  value={formValues.name}
                  type="text"
                  name="name"
                  placeholder="name"
                  className="focus:outline-none bg-[#0a192f] h-10 px-2 my-3 w-full rounded-md placeholder:text-blue-600"
                />
                {<p className="text-red-600">{formErrors.name}</p>}
                <input
                  onChange={handleChange}
                  value={formValues.email}
                  type="text"
                  name="email"
                  placeholder="e-mail"
                  className="focus:outline-none bg-[#0a192f] h-10 px-2 my-3 w-full rounded-md placeholder:text-blue-600"
                />
                {<p className="text-red-600">{formErrors.email}</p>}
                <input
                  onChange={handleChange}
                  value={formValues.subject}
                  type="text"
                  name="subject"
                  placeholder="subject"
                  className="focus:outline-none bg-[#0a192f] h-10 px-2 my-3 w-full rounded-md placeholder:text-blue-600"
                />
                {<p className="text-red-600">{formErrors.subject}</p>}
                <textarea
                  onChange={handleChange}
                  value={formValues.message}
                  name="message"
                  id=""
                  rows="5"
                  placeholder="message"
                  className="focus:outline-none bg-[#0a192f] px-2 my-2 py-2 w-full rounded-lg placeholder:text-blue-600"
                ></textarea>
                {<p className="text-red-600">{formErrors.message}</p>}
                <button
                  type="submit"
                  className="w-full bg-green-400/90 mt-4 py-2 rounded-md"
                >
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
