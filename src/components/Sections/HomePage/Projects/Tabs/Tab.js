import React from "react";

const Tab = ({ title, active, onClick }) => {
  let activeClass = "";
  if (active === "active") {
    activeClass = "bg-teal-400/50";
  }
  return (
    <div
      name={title}
      className={
        `cursor-pointer select-none text-sm font-slab uppercase text-neutral-300 border-2 border-teal-400 px-6 py-2 rounded-full transition-all hover:bg-teal-400/50 ` +
        activeClass
      }
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default Tab;
