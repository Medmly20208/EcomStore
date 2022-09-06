import React from "react";

const Nav = () => {
  const CommonNavStyle =
    "text-white cursor-pointer font-bold transition-colors font-sans duration-200 hover:text-customized-orange ";

  return (
    <nav>
      <ul className="flex flex-row justify-center align-center gap-5 sm:hidden">
        <li className={CommonNavStyle}>Home</li>
        <li className={CommonNavStyle}>Men</li>
        <li className={CommonNavStyle}>Women</li>
        <li className={CommonNavStyle}>Kids</li>
      </ul>
    </nav>
  );
};

export default Nav;
