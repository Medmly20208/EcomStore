import React from "react";

//auth context
import { useAuth } from "../../Context/AuthContext";

export default function PopOverContent() {
  const { signout, currentUser } = useAuth();

  const signoutHanlder = async () => {
    try {
      await signout();
    } catch {
      console.log("Failed to logout");
    }
  };

  return (
    <div className="absolute p-2 top-10 right-1 bg-white h-38 border rounded-2xl z-50 ">
      <ul className="mt-3">
        <div className="mb-2 pb-2  border-b-2">
          <p className="text-gray-500 "> {currentUser?.email}</p>
          <li className="p-2 w-full text-gray-500 cursor-pointer font-MyFont font-bold hover:bg-gray-100 rounded-lg">
            Home
          </li>
        </div>

        <li
          className="p-2   w-full text-gray-500 cursor-pointer font-MyFont font-bold hover:bg-gray-100 rounded-lg"
          onClick={signoutHanlder}
        >
          Logout
        </li>
      </ul>
    </div>
  );
}
