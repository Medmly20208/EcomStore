import React from "react";

//components
import Iconify from "../../Components/Iconify";

const Footer = () => {
  return (
    <footer className="bg-[#ececec] p-4">
      <div className="flex gap-2 justify-center items-center">
        Built with 💖
        <div>
          <Iconify icon={"ant-design:copyright-circle-outlined"} />
        </div>
        Mohamed Moulay
      </div>
    </footer>
  );
};

export default Footer;
