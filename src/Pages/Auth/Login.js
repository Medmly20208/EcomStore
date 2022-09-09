import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="h-full w-full flex flex-col justify-center items-center gap-8">
        <h1 className="w-[35%] text-left mb-8 text-3xl font-bold text-[#474554]">
          Sneakers Store
        </h1>

        <div className="flex justify-center items-center border shadow-custom w-[35%] h-[60%] font-MyFont">
          <div className="w-[90%] flex flex-col ">
            <h1 className="font-bold text-3xl text-[#383838]">
              Connect To Your Account
            </h1>
            <form>
              <div>
                <label
                  htmlFor="email"
                  className="font-bold text-1xl text-[rgb(26,31,54)] mb-6"
                >
                  Email:
                </label>
                <br />
                <input
                  id="email"
                  type={"text"}
                  className="w-full h-[40px] p-4"
                />
              </div>
              <div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <br />
                  <button>Forget Password?</button>
                </div>
                <input id="password" type={"password"} className="w-full" />
              </div>
              <div>
                <label htmlFor="RememberMe">Remember Me</label>
                <input id="RememberMe" type={"checkbox"}></input>
              </div>
              <div>
                <button>Connect</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
