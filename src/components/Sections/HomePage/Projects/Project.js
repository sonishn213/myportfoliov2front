import { useEffect, useState } from "react";
import SectionTitle from "../../../Globals/SectionTitle";
import ProjectCard from "./ProjectCard";
import TabBar from "./Tabs/TabBar";
import axios from "axios";
const Project = () => {
  //api links
  const BACKEND_API =
    process.env.REACT_APP_REACT_ENV === "development"
      ? "http://localhost:1337"
      : process.env.REACT_APP_API_URL;

  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    let filterStr = "";
    if (filter === "All") {
      getProjects(filterStr);
    } else {
      filterStr = "&filters[category][$eq]=" + filter;
      getProjects(filterStr);
    }
  }, [filter]);

  //get projects from database
  const getProjects = async (filterStr) => {
    const url = `${BACKEND_API}/api/projects?populate=*` + filterStr;
    const res = await axios.get(url);
    console.log(res?.data.data);
    setProjects(res?.data.data);
  };
  return (
    <section className="pt-20">
      <div className="f-container">
        <div className="text-center md:text-left">
          <SectionTitle>Projects</SectionTitle>
        </div>
        <div className="mt-16">
          <TabBar setFilter={setFilter} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 md:gap-x-4 gap-y-10 w-full mt-10">
          {projects.map((project) => {
            return (
              <>
                <ProjectCard
                  key={project.id}
                  imgSrc={project.attributes.preview_image.data.attributes.url}
                  title={project.attributes.name}
                  skilltags={project.attributes.skills}
                  details={project.attributes.details}
                  previewLink={project.attributes.preview_link}
                  sourceLink={project.attributes.souce_link}
                  projects={projects}
                />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
