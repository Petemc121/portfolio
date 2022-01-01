import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

interface headerInput {
  setMenuActive: any;
  menuActive: boolean;
}

export default function Header({ menuActive, setMenuActive }: headerInput) {
  console.log(menuActive);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [setLoaded]);

  const activateMenu = () => {
    setMenuActive(true);
    console.log("active");
    console.log(menuActive);
  };

  const deactivateMenu = () => {
    setMenuActive(false);
    console.log("deactive");
  };

  return (
    <div style={{ opacity: loaded ? "1" : "0" }} className="header">
      <div className="logo">
        <div className="myName"> Pete's</div>{" "}
        <div className="portfolio">Portfolio</div>
      </div>
      <div
        onClick={menuActive ? deactivateMenu : activateMenu}
        className="menuSelect"
      >
        MENU <FontAwesomeIcon className="hamburger" icon={faBars} />
      </div>
    </div>
  );
}
