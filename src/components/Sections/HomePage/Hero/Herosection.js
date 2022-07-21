import bgmain from "../../../../Assets/images/bgmain.svg";
import bgmobile from "../../../../Assets/images/bgmobile.svg";
const Herosection = () => {
  return (
    <section className="relative border-b-2 border-b-teal-400" id="home">
      <div className=" ">
        <div className="md:h-screen h-80 relative w-full overflow-hidden">
          <div className="h-full bg-black/40  absolute top-0 left-0 z-10 w-full flex justify-center items-center text-center">
            <div className="f-container">
              <h1 className="leading-tight ">
                Hello, I'm Shwanees.
                <br /> I'm a front end developer.
              </h1>
            </div>
          </div>
          <div className="w-full blur-[80px] opacity-85 hidden md:block">
            <img src={bgmain} alt="background pc" className="w-full " />
          </div>
          <div className="w-full blur-[34px]  md:hidden ">
            <img src={bgmobile} alt="background mobile " className="w-full  " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
