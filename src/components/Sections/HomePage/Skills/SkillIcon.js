import React from "react";

const SkillIcon = ({ children, name }) => {
  return (
    <div className="flex flex-col justify-between ">
      <div className="flex flex-grow w-full p-[0.4em]">
        <div className="w-full  rounded-md flex justify-center items-center lg:bg-zinc-600 border border-transparent hover:bg-teal-400/50 hover:border-teal-400 transition-all">
          {children}
        </div>
      </div>

      <p className="p3 text-center mt-1  md:mt-2 uppercase text-zinc-400 md:text-zinc-300">
        {name}
      </p>
    </div>
  );
};
// px-1 lg:py-2 lg:px-4
export default SkillIcon;
