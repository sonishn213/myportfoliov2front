import { useState } from "react";
import SectionTitle from "../../../Globals/SectionTitle";
import ProjectCard from "./ProjectCard";
import TabBar from "./Tabs/TabBar";
import axios from "axios";
const Project = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    const url = "http://localhost:1337/api/projects?populate=*";
    const res = axios.get();
  };
  return (
    <section className="pt-20">
      <div className="f-container">
        <SectionTitle>Projects</SectionTitle>
        <div className="mt-10">
          <TabBar />
        </div>
        <div className="grid grid-cols-3 gap-x-4 gap-y-10 w-full mt-10">
          <ProjectCard
            imgSrc="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RyZWV0fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            title="This is a title for card This is a title for card This is a title
            for card"
            skilltags={["html", "js", "css"]}
            details="ssdcdscd"
            previewLink="https://www.google.com/search?client=firefox-b-d&q=move+inline+element+to+right"
            sourceLink="https://www.google.com/search?client=firefox-b-d&q=move+inline+element+to+right"
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
