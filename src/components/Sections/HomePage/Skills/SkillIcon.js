import React from "react";

const SkillIcon = ({ width, children, name }) => {
  return (
    <div>
      {children}
      <p className="p3 text-white">{name}</p>
    </div>
  );
};

export default SkillIcon;
