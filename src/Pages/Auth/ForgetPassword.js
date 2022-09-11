import React, { useState, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../Context/AuthContext";

//components
import Iconify from "../../Components/Iconify";

const Login = () => {
  const { resetPassword } = useAuth();
  const emailRef = useRef();

  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const ForegtPasswordHandler = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      setError("");
      await resetPassword(emailRef.current.value).then(() =>
        setSuccessMessage("checkout your inbox")
      );
    } catch (err) {
      setError(err.message.split("/")[1].slice(0, -2));
    }
    setIsLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="h-full w-full flex flex-col justify-center items-center gap-8">
        <div className="flex justify-center items-center border shadow-custom w-[90%] h-[70%] font-MyFont lg:w-[40%] md:h-[80%]">
          <div className="w-[80%] flex flex-col h-full ">
            <form
              className="flex flex-col justify-center gap-8 h-full"
              onSubmit={ForegtPasswordHandler}
            >
              <h1 className="font-bold text-3xl text-[#383838]">
                Password Reset
              </h1>
              {error !== "" ? (
                <div className="w-full p-4 bg-red-300 text-red-900">
                  {error}
                </div>
              ) : (
                <></>
              )}
              {successMessage !== "" ? (
                <div className="w-full p-4 bg-green-300 text-green-900">
                  {successMessage}
                </div>
              ) : (
                <></>
              )}
              <p className="font-bold">
                Enter the email address associated with your account and we'll
                send you a link to reset your password.
              </p>
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
                  ref={emailRef}
                />
              </div>

              <div>
                <button
                  className="w-full text-center bg-[#474554] text-white p-3 font-bold"
                  disabled={isloading}
                >
                  {isloading ? (
                    <div className="flex justify-center items-center">
                      <Iconify
                        icon={"eos-icons:loading"}
                        style={{ fontSize: "25px" }}
                      />
                    </div>
                  ) : (
                    "Send Email"
                  )}
                </button>
              </div>
              <p>
                <span className="ml-4 text-[#009298] h-6 font-bold hover:text-[#06575a]">
                  <Link to={"/LogIn"}>Return To Sign In ?</Link>
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
