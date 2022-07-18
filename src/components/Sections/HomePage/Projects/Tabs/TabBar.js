import { useState } from "react";
import Tab from "./Tab";

const TabBar = () => {
  const [active, setActive] = useState("All");

  const handleTabSelect = (e) => {
    const name = e.target.getAttribute("name");
    console.log(name);
    setActive(name);
  };
  return (
    <div className="flex space-x-4">
      <Tab
        title="All"
        active={active === "All" ? "active" : ""}
        onClick={handleTabSelect}
      />
      <Tab
        title="Html/css"
        active={active === "Html/css" ? "active" : ""}
        onClick={handleTabSelect}
      />
      <Tab
        title="Reactjs"
        active={active === "Reactjs" ? "active" : ""}
        onClick={handleTabSelect}
      />
    </div>
  );
};

export default TabBar;
