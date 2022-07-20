import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Globals/SectionTitle";
import InputField from "./InputField";
import Button from "../../../Globals/Button";
import axios from "axios";
const Contact = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isloading, setLoading] = useState(false);

  //read input data
  const readData = (e) => {
    const name = e.target.getAttribute("name");
    const value = e.target.value;
    console.log(name, value);
    setInputData((p) => {
      return { ...p, [name]: value };
    });
  };

  //submit input data save to database
  const saveMessage = async () => {
    console.log(inputData);
    const url = "http://localhost:1337/api/messages";
    try {
      setLoading(true);
      const res = await axios.post(url, { data: inputData });
      alert("Your message is safely received");
      setInputData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Message not sent");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20">
      <div className="f-container">
        <div className="text-center md:text-left">
          <SectionTitle>Contact</SectionTitle>
        </div>
        <div className="lg:w-3/4 ">
          <div className="md:flex mt-10 md:mb-12 mb-4 w-full space-y-4 md:space-y-0 md:space-x-4">
            <div className="md:w-1/2">
              <InputField
                type="text"
                id="name"
                name="name"
                label="Name"
                ph="Enter your name"
                value={inputData.name}
                onChange={readData}
              />
            </div>
            <div className="md:w-1/2">
              <InputField
                type="email"
                id="email"
                name="email"
                label="Email"
                ph="Enter your name"
                value={inputData.email}
                onChange={readData}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-zinc-300 text-lg font-light"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="6"
              placeholder="Enter your message"
              onChange={readData}
              value={inputData.message}
              className="w-full py-4 px-6 mt-2 mb-6 bg-transparent border-2 hover:border-teal-300 focus:border-teal-300 border-teal-700 outline-none text-zinc-300 text-lg transition-all"
            ></textarea>
          </div>

          <div className="md:text-right text-center">
            <Button text="submit" onClick={saveMessage} disabled={isloading} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
