import { useEffect, useState } from "react";
import SectionTitle from "../../../Globals/SectionTitle";
import ProjectCard from "./ProjectCard";
import TabBar from "./Tabs/TabBar";
import axios from "axios";
import Spinner from "../../../Globals/Spinner";

const Project = () => {
  //api links
  //"production" "development"
  const BACKEND_API =
    process.env.REACT_APP_ENV === "developmen"
      ? "http://localhost:1337"
      : process.env.REACT_APP_API_URL;

  const [projects, setProjects] = useState([]);
  const [projLoading, setProjloading] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    let filterStr = "&sort[0]=createdAt%3Adesc";
    if (filter === "All") {
      getProjects(filterStr);
    } else {
      filterStr = `${filterStr}&filters[category][$eq]=${filter}`;
      getProjects(filterStr);
    }
  }, [filter]);

  //get projects from database
  const getProjects = async (filterStr) => {
    try {
      setProjloading(true);
      const url = `${BACKEND_API}/api/projects?populate=*` + filterStr;
      const res = await axios.get(url);
      setProjects(res?.data.data);
    } catch (error) {
      console.log("error occured fetching data", error);
    } finally {
      setProjloading(false);
    }
  };

  //card flip state
  const [isflipped, setFlipped] = useState({ id: "", flipped: false });

  return (
    <section className="pt-20 md:pt-32" id="projects">
      <div className="f-container">
        <div className="text-center md:text-left">
          <SectionTitle>Projects</SectionTitle>
        </div>
        <div className=" mt-10 md:mt-16">
          <TabBar setFilter={setFilter} />
        </div>
        {projLoading && <Spinner />}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 md:gap-x-4 gap-y-10 w-full mt-10 md:mt-16">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                imgSrc={project.attributes.preview_image.data.attributes.url}
                title={project.attributes.name}
                skilltags={project.attributes.skills}
                details={project.attributes.details}
                previewLink={project.attributes.preview_link}
                sourceLink={project.attributes.souce_link}
                isflipped={isflipped}
                setFlipped={setFlipped}
                id={project.id}
                projects={projects}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
