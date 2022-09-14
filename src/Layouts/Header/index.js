import React from "react";
import Iconify from "../../Components/Iconify";
import Nav from "./Nav";
import Settings from "./Settings";
const index = () => {
  return (
    <header className="sticky top-0 right-0 flex flex-row justify-evenly items-center bg-[#050507] z-[200] ">
      <Iconify
        icon="simple-icons:nike"
        style={{ color: "#e65100", fontSize: "90px" }}
      />
      <Nav />
      <Settings />
    </header>
  );
};

export default index;
