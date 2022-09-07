import React from "react";

const StoreItem = (props) => {
  return (
    <div className="flex justify-center items-center  w-[300px] h-80 sm:w-[90%]">
      <img src={props.Image} alt="clothes store" className="w-full h-full" />
      <div className="absolute bg-black text-white w-16 text-center text-bold">
        {props.title}
      </div>
    </div>
  );
};

export default StoreItem;
