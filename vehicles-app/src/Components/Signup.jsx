import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="md:flex justify-center ">
      <div className="text-center m-3 md:px-8 md:w-[430px]">
        <div className=" md:border">
          <h1 className="text-4xl pt-8 pb-3 font-head">Royal Enfiled</h1>
          <p className="text-lg px-6 mb-4 font-semibold text-gray-600">
            Sign up to see awesome super Bikes and Cars.
          </p>

          <form action="" className="space-y-2 md:flex flex-col items-center">
            <input
              type="text"
              className="border border-gray-400 outline-none bg-[#FAFAFA] p-2 placeholder-slate-500 text-xs w-60 md:w-72 rounded-sm"
              placeholder="Mobile Number or Email"
            />
            <input
              type="password"
              className="border border-gray-400 outline-none bg-[#FAFAFA] p-2 placeholder-slate-500 text-xs w-60 md:w-72 rounded-sm"
              placeholder="Password"
            />
            <input
              type="text"
              className="border border-gray-400 outline-none bg-[#FAFAFA] p-2 placeholder-slate-500 text-xs w-60 md:w-72 rounded-sm"
              placeholder="Full Name"
            />
            <input
              type="text"
              className="border border-gray-400 outline-none bg-[#FAFAFA] p-2 placeholder-slate-500 text-xs w-60 md:w-72 rounded-sm"
              placeholder="Username"
            />

            <p className="text-xs px-8 py-2">
              People who use our service may have uploaded your contact
              information to instagram. <a href="#" className="text-[#00376B]">Learn More</a>
            </p>
            <p className="text-xs px-8 py-1">
              By signing up, you agree to our <span className="text-[#00376B]">Terms, Privacy Policy</span>
              and <span className="text-[#00376B]">Cookies Policy.</span>{" "}
            </p>

            <div className="py-3">
              <button className="bg-sky-400 w-60 md:w-72 text-white font-semibold py-1 rounded-md">
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div className="md:border mt-3 py-4">
            <p>Have an account? <Link to="/" className="text-[#0095F6]">Log in</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
