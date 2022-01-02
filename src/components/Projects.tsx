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
      description: "A jiujitsu gym database website.",
      setProjectHovered: setProjectHovered,
      projectHovered: projectHovered,
    },
    {
      id: 1,
      className: "silverbacks",
      img: roamingrolls,
      title: "Silverbacks MMA",
      description:
        "A website built with React for a jiujitsu gym business owner.",
      setProjectHovered: setProjectHovered,
      projectHovered: projectHovered,
    },
    {
      id: 2,
      className: "covid-app",
      img: roamingrolls,
      title: "Covid Updates",
      description:
        "An API fetching web-app built with React displaying covid data through dynamic graphs and animations.",
      setProjectHovered: setProjectHovered,
      projectHovered: projectHovered,
    },
    {
      id: 3,
      className: "mat-tracker",
      img: roamingrolls,
      title: "Mat Tracker",
      description:
        "A PERN stack built web-app that log members of a jiujitsu gym in it's database",
      setProjectHovered: setProjectHovered,
      projectHovered: projectHovered,
    },
    {
      id: 4,
      className: "bjj-notes",
      img: roamingrolls,
      title: "RoamingRolls",
      description:
        "A web-app built with React that logs jiujitsu techniques with drag and drop functionality.",
      setProjectHovered: setProjectHovered,
      projectHovered: projectHovered,
    },
    {
      id: 5,
      className: "portfolio",
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