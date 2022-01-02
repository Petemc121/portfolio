import { useState } from "react";
import roamingrolls from "../images/roamingrolls.png";
import Project from "./Project";

export default function Projects() {
  const [projectHovered, setProjectHovered] = useState(null);

  const projects = [
    {
      id: 0,
      className: "roamingrolls",
      img: roamingrolls,
      title: "RoamingRolls",
      description: "A jiujitsu gym databases website.",
      setProjectHovered: setProjectHovered,
      projectHovered: projectHovered,
    },
    {
      id: 1,
      className: "silverbacks",
      img: roamingrolls,
      title: "RoamingRolls",
      description: "A jiujitsu gym databases website.",
      setProjectHovered: setProjectHovered,
      projectHovered: projectHovered,
    },
    {
      id: 2,
      className: "covid-app",
      img: roamingrolls,
      title: "RoamingRolls",
      description: "A jiujitsu gym databases website.",
      setProjectHovered: setProjectHovered,
      projectHovered: projectHovered,
    },
    {
      id: 3,
      className: "mat-tracker",
      img: roamingrolls,
      title: "RoamingRolls",
      description: "A jiujitsu gym databases website.",
      setProjectHovered: setProjectHovered,
      projectHovered: projectHovered,
    },
    {
      id: 4,
      className: "bjj-notes",
      img: roamingrolls,
      title: "RoamingRolls",
      description: "A jiujitsu gym databases website.",
      setProjectHovered: setProjectHovered,
      projectHovered: projectHovered,
    },
    {
      id: 5,
      className: "ebp",
      img: roamingrolls,
      title: "RoamingRolls",
      description: "A jiujitsu gym databases website.",
      setProjectHovered: setProjectHovered,
      projectHovered: projectHovered,
    },
  ];

  return (
    <div className="projectsContainer">
      {projects.map((project) => {
        return <Project project={project} />;
      })}
    </div>
  );
}
