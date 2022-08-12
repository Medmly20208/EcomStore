import React, { useState } from "react";
import Iconify from "../../Components/Iconify";
import PopOver from "../../Components/PopOver";
import NavBarContent from "./NavBarContent";

const NavBar = () => {
  const [displayNav, setdisplayNav] = useState(false);
  return (
    <div className="relative justify-center items-center sx:hidden">
      <Iconify
        icon="fontisto:nav-icon"
        style={{ color: "white", cursor: "pointer", fontSize: "20px" }}
        onClick={() => setdisplayNav((prev) => !prev)}
      ></Iconify>
      <PopOver
        display={displayNav}
        content={<NavBarContent />}
        onClose={() => setdisplayNav(false)}
      />
    </div>
  );
};

export default NavBar;
