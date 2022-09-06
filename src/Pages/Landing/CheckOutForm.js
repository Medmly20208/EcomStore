import React, { useState } from "react";

const CheckOutForm = (props) => {
  // console.log(props.productDetails);
  const [numberOfItems, setNumberOfItems] = useState(1);

  const FormSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={FormSubmitHandler}>
        <div>
          <label htmlFor="card">Card Number</label>
          <input id="card" type={"text"}></input>
        </div>
        <div>
          <label htmlFor="cardHolder">Card Holder</label>
          <input id="cardHolder" type={"text"}></input>
        </div>
        <div>
          <label htmlFor="Adress">Adress</label>
          <input id="Adress" type={"text"}></input>
        </div>
        <div>
          <fieldset>
            <legend>Choose Color</legend>
            {props.productDetails.productColor.map((color, index) => {
              return (
                <div key={index}>
                  <input
                    type="radio"
                    id={color}
                    name="selectedColor"
                    value={color}
                  />
                  {color}
                </div>
              );
            })}
          </fieldset>
          <fieldset>
            <legend>Choose Size</legend>
            {props.productDetails.productSize.map((Size, index) => {
              return (
                <div key={index}>
                  <input
                    type="radio"
                    id={Size}
                    name="selectedSize"
                    value={Size}
                  />
                  {Size}
                </div>
              );
            })}
          </fieldset>
        </div>
        <div>
          <button onClick={() => setNumberOfItems((prev) => prev + 1)}>
            +
          </button>
          <div>{numberOfItems}</div>
          <button onClick={() => setNumberOfItems((prev) => prev - 1)}>
            -
          </button>
        </div>
        <button>Buy</button>
      </form>
    </div>
  );
};

export default CheckOutForm;
