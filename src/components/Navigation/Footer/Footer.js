import React from "react";
import { SiGmail } from "react-icons/si";
import { BsLinkedin, BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="border-y-2 border-teal-300 bg-teal-900">
      <div className="f-container text-teal-300 py-4 md:py-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="p3 tracking-wider  text-teal-300">
          DESIGNED AND DEVELOPED BY SHWANEES
        </p>
        <div className="space-x-6 flex text-xl ">
          <div className="cursor-pointer hover:text-teal-100">
            <a target="_blank" href="">
              <SiGmail />
            </a>
          </div>
          <div className="cursor-pointer hover:text-teal-100">
            <a target="_blank" href="https://www.linkedin.com/in/shwanees213/">
              <BsLinkedin />
            </a>
          </div>
          <div className="cursor-pointer hover:text-teal-100">
            <a target="_blank" href="https://github.com/sonishn213">
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
