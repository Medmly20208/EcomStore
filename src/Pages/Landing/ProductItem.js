import React from "react";

import { useNavigate } from "react-router-dom";

const ProductItem = (props) => {
  let navigate = useNavigate();

  const BuyingProductHandler = () => {
    navigate(`/Products/${props.Id}`);
  };

  return (
    <div
      className="w-72 sm:w-[90%]   h-[347px] bg-[#ececec] p-4 border-2 rounded-3xl cursor-pointer"
      onClick={BuyingProductHandler}
    >
      <div className="grid place-items-center">
        <img
          src={props.Src}
          alt={"sneaker"}
          className="w-full border-2 rounded-3xl h-48"
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <h1 className="mt-2 font-semibold">{props.Name}</h1>
        <h2 className=" font-MyFont ">{props.Details}</h2>
        <div className="text-gray-600 font-bold">{props.Price}$</div>
      </div>
    </div>
  );
};

export default ProductItem;
