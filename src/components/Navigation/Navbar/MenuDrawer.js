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
  const scrollPage = (e) => {
    const eleId = e.target.getAttribute("name");
    const element = document.getElementById(eleId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setState(false);
    }
    // alert(eleId);
  };
  return (
    <>
      <CgMenuRight
        onClick={toggleDrawer(true)}
        className="ml-auto text-teal-400 text-3xl cursor-pointer hidehighlight"
      />
      <Drawer anchor={anchor} open={state} onClose={toggleDrawer(false)}>
        <div className="pt-20  w-[200px] text-zinc-300 bg-zinc-900 h-full  ">
          <div
            name="home"
            className="  block py-4 pl-8 active:bg-zinc-700"
            onClick={scrollPage}
          >
            Home
          </div>
          <div
            name="about"
            className="  block py-4 pl-8 active:bg-zinc-700"
            onClick={scrollPage}
          >
            About me
          </div>
          <div
            name="skills"
            className="  block py-4 pl-8 active:bg-zinc-700"
            onClick={scrollPage}
          >
            Skills
          </div>
          <div
            name="projects"
            className="  block py-4 pl-8 active:bg-zinc-700"
            onClick={scrollPage}
          >
            Projects
          </div>
          <div
            name="contact"
            className="  block py-4 pl-8 active:bg-zinc-700"
            onClick={scrollPage}
          >
            Contact
          </div>
        </div>
      </Drawer>
    </>
  );
}
