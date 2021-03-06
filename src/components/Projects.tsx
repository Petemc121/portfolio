import { useState } from "react";
import roamingrolls from "../images/roamingrolls.png";
import matTracker from "../images/mat-tracker.png";
import silverbacks from "../images/silverbacks.png";
import covidUpdates from "../images/covid-updates.png";
import bjjNotes from "../images/bjj-notes.png";
import portfolio from "../images/portfolio.png";
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
      link: "https://www.roamingrolls.com/",
      github: "https://github.com/Petemc121/RoamingRolls",
      setProjectHovered: setProjectHovered,
      projectHovered: projectHovered,
    },
    {
      id: 1,
      className: "silverbacks",
      img: silverbacks,
      title: "Silverbacks MMA",
      description:
        "A website built with React for a jiujitsu gym business owner.",
      link: "https://silverbacks-mma.herokuapp.com/",
      github: "https://github.com/Petemc121/silverbacks-mma",
      setProjectHovered: setProjectHovered,
      projectHovered: projectHovered,
    },
    {
      id: 2,
      className: "covid-app",
      img: covidUpdates,
      title: "Covid Updates",
      description:
        "An API fetching web-app built with React displaying covid data through dynamic graphs and animations.",
      link: "https://corona-tracker-101.netlify.app/",
      github: "https://github.com/Petemc121/corona-updates",
      setProjectHovered: setProjectHovered,
      projectHovered: projectHovered,
    },
    {
      id: 3,
      className: "mat-tracker",
      img: matTracker,
      title: "Mat Tracker",
      description:
        "A PERN stack built web-app that logs members of a jiujitsu gym in it's database",
      link: "https://mat-tracker.herokuapp.com/",
      github: "https://github.com/Petemc121/mat-tracker",
      setProjectHovered: setProjectHovered,
      projectHovered: projectHovered,
    },
    {
      id: 4,
      className: "bjj-notes",
      img: bjjNotes,
      title: "BJJ Notes",
      description:
        "A web-app built with React that logs jiujitsu techniques with drag and drop functionality.",
      link: "https://petemc121.github.io/bjj-notes-app/",
      github: "https://github.com/Petemc121/bjj-notes-app",
      setProjectHovered: setProjectHovered,
      projectHovered: projectHovered,
    },
    {
      id: 5,
      className: "portfolio",
      img: portfolio,
      title: "My Portfolio",
      description: "This very portfolio was also built with React!",
      link: "https://petes-portfolio.herokuapp.com/",
      github: "https://github.com/Petemc121/portfolio",
      setProjectHovered: setProjectHovered,
      projectHovered: projectHovered,
    },
  ];

  return (
    <div id="projectsContainer" className="projectsContainer">
      {projects.map((project) => {
        return <Project project={project} />;
      })}
    </div>
  );
}
