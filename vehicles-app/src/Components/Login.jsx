import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="md:flex justify-center ">
      <div className="text-center m-3 md:px-8 md:w-[430px]">
        <div className=" md:border">
          <h1 className="text-4xl py-8 font-head">Royal Enfiled</h1>

          <form action="" className="space-y-2 md:flex flex-col items-center">
            <input
              type="text"
              className="border border-gray-400 outline-none bg-[#FAFAFA] p-2 placeholder-slate-500 text-xs w-60 md:w-72 rounded-sm"
              placeholder="Phone number, username, or email"
            />
            <input
              type="text"
              className="border border-gray-400 outline-none bg-[#FAFAFA] p-2 placeholder-slate-500 text-xs w-60 md:w-72 rounded-sm"
              placeholder="Password"
            />
            <div className="py-3">
              <button className="bg-sky-400 w-60 md:w-72 text-white font-semibold py-1 rounded-md">
                Log in
              </button>
            </div>
          </form>

          <div className="flex justify-center items-center text-gray-600 py-3">
            <hr className="w-24 mr-3 md:w-28 md:mr-5" />
            <h1 className="text-sm font-semibold">OR</h1>
            <hr className="w-24 ml-3 md:w-28 md:ml-5" />
          </div>

          <div className="flex justify-center items-center my-5">
            <a
              href="https://www.facebook.com/login/"
              className="flex justify-center items-center gap-1"
            >
              <IoLogoFacebook size={22} className="text-[#385185]" />{" "}
              <span className="font-semibold text-[#385185] text-sm">
                Log in with Facebook
              </span>
            </a>
          </div>

          <p className="md:my-3">
            <Link to="/password/reset" className="text-xs text-gray-500">
              Forgot password?
            </Link>
          </p>
        </div>

        <div className="md:border mt-3 py-4">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#0095F6]">
              Sign up
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
