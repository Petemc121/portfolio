import React from "react";

interface menuInput {
  menuActive: boolean;
  setMenuActive: any;
}

export default function Menu({ menuActive, setMenuActive }: menuInput) {
  const deactivateMenu = () => {
    setMenuActive(false);
  };
  return (
    <div
      onClick={deactivateMenu}
      className={menuActive ? "activeMenu menu" : "menu"}
    >
      hello
    </div>
  );
}
