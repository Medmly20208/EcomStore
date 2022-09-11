import React from "react";

import { useNavigate } from "react-router-dom";

//auth context
import { useAuth } from "../../Context/AuthContext";

const ProductItem = (props) => {
  let navigate = useNavigate();
  const { currentUser } = useAuth();

  const BuyingProductHandler = () => {
    navigate(`/Products/${props.Id}`);
  };

  const CartHandler = () => {
    if (currentUser == undefined) {
      return navigate("/Login");
    }
    return navigate(`/Products/${props.Id}`);
  };
  return (
    <div className="w-72 sm:w-[90%]   h-[347px] bg-[#ececec] p-4 border-2 rounded-3xl cursor-pointer">
      <div className="grid place-items-center">
        <img
          src={props.Src}
          alt={"sneaker"}
          className="w-full border-2 rounded-3xl h-48"
        />
      </div>

      <div className="flex flex-col gap-2 justify-between">
        <h1 className="mt-2 font-semibold">{props.Name}</h1>
        <h2 className=" font-MyFont ">{props.Details}</h2>
        <div className="flex justify-between">
          <div className="text-gray-600 font-bold">{props.Price}$</div>

          <button
            onClick={CartHandler}
            className="bg-[#383838] pl-4 pr-4 border rounded-md transition-all duration-700 text-white font-MyFont hover:bg-[#1f1f1f]"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
