import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { CgMenuRight } from "react-icons/cg";

export default function MenuDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const anchor = "left";
  return (
    <>
      <CgMenuRight
        onClick={toggleDrawer(true)}
        className="ml-auto text-teal-400 text-3xl cursor-pointer hidehighlight"
      />
      <Drawer anchor={anchor} open={state} onClose={toggleDrawer(false)}>
        <div className="pt-20  w-[200px] text-zinc-300 bg-zinc-900 h-full  ">
          <a href="#home" className=" navactive block py-4 pl-8">
            Home
          </a>
          <a href="#about" className=" block py-4 pl-8">
            About me
          </a>
          <a href="#skills" className=" block py-4 pl-8">
            Skills
          </a>
          <a href="#projects" className=" block py-4 pl-8">
            Projects
          </a>

          <a href="#contact" className=" block py-4 pl-8">
            Contact
          </a>
        </div>
      </Drawer>
    </>
  );
}
