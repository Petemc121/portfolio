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
        <div className="menuItem">My work</div>
        <div className="menuItem">About me</div>
        <div className="menuItem">Blog</div>
        <div className="menuItem">Contact</div>
      </div>
    </div>
  );
}
