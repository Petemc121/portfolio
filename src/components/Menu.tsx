import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface menuInput {
  menuActive: boolean;
  setMenuActive: any;
}

export default function Menu({ menuActive, setMenuActive }: menuInput) {
  console.log("menu" + menuActive);
  const deactivateMenu = () => {
    setMenuActive(false);
  };
  return (
    <div className={menuActive ? "activeMenu menu" : "menu"}>
      <FontAwesomeIcon
        onClick={deactivateMenu}
        className="exitMenu"
        icon={faTimes}
        size="2x"
      />
      <div className="menuListContainer">
        <a onClick={deactivateMenu} className="links" href="#projectsContainer">
          <div className="menuItem">My work</div>
        </a>
        <a onClick={deactivateMenu} className="links" href="#aboutContainer">
          <div className="menuItem">About me</div>
        </a>
        <div className="menuItem">Blog</div>
        <a onClick={deactivateMenu} className="links" href="#contactContainer">
          <div className="menuItem">Contact</div>
        </a>
      </div>
    </div>
  );
}
