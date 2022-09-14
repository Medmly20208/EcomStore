import React from "react";

import { useAuth } from "../../Context/AuthContext";

export default function NavBarContent() {
  const { signout, currentUser } = useAuth();

  const signoutHanlder = async () => {
    try {
      await signout();
    } catch {
      console.log("Failed to logout");
    }
  };
  const offsetTopMen = document.querySelector("#Men").offsetTop;
  const offsetTopWomen = document.querySelector("#Women").offsetTop;
  const offsetTopKids = document.querySelector("#Kids").offsetTop;
  const offsetTopStores = document.querySelector("#Stores").offsetTop;
  const ScrollHandler = (element) => {
    window.scroll({
      top: element - 200,
      behavior: "smooth",
    });
  };
  return (
    <div className="absolute p-2 top-7 right-0 bg-white w-40 h-38 border rounded-2xl z-50 ">
      <ul className="mt-3">
        <div className="mb-2 pb-2  ">
          <li className="p-2 w-full text-gray-500 cursor-pointer font-MyFont font-bold hover:bg-gray-100 rounded-lg">
            <a href="#Home">Home</a>
          </li>
          {currentUser !== null ? (
            <li className="p-2   text-gray-500 cursor-pointer font-MyFont font-bold hover:bg-gray-100 rounded-lg">
              Profile
            </li>
          ) : (
            <></>
          )}

          <li className="p-2 w-full text-gray-500 cursor-pointer font-MyFont font-bold hover:bg-gray-100 rounded-lg">
            <a onClick={() => ScrollHandler(offsetTopWomen)}>Women</a>
          </li>
          <li className="p-2 w-full text-gray-500 cursor-pointer font-MyFont font-bold hover:bg-gray-100 rounded-lg">
            <a onClick={() => ScrollHandler(offsetTopMen)}>Men</a>
          </li>
          <li className="p-2 w-full text-gray-500 cursor-pointer font-MyFont font-bold hover:bg-gray-100 rounded-lg">
            <a onClick={() => ScrollHandler(offsetTopKids)}>Kids</a>
          </li>
          <li className="p-2 w-full text-gray-500 cursor-pointer font-MyFont font-bold hover:bg-gray-100 rounded-lg">
            <a onClick={() => ScrollHandler(offsetTopStores)}>Stores</a>
          </li>
        </div>

        {currentUser !== null ? (
          <li
            className="p-2 border-t-2   w-full text-gray-500 cursor-pointer font-MyFont font-bold hover:bg-gray-100 "
            onClick={signoutHanlder}
          >
            Logout
          </li>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}
