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

  return (
    <div className="absolute p-2 top-7 right-0 bg-white w-40 h-38 border rounded-2xl z-50 ">
      <ul className="mt-3">
        <div className="mb-2 pb-2  ">
          <li className="p-2 w-full text-gray-500 cursor-pointer font-MyFont font-bold hover:bg-gray-100 rounded-lg">
            Home
          </li>
          {currentUser !== null ? (
            <li className="p-2   text-gray-500 cursor-pointer font-MyFont font-bold hover:bg-gray-100 rounded-lg">
              Profile
            </li>
          ) : (
            <></>
          )}

          <li className="p-2  text-gray-500 cursor-pointer font-MyFont font-bold hover:bg-gray-100 rounded-lg">
            Settings
          </li>

          <li className="p-2 w-full text-gray-500 cursor-pointer font-MyFont font-bold hover:bg-gray-100 rounded-lg">
            Search
          </li>
          <li className="p-2 w-full text-gray-500 cursor-pointer font-MyFont font-bold hover:bg-gray-100 rounded-lg">
            Women
          </li>
          <li className="p-2 w-full text-gray-500 cursor-pointer font-MyFont font-bold hover:bg-gray-100 rounded-lg">
            Men
          </li>
          <li className="p-2 w-full text-gray-500 cursor-pointer font-MyFont font-bold hover:bg-gray-100 rounded-lg">
            Kids
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
