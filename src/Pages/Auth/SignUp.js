import React from "react";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="h-full w-full flex flex-col justify-center items-center gap-8">
        <h1 className="w-[90%] md:w-[40%] text-left mb-6 text-3xl font-bold text-[#474554]">
          Sneakers Store
        </h1>

        <div className="flex justify-center items-center border shadow-custom w-[90%]  font-MyFont md:w-[40%] md:h-[80%]">
          <div className="w-[80%] flex flex-col h-full ">
            <form className="flex flex-col justify-evenly h-full">
              <h1 className="font-bold text-3xl text-[#383838]">
                Create an account
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
              <div className="flex flex-col justify-between gap-10">
                <div className="flex flex-col justify-between">
                  <label
                    htmlFor="password"
                    className="font-bold text-1xl text-[rgb(26,31,54)] "
                  >
                    Password:
                  </label>

                  <input
                    id="password"
                    type={"password"}
                    className="w-full h-[40px] p-4 outline-cyan-700 border border-black"
                  />
                </div>

                <div className="flex  flex-col justify-between ">
                  <label
                    htmlFor="ConfirmPassword"
                    className="font-bold text-1xl text-[rgb(26,31,54)] "
                  >
                    Password Confirmation:
                  </label>

                  <input
                    id="ConfirmPassword"
                    type={"password"}
                    className="w-full h-[40px] p-4 outline-cyan-700 border border-black"
                  />
                </div>
              </div>

              <div>
                <button className="w-full text-center bg-[#474554] text-white p-3 font-bold">
                  Create an Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
