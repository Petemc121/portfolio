import React from "react";
import { GoMarkGithub } from "react-icons/go";

interface projectInput {
  project: {
    id: number;
    className: string;
    img: any;
    title: string;
    description: string;
    link: string;
    github: string;
    setProjectHovered: any;
    projectHovered: number | null;
  };
}

export default function Project({ project }: projectInput) {
  const handleProjectHoverIn = () => {
    project.setProjectHovered(project.id);
  };
  const handleProjectHoverOut = (e: any) => {
    project.setProjectHovered(null);
  };
  return (
    <div className={"project " + project.className}>
      <a className="links" href={project.link}>
        <img
          onMouseOver={handleProjectHoverIn}
          onMouseOut={handleProjectHoverOut}
          style={{ opacity: project.projectHovered === project.id ? "1" : "0" }}
          src={project.img}
          className="projectImage"
        ></img>
      </a>
      <div
        onMouseOver={handleProjectHoverIn}
        onMouseOut={handleProjectHoverOut}
        className="projectText"
      >
        <a className="links" href={project.link}>
          <div className="projectTitle">{project.title}</div>
        </a>
        <div className="projectDescription">{project.description}</div>
        <a className="links" href={project.github}>
          <GoMarkGithub className="githubIcon" size="30" />
        </a>
      </div>
    </div>
  );
}
