const Tab = ({ title, active, onClick, name }) => {
  let activeClass = "";
  if (active === "active") {
    activeClass = "bg-teal-400/50";
  }
  return (
    <div
      name={name}
      className={`cursor-pointer select-none md:text-sm text-xs font-slab uppercase text-zinc-300 border-2 border-teal-400 px-4 py-2 md:px-6 md:py-2 rounded-full transition-all hover:bg-teal-400/50 hidehighlight ${activeClass}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default Tab;
