import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
  const rendProj = projects.map((anObj)=>{
    return <ProjectItem key = {anObj.id} name = {anObj.name} about = {anObj.about} technologies = {anObj.technologies} />
  })


  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{rendProj}</div>
    </div>
  );
}

export default ProjectList;
