import React from "react";

const StoreItem = (props) => {
  return (
    <div className="group flex justify-center items-center  w-[300px] h-80 sm:w-[90%] overflow-hidden cursor-pointer">
      <img
        src={props.Image}
        alt="clothes store"
        className="w-full h-full transition-all duration-700 group-hover:scale-125 "
      />
      <div className="absolute bg-black text-white w-16 text-center text-bold">
        {props.title}
      </div>
    </div>
  );
};

export default StoreItem;
