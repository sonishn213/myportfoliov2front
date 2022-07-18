import { useEffect, useState } from "react";
import SectionTitle from "../../../Globals/SectionTitle";
import ProjectCard from "./ProjectCard";
import TabBar from "./Tabs/TabBar";
import axios from "axios";
const Project = () => {
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

  const getProjects = async (filterStr) => {
    const url = "http://localhost:1337/api/projects?populate=*" + filterStr;
    const res = await axios.get(url);
    console.log(res?.data.data);
    setProjects(res?.data.data);
  };
  return (
    <section className="pt-20">
      <div className="f-container">
        <SectionTitle>Projects</SectionTitle>
        <div className="mt-10">
          <TabBar setFilter={setFilter} />
        </div>
        <div className="grid grid-cols-3 gap-x-4 gap-y-10 w-full mt-10">
          {projects.map((project) => {
            return (
              <ProjectCard
                imgSrc={
                  "http://localhost:1337" +
                  project.attributes.preview_image.data.attributes.url
                }
                title={project.attributes.name}
                skilltags={project.attributes.skills}
                details={project.attributes.details}
                previewLink={project.attributes.preview_link}
                sourceLink={project.attributes.souce_link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
