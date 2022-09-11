import { async } from "@firebase/util";
import React, { useRef, useState } from "react";

//link
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

//components
import Iconify from "../../Components/Iconify";

const SignUp = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { signup } = useAuth();

  const SubmitHandler = async (event) => {
    event.preventDefault();

    if (passwordConfirmationRef.current.value !== passwordRef.current.value) {
      return setError("Passwords doesn't match");
    }
    try {
      setIsLoading(true);
      setError("");
      await signup(emailRef.current.value, passwordRef.current.value).then(
        () => {
          navigate("/");
        }
      );
    } catch (err) {
      setError(err.message.split("/")[1].slice(0, -2));
    }
    setIsLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="h-full w-full flex flex-col justify-center items-center gap-8">
        <h1 className="w-[90%] lg:w-[40%] text-left mb-6 text-3xl font-bold text-[#474554]">
          Sneakers Store
        </h1>

        <div className="flex justify-center items-center border shadow-custom w-[90%]  font-MyFont lg:w-[40%] md:h-[80%]">
          <div className="w-[80%] flex flex-col h-full ">
            <form
              className="flex flex-col justify-evenly h-full"
              onSubmit={SubmitHandler}
            >
              <h1 className="font-bold text-3xl text-[#383838]">
                Create an account
              </h1>

              {error !== "" ? (
                <div className="w-full p-4 bg-red-300 text-red-900">
                  {error}
                </div>
              ) : (
                <></>
              )}

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
              <div className=" flex flex-col justify-between gap-10">
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
                    ref={passwordRef}
                  />
                </div>

                <div className="flex flex-col justify-between ">
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
                    ref={passwordConfirmationRef}
                  />
                </div>
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
                    "Create Account"
                  )}
                </button>
              </div>
              <p>
                Already Have an account?
                <span className="ml-4 text-[#009298] h-6 font-bold hover:text-[#06575a]">
                  <Link to={"/LogIn"} replace>
                    Sign In
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
