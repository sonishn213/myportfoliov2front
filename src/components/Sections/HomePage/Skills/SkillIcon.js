import React from "react";

const SkillIcon = ({ children, name }) => {
  return (
    <div className="flex flex-col justify-between ">
      <div className="flex flex-grow w-full p-[0.4em]">
        <div className="w-full py-2 px-4 rounded-md flex justify-center items-center bg-neutral-600 border border-transparent hover:bg-teal-400/50 hover:border-teal-400">
          {children}
        </div>
      </div>

      <p className="p3 text-center mt-2 uppercase">{name}</p>
    </div>
  );
};

export default SkillIcon;
