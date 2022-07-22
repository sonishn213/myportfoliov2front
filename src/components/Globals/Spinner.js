import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center pt-4">
      <div className="flex justify-center items-center w-10 h-10 rounded-full border-4  border-teal-300 border-x-transparent animate-spin"></div>
    </div>
  );
};

export default Spinner;
