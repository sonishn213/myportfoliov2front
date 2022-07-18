import About from "../components/Sections/HomePage/About/About";
import Herosection from "../components/Sections/HomePage/Hero/Herosection";
import Project from "../components/Sections/HomePage/Projects/project";
import Skills from "../components/Sections/HomePage/Skills/Skills";

const Home = () => {
  return (
    <>
      <Herosection />
      <About />
      <Skills />
      <Project />
    </>
  );
};

export default Home;
