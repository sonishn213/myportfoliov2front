import bgmain from "../../../../Assets/images/bgmain.svg";

const Herosection = () => {
  return (
    <section className="relative">
      <div className=" ">
        <div className="h-screen relative w-full overflow-hidden">
          <div className="h-full bg-black/40 absolute top-0 left-0 z-10 w-full flex justify-center items-center text-center">
            <div className="f-container">
              <h1 className="leading-tight ">
                Hello, I'm Shwanees.
                <br /> I'm a fronted developer.
              </h1>
            </div>
          </div>
          <div className="w-full blur-[160px] opacity-85">
            <img src={bgmain} alt="background image" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
