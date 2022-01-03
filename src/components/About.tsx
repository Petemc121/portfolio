import React from "react";
import AboutText from "./AboutText";

export default function About() {
  const aboutDescription =
    "Hi, I'm Pete. I'm a self taught front end web developer with a passion for creating beautiful, dynamic websites/web-apps that engage users instantly. Currently my expertise is in JavaScript developement with React and TypeScript and using Sass as a CSS framework, however I also have experience in back end technologies such as PHP, Express, posrgreSQL and WordPress developement.";
  return (
    <div className="aboutContainer">
      <div className="aboutText">
        <AboutText textClass="aboutTitle" text="About me" />
        <AboutText textClass="aboutDescription" text={aboutDescription} />
      </div>
    </div>
  );
}
