import React from "react";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="h-full w-full flex flex-col justify-center items-center gap-8">
        <h1 className="w-[90%] md:w-[40%] text-left mb-6 text-3xl font-bold text-[#474554]">
          Sneakers Store
        </h1>

        <div className="flex justify-center items-center border shadow-custom w-[90%] h-[70%] font-MyFont md:w-[40%] md:h-[80%]">
          <div className="w-[80%] flex flex-col h-full ">
            <form className="flex flex-col justify-evenly h-full">
              <h1 className="font-bold text-3xl text-[#383838]">
                Connect To Your Account
              </h1>
              <div className="flex flex-col gap-5">
                <label
                  htmlFor="email"
                  className="font-bold text-1xl text-[rgb(26,31,54)] "
                >
                  Email:
                </label>

                <input
                  id="email"
                  type={"text"}
                  className="w-full h-[40px] p-4  outline-cyan-700 border border-black"
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex justify-between">
                  <label
                    htmlFor="password"
                    className="font-bold text-1xl text-[rgb(26,31,54)] "
                  >
                    Password:
                  </label>

                  <button className="text-[#383838] font-bold">
                    Forget Password?
                  </button>
                </div>
                <input
                  id="password"
                  type={"password"}
                  className="w-full h-[40px] p-4 outline-cyan-700 border border-black"
                />
                <div className="flex items-center">
                  <input
                    id="RememberMe"
                    type={"checkbox"}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label htmlFor="RememberMe" className="ml-2 font-bold">
                    Remember Me
                  </label>
                </div>
              </div>

              <div>
                <button className="w-full text-center bg-[#474554] text-white p-3 font-bold">
                  Connect
                </button>
              </div>
              <p>
                Don't have an account?
                <span className="ml-4 text-[#009298] h-6 font-bold hover:text-[#06575a]">
                  <Link to={"/Register"}>Sign up</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
