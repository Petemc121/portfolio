import React from "react";

interface projectInput {
  project: {
    id: number;
    className: string;
    img: any;
    title: string;
    description: string;
    setProjectHovered: any;
    projectHovered: number | null;
  };
}

export default function Project({ project }: projectInput) {
  const handleProjectHoverIn = (e: any) => {
    e.target.style.opacity = "1";
  };

  const handleProjectHoverOut = (e: any) => {
    e.target.style.opacity = "0";
  };
  return (
    <div className={"project " + project.className}>
      <img
        onMouseOver={handleProjectHoverIn}
        onMouseOut={handleProjectHoverOut}
        src={project.img}
        className="projectImage"
      ></img>
      <div className="projectText">
        <div className="projectTitle">{project.title}</div>
        <div className="projectDescription">{project.description}</div>
      </div>
    </div>
  );
}
