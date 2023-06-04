import React, { useState, useEffect } from "react";

//react slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Compoenents
import Iconify from "../../Components/Iconify";

//firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",

        left: "0px",
        zIndex: 100,
      }}
      onClick={onClick}
    />
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
        right: "0px",
        zIndex: 100,
      }}
      onClick={onClick}
    />
  );
}
const Main = () => {


  return (
    <div id="Home" className="bg-[url('Assets/Images/bg.jpg')] bg-bottom bg-cover ">
     <div className="bg-gradient-to-b from-[rgba(255,0,0,0)] to-[#000000] w-[100vw] max-w-[100%] overflow-hidden flex flex-col justify-center items-center gap-[20px] h-[400px]">
          <div className="text-center text-white">
            <h1 className="text-[25px] font-bold">Kickstreet Sneakers</h1>
            <h2 className="text-[20px] font-normal">Unlock Your Sneaker Obsession!</h2>
          </div>
          <a href="#Men" className="bg-[#474554] flex items-center gap-[5px] text-white border border-[#474554] rounded-md px-[20px] py-[5px]"><p>Shop Now</p> <Iconify icon={"maki:arrow"} className="text-white"></Iconify> </a>
          
        </div>
    </div>
  );
};

export default Main;
