import React, { useState, useEffect } from "react";

import Iconify from "../../Components/Iconify";
import PopOver from "../../Components/PopOver";
import PopOverContent from "./PopOverContent";
import NavBar from "./NavBar";
import CartDetails from "./CartDetails";

//auth context
import { useAuth } from "../../Context/AuthContext";
import { async } from "@firebase/util";

const Settings = () => {
  const { currentUser, fetchCart, CartProducts } = useAuth();
  const [Products, setProducts] = useState([]);
  const [displayCartDetails, setDisplayCartDetails] = useState(false);
  const [displayPopOver, setDisplayPopOver] = useState(false);

  const fetchProducts = async () => {
    fetchCart();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {displayCartDetails && (
        <CartDetails
          CartProducts={CartProducts}
          onClose={() => setDisplayCartDetails(false)}
        />
      )}
      <div className="flex flex-row justify-center align-center gap-1">
        {currentUser !== null ? (
          <div
            className="flex mr-6 cursor-pointer"
            onClick={() => setDisplayCartDetails((prev) => !prev)}
          >
            <Iconify
              icon="ant-design:shopping-cart-outlined"
              style={{ color: "white", fontSize: "30px" }}
            ></Iconify>
            <div className="text-white w-7 h-7 border rounded-full bg-customized-orange text-center border-customized-orange ">
              {CartProducts.length}
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="flex sm:hidden">
          <Iconify
            icon="ant-design:search-outlined"
            style={{ color: "white", fontSize: "30px", cursor: "pointer" }}
          ></Iconify>

          {currentUser !== null ? (
            <>
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
                <PopOver
                  display={displayPopOver}
                  content={<PopOverContent />}
                  onClose={() => setDisplayPopOver(false)}
                />
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <NavBar />
      </div>
    </>
  );
};

export default Settings;
