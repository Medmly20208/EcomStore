import React, { useEffect, useState } from "react";

const Nav = () => {
  const CommonNavStyle =
    "text-white cursor-pointer font-bold transition-colors font-sans duration-200 hover:text-customized-orange ";

  return (
    <nav>
      <ul className="flex flex-row justify-center align-center gap-5 sm:hidden">
        <li className={CommonNavStyle}>
          <a href="#Home">Home</a>
        </li>
        <li className={CommonNavStyle}>
          <a href="#Men">Men</a>
        </li>
        <li className={CommonNavStyle}>
          <a href="#Women">Women</a>
        </li>
        <li className={CommonNavStyle}>
          <a href="#Kids">Kids</a>
        </li>
        <li className={CommonNavStyle}>
          <a href="#Stores">Stores</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
