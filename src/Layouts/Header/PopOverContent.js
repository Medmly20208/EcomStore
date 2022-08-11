import React from "react";

export default function PopOverContent() {
  return (
    <div className="absolute p-2 top-10 right-1 bg-white w-40 h-38 border rounded-2xl">
      <ul className="mt-3">
        <div className="mb-2 pb-2  border-b-2">
          <li className="p-2 w-full text-gray-500 cursor-pointer font-MyFont font-bold hover:bg-gray-100 rounded-lg">
            Home
          </li>
          <li className="p-2   text-gray-500 cursor-pointer font-MyFont font-bold hover:bg-gray-100 rounded-lg">
            Profile
          </li>
          <li className="p-2  text-gray-500 cursor-pointer font-MyFont font-bold hover:bg-gray-100 rounded-lg">
            Settings
          </li>
        </div>
        <li className="p-2   w-full text-gray-500 cursor-pointer font-MyFont font-bold hover:bg-gray-100 rounded-lg">
          Logout
        </li>
      </ul>
    </div>
  );
}
