import { useState } from "react";
import Tab from "./Tab";

const TabBar = ({ setFilter }) => {
  const [active, setActive] = useState("All");

  const handleTabSelect = (e) => {
    const name = e.target.getAttribute("name");
    setActive(name);
    setFilter(name);
  };
  return (
    <div className="flex md:space-x-4 space-x-2 justify-center md:justify-start">
      <Tab
        title="All"
        name="All"
        active={active === "All" ? "active" : ""}
        onClick={handleTabSelect}
      />
      <Tab
        title="Html/css"
        name="vanilla"
        active={active === "vanilla" ? "active" : ""}
        onClick={handleTabSelect}
      />
      <Tab
        title="Reactjs"
        name="reactjs"
        active={active === "reactjs" ? "active" : ""}
        onClick={handleTabSelect}
      />
    </div>
  );
};

export default TabBar;
