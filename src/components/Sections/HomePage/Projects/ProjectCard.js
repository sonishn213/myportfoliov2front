import { useEffect, useState } from "react";
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
  projects,
}) => {
  const [isflipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped(false);
  }, [projects]);

  let flipStyle = {
    transform: "rotateY(-180deg)",
  };
  return (
    <div className="text-white flip-card relative ">
      <div className="flip-card-inner " style={isflipped ? flipStyle : {}}>
        <div className="front relative bg-zinc-900 border border-zinc-800">
          <div className="bg-gray-400 w-full max-h-60 md:max-h-80 overflow-hidden opacity-90 hover:opacity-95">
            <img src={imgSrc} alt={title} className="w-full" />
          </div>
          <div className="p-4 flex flex-col justify-between">
            <div>
              <div className="h-16 mb-8  space-y-2">
                <h3 className="uppercase line-clamp-2 ">{title}</h3>
                <div className="flex space-x-2 uppercase  font-slab text-sm  font-normal tracking-wider text-zinc-400/90">
                  {skilltags?.map((item) => (
                    <div>{item}</div>
                  ))}
                </div>
              </div>
            </div>

            <div>
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

        <div className="back absolute h-full top-0 p-4 bg-zinc-900 border border-teal-400">
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
                <p className="p2 line-clamp-[10] md:line-clamp-[13]">
                  {details}
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <a
                href={previewLink}
                target="_blank"
                rel="noreferrer"
                className="block  text-teal-400 text-base font-slab font-light cursor-pointer "
              >
                <div className="flex items-center space-x-2">
                  <FaRegEye />
                  <span> PREVIEW</span>
                </div>
              </a>
              <a
                href={sourceLink}
                target="_blank"
                rel="noreferrer"
                className="block  text-teal-400 text-base font-slab font-light cursor-pointer "
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
