import React from "react";
import Iconify from "../../Components/Iconify";
import Nav from "./Nav";
import Settings from "./Settings";
const index = () => {
  return (
    <header className="flex flex-row justify-around items-center">
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
