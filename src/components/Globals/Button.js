import React from "react";

const Button = ({ text }) => {
  return (
    <button className="tracking-wider cursor-pointer select-none text-base font-slab uppercase text-teal-300 border-2 border-teal-400 px-6 py-2 rounded-full transition-all bg-teal-400/50 hover:bg-teal-400/30 active:bg-teal-400/50">
      {text}
    </button>
  );
};

export default Button;
