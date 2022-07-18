import React from "react";
import SectionTitle from "../../../Globals/SectionTitle";
import InputField from "./InputField";
import Button from "../../../Globals/Button";
const Contact = () => {
  return (
    <section className="py-20">
      <div className="f-container">
        <SectionTitle>Contact</SectionTitle>
        <div className="w-3/4 ">
          <div className="flex mt-10 mb-12 w-full space-x-4">
            <div className="w-1/2">
              <InputField
                type="text"
                id="name"
                label="Name"
                ph="Enter your name"
              />
            </div>
            <div className="w-1/2">
              <InputField
                type="email"
                id="email"
                label="Email"
                ph="Enter your name"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-neutral-300 text-lg font-light"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="6"
              placeholder="Enter your message"
              className="w-full py-4 px-6 mt-2 mb-6 bg-transparent border-2 hover:border-teal-300 focus:border-teal-300 border-teal-700 outline-none text-neutral-300 text-lg transition-all"
            ></textarea>
          </div>

          <div className="text-right">
            <Button text="submit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
