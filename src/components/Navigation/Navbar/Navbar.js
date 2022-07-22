import { useRef } from "react";
import MenuDrawer from "./MenuDrawer";

const Navbar = () => {
  const navbarRef = useRef(null);
  window.onscroll = () => {
    let nav = navbarRef.current;

    if (
      document.body.scrollTop >= nav.clientHeight ||
      document.documentElement.scrollTop >= nav.clientHeight
    ) {
      nav.classList.add("bg-zinc-900/70");
    } else {
      nav.classList.remove("bg-zinc-900/70");
    }
  };

  return (
    <header
      className=" fixed z-30 w-full top-0 left-0   "
      ref={navbarRef}
      style={{ backdropFilter: "blur(4px)" }}
    >
      <nav className="f-container hidden lg:block">
        <div className="flex justify-center items-center space-x-12 uppercase  text-zinc-300 tracking-wider">
          <a href="#home" className="py-6 navactive hover:text-teal-500">
            Home
          </a>
          <a href="#about" className="py-6 hover:text-teal-500">
            About me
          </a>
          <a href="#skills" className="py-6 hover:text-teal-500">
            Skills
          </a>
          <a href="#projects" className="py-6 hover:text-teal-500">
            Projects
          </a>

          <a href="#contact" className="py-6 hover:text-teal-500">
            Contact
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="py-6 hover:text-teal-500"
          >
            Resume
          </a>
        </div>
      </nav>
      <nav className="f-container text-3xl text-zinc-300 py-4 lg:hidden">
        <MenuDrawer />
      </nav>
    </header>
  );
};

export default Navbar;
