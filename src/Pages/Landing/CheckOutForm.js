import React, { useState } from "react";

//Images
import PayPal from "../../Assets/Images/PayPal.png";
import Visa from "../../Assets/Images/Visa.png";
import MasterCard from "../../Assets/Images/MasterCard.jpg";

//react router
import { useNavigate } from "react-router-dom";

const CheckOutForm = (props) => {
  const [numberOfItems, setNumberOfItems] = useState(1);
  const navigate = useNavigate();

  const FormSubmitHandler = (event) => {
    event.preventDefault();
    alert("order submitted succefully ");
    setTimeout(() => {
      navigate("/"); //navigate to home page
    }, 1000);
  };
  return (
    <div className="w-[90%] border border-gray-500 rounded-2xl flex flex-col justify-center items-center p-8 font-MyFont ">
      <h1 className="font-[900] m-8 text-[39px] text-gray-400 ">
        Payment Details
      </h1>
      <form onSubmit={FormSubmitHandler}>
        <div className="flex gap-12 flex-wrap">
          <div className="flex gap-2">
            <input id="Paypal" name="PaymentMethod" type={"radio"}></input>
            <label htmlFor="PayPal">
              <img
                src={PayPal}
                alt="PayPal"
                className="border border-gray-300 w-28 h-24 "
              />
            </label>
          </div>
          <div className="flex gap-2">
            <input id="Visa" name="PaymentMethod" type={"radio"}></input>
            <label htmlFor="Visa">
              <img
                src={Visa}
                alt="PayPal"
                className="border border-gray-300 w-28 h-24 "
              />
            </label>
          </div>
          <div className="flex gap-2">
            <input id="MasterCard" name="PaymentMethod" type={"radio"}></input>
            <label htmlFor="MasterCard">
              <img
                src={MasterCard}
                alt="PayPal"
                className="border border-gray-300 w-28 h-24 "
              />
            </label>
          </div>
        </div>
        <div className="mt-4 mb-4 flex flex-col">
          <label htmlFor="card" className="font-bold text-gray-700">
            Card Number*
          </label>
          <input
            required
            id="card"
            type={"text"}
            placeholder="xxxx-xxxx-xxxx-xxxx"
            className="border border-gray-300  w-full p-2 rounded-xl lg:w-[50%]"
          ></input>
        </div>
        <div className="mt-4 mb-4 flex flex-col">
          <label htmlFor="cardHolder" className="font-bold text-gray-700">
            Card Holder*
          </label>
          <input
            required
            id="cardHolder"
            type={"text"}
            placeholder="Full Name"
            className="border border-gray-300  w-full p-2 rounded-xl lg:w-[50%]"
          ></input>
        </div>
        <div className="mt-4 mb-4 flex flex-col">
          <label htmlFor="Adress" className="font-bold text-gray-700">
            Adress*
          </label>
          <input
            required
            id="Adress"
            type={"text"}
            placeholder="street xxxxx city xxxx"
            className="border border-gray-300  w-full  p-2 rounded-xl lg:w-[50%] "
          ></input>
        </div>
        <div>
          <fieldset>
            <legend className="font-bold text-gray-700">Choose Color</legend>
            <div className="flex gap-4 mt-4 mb-4">
              {props.productDetails.productColor.map((color, index) => {
                return (
                  <div key={index} className="flex justify-center gap-2">
                    <input
                      type="radio"
                      id={color}
                      name="selectedColor"
                      value={color}
                    />
                    <label htmlFor={color}>{color}</label>
                  </div>
                );
              })}
            </div>
          </fieldset>
          <fieldset>
            <legend className="font-bold text-gray-700">Choose Size</legend>
            <div className="flex gap-4 mt-4 mb-4">
              {props.productDetails.productSize.map((Size, index) => {
                return (
                  <div key={index} className="flex justify-center gap-2">
                    <input
                      type="radio"
                      id={Size}
                      name="selectedSize"
                      value={Size}
                    />
                    <label htmlFor={Size}>{Size}</label>
                  </div>
                );
              })}
            </div>
          </fieldset>
        </div>
        <div className="flex justify-between flex-wrap gap-4">
          <div>
            <h1 className="font-bold text-gray-700 mb-3">Amount</h1>
            <div className="h-fit bg-[#00E676] flex justify-center items-center gap-2 border rounded-lg p-2">
              <div
                className=" text-[#00677E] w-6 h-4 flex justify-center items-center font-bold cursor-pointer"
                onClick={() =>
                  setNumberOfItems((prev) => (prev === 0 ? 0 : prev - 1))
                }
              >
                -
              </div>
              <div className="w-8 text-center text-[#2F4858] font-bold">
                {numberOfItems}
              </div>

              <div
                onClick={() => setNumberOfItems((prev) => prev + 1)}
                className="text-[#00677E] w-6 h-4 flex justify-center items-center font-bold cursor-pointer"
              >
                +
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between bg-gray-200 mb-4 p-2 font-bold text-gray-600">
              <h1>Total Amount</h1>
              <h1>{props.productDetails.productPrice * numberOfItems}$</h1>
            </div>
            <button className="bg-[#00e676] w-full text-white pt-4 pb-4 pl-8 pr-8 hover:bg-[#1b5e20] font-bold border rounded-xl">
              Confirm Payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckOutForm;
