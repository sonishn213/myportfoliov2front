import MenuDrawer from "./MenuDrawer";
const Navbar = () => {
  return (
    <header className=" fixed z-30 w-full top-0 left-0 bg-zinc-900/70 ">
      <nav className="f-container hidden lg:block">
        <div className="flex justify-center items-center space-x-12 uppercase  text-zinc-300 tracking-wider">
          <a href="#home" className="py-6 navactive">
            Home
          </a>
          <a href="#about" className="py-6">
            About me
          </a>
          <a href="#skills" className="py-6">
            Skills
          </a>
          <a href="#projects" className="py-6">
            Projects
          </a>

          <a href="#contact" className="py-6">
            Contact
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
