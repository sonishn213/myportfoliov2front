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
        <div className="pt-20 pl-8 w-[200px] text-zinc-300 bg-zinc-900 h-full space-y-4 ">
          <a href="#" className=" navactive block">
            Home
          </a>
          <a href="#" className=" block">
            Skills
          </a>
          <a href="#" className=" block">
            Projects
          </a>
          <a href="#" className=" block">
            About me
          </a>
          <a href="#" className=" block">
            Contact
          </a>
        </div>
      </Drawer>
    </>
  );
}
