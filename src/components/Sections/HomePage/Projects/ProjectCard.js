import React, { useState } from "react";
import "./project.css";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { BsCode } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
const ProjectCard = ({
  title,
  skilltags,
  details,
  previewLink,
  sourceLink,
  imgSrc,
}) => {
  const [isflipped, setFlipped] = useState(false);

  let flipStyle = {
    transform: "rotateY(-180deg)",
  };
  return (
    <div className="text-white flip-card relative ">
      <div className="flip-card-inner " style={isflipped ? flipStyle : {}}>
        <div className="front relative bg-neutral-900">
          <div className="bg-gray-400 w-full h-72 overflow-hidden">
            <img src={imgSrc} alt={title} />
          </div>
          <div className="p-4 flex flex-col">
            <div className="h-16 mb-4">
              <h3 className="uppercase line-clamp-2">{title}</h3>
            </div>
            <div>
              <div className="flex space-x-2 uppercase  font-slab text-sm font-light tracking-wider text-neutral-400/90">
                {skilltags?.map((item) => (
                  <div>{item}</div>
                ))}
              </div>
              <div className="text-right">
                <a
                  onClick={() => {
                    setFlipped((p) => !p);
                  }}
                  className="cursor-pointer select-none text-base inline-block font-slab text-teal-400   font-light "
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="back absolute h-full top-0 p-4 bg-neutral-900 border border-teal-400">
          <div className=" flex flex-col h-full justify-between">
            <div>
              <div
                className="text-teal-400 "
                onClick={() => {
                  setFlipped((p) => !p);
                }}
              >
                <HiOutlineArrowNarrowLeft className="ml-auto text-2xl cursor-pointer" />
              </div>
              <div className="flex-grow mt-2">
                <p className="p3 line-clamp-[13]">{details}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <a
                href={previewLink}
                target="_blank"
                className="block  text-teal-400  text-base font-slab font-light cursor-pointer "
              >
                <div className="flex items-center space-x-2">
                  <FaRegEye />
                  <span> PREVIEW</span>
                </div>
              </a>
              <a
                href={sourceLink}
                target="_blank"
                className="block  text-teal-400  text-base font-slab font-light cursor-pointer "
              >
                <div className="flex items-center space-x-2">
                  <BsCode />
                  <span> SOURCE CODE</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
