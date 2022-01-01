import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [setLoaded]);

  return (
    <div style={{ opacity: loaded ? "1" : "0" }} className="header">
      <div className="logo">
        <div className="myName"> Pete's</div>{" "}
        <div className="portfolio">Portfolio</div>
      </div>
      <div className="menu">
        MENU <FontAwesomeIcon className="hamburger" icon={faBars} />
      </div>
      <div></div>
    </div>
  );
}
