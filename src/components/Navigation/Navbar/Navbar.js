const Navbar = () => {
  return (
    <header className=" absolute z-30 w-full top-0 left-0">
      <nav className="f-container">
        <div className="flex justify-center items-center space-x-12 uppercase  text-neutral-300 tracking-wider">
          <a href="#" className="py-6 navactive">
            Home
          </a>
          <a href="#" className="py-6">
            Skills
          </a>
          <a href="#" className="py-6">
            Projects
          </a>
          <a href="#" className="py-6">
            About me
          </a>
          <a href="#" className="py-6">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
