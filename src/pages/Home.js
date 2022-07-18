import About from "../components/Sections/HomePage/About/About";
import Contact from "../components/Sections/HomePage/Contactus/Contact";
import Herosection from "../components/Sections/HomePage/Hero/Herosection";
import Project from "../components/Sections/HomePage/Projects/Project";
import Skills from "../components/Sections/HomePage/Skills/Skills";

const Home = () => {
  return (
    <>
      <Herosection />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
