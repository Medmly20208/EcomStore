import React from "react";
import Iconify from "../../Components/Iconify";

//auth context
import { useAuth } from "../../Context/AuthContext";

import { useNavigate } from "react-router-dom";

const CartDetails = (props) => {
  const { deleteFromCart, updateCartItem } = useAuth();
  const navigate = useNavigate();
  let Total = 0;
  const DeletHandler = (ProductName) => {
    deleteFromCart(ProductName);
  };
  
  


  return (
    <>
      <div
        className="fixed left-0 bottom-0 w-screen h-screen opacity-90 bg-black z-[200]"
        onClick={props.onClose}
      ></div>
      <div className="fixed max-h-[80vh] left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] bg-white w-[400px] h-fit z-[300] overflow-y-scroll ">
        <h1 className="p-[20px] font-bold text-[20px]">Shopping Cart</h1>
        {props.CartProducts.map((Product, index) => {
          Total += Product.productPrice * Product.amount;

          return (
            <div
              key={index}
              className="relative flex justify-between gap-4 items-center p-6 bg-[#ececec] m-2 rounded-lg flex-wrap"
            >
              <div className="flex flex-wrap items-center gap-4">
                <div>
                  <img
                    src={Product.productImage}
                    alt="sneaker"
                    className="w-[70px] h-[70px] border rounded-full"
                  />
                </div>
                <div>
                  <h1 className="text-[18px]">{Product.productName}</h1>
                </div>
              </div>
              <div>
                <div className="flex justify-between  gap-2 w-24 border border-black rounded-3xl p-2">
                  <button
                    onClick={() => updateCartItem("-", Product.productName)}
                  >
                    -
                  </button>
                  <h2>{Product.amount}</h2>
                  <button
                    onClick={() => updateCartItem("+", Product.productName)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
              Total: ${" " + (Product.amount * Product.productPrice).toFixed(2)}
              </div>
              <div
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => DeletHandler(Product.productName)}
              >
                <Iconify icon={"akar-icons:cross"} />
              </div>
            </div>
          );
        })}
        {props.CartProducts.length !== 0 && (
          <div className="sticky bottom-0 right-0 w-full text-right bg-[#8c8f95] text-white p-4 font-bold flex justify-between">
            <button
              onClick={() => navigate("/CheckoutForm")}
              className="text-white bg-[#2A272A] font-MyFont pl-8 pr-8 border rounded-lg"
            >
              Buy
            </button>
            <h1>Cart Total : ${Total.toFixed(2)}</h1>
          </div>
        )}
        {props.CartProducts.length === 0 && (
          <div>
            <h1 className="text-center m-4">No Items in Cart</h1>
          </div>
        )}
      </div>
      ;
    </>
  );
};

export default CartDetails;
