import React, { useState } from "react";

import Iconify from "../../Components/Iconify";
import PopOver from "../../Components/PopOver";
import PopOverContent from "./PopOverContent";

const Settings = () => {
  const [displayPopOver, setDisplayPopOver] = useState(false);

  return (
    <div className="flex flex-row justify-center align-center gap-1">
      <Iconify
        icon="ant-design:search-outlined"
        style={{ color: "white", fontSize: "30px", cursor: "pointer" }}
      ></Iconify>
      <div className="flex mr-6 cursor-pointer">
        <Iconify
          icon="ant-design:shopping-cart-outlined"
          style={{ color: "white", fontSize: "30px" }}
        ></Iconify>
        <div className="text-white w-7 h-7 border rounded-full bg-customized-orange text-center border-customized-orange ">
          3
        </div>
      </div>
      <div className="relative">
        <Iconify
          icon="akar-icons:person"
          style={{
            color: "white",
            fontSize: "30px",
            cursor: "pointer",
          }}
          onClick={() => setDisplayPopOver((prev) => !prev)}
        ></Iconify>
        <PopOver display={displayPopOver} content={<PopOverContent />} />
      </div>
    </div>
  );
};

export default Settings;
