import React from "react";
import SlideInText from "./SlideInText";
import SkillLogo from "./SkillLogo";

export default function About() {
  const aboutDescription =
    "Hi, I'm Pete. I'm a self taught front end web developer with a passion for creating beautiful, dynamic websites/web-apps that engage users instantly. Currently my expertise is in JavaScript developement with React and TypeScript and using Sass as a CSS framework, however I also have experience in back end technologies such as PHP, Express, postrgreSQL and WordPress developement.";

  const firstLogos = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      delay: "0.5s",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      delay: "1s",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      delay: "1.5s",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      delay: "2s",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      delay: "2.5s",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      delay: "3s",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
      delay: "3.5s",
    },
  ];

  const secondLogos = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      delay: "0.5s",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      delay: "1s",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      delay: "1.5s",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      delay: "2s",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
      delay: "2.5s",
    },
    {
      src: "https://testing-library.com/img/octopus-128x128.png",
      delay: "3s",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      delay: "3.5s",
    },
  ];
  return (
    <div id="aboutContainer" className="aboutContainer">
      <div className="aboutText">
        <SlideInText textClass="aboutTitle" text="About me" />
        <SlideInText textClass="aboutDescription" text={aboutDescription} />
        <SlideInText
          textClass="aboutTitle skillSet"
          text={"Specialised In..."}
        />
      </div>
      <div className="skillLogoContainer">
        {firstLogos.map((logo) => {
          return <SkillLogo src={logo.src} delay={logo.delay} />;
        })}
      </div>
      <div className="aboutText">
        <SlideInText
          textClass="aboutTitle skillSet"
          text={"Experience with..."}
        />
      </div>
      <div className="skillLogoContainer">
        {secondLogos.map((logo) => {
          return <SkillLogo src={logo.src} delay={logo.delay} />;
        })}
      </div>
    </div>
  );
}
