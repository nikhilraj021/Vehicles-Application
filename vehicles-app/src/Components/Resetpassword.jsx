import React from "react";
import { LuLock } from "react-icons/lu";
import { Link } from "react-router-dom";

const Resetpassword = () => {
  return (
    <div>
      <h1 className="font-head p-4 text-xl border-b border-gray-300">
        Royal Enfield
      </h1>
      <div className="flex justify-center">
        <div className="md:border border-gray-600 md:my-5 md:w-[430px] flex flex-col items-center text-center gap-2">
          <div className="border-2 border-black rounded-full p-5 my-5">
            <LuLock size={50} className="" />
          </div>
          <h1 className="font-semibold text-gray-700">Trouble logging in?</h1>
          <p className=" text-sm px-10 md:px-14 ">
            Enter your email, phone, or username and we'll send you a link to
            get back into your account.
          </p>

          <form action="" className="my-3 space-y-3">
            <input
              type="text"
              className="border border-gray-400 outline-none bg-[#FAFAFA] p-2 placeholder-slate-500 text-sm w-60 md:w-72 rounded-sm"
              placeholder="Email, Phone, or Username"
            />
            <button className="font-semibold bg-blue-300 w-60 md:w-72 p-2 rounded-xl text-white">
              Send login link
            </button>
          </form>
          <p className="text-[#00673B] text-xs">Can't reset your password?</p>
          <div className="flex justify-center items-center text-gray-600 py-3">
            <hr className="w-24 mr-3 md:w-28 md:mr-5" />
            <h1 className="text-sm font-semibold">OR</h1>
            <hr className="w-24 ml-3 md:w-28 md:ml-5" />
          </div>
          <Link to="/signup" className="mb-5">Create new account</Link>

          <Link to="/" className="font-semibold max-md:w-72 p-2 max-md:border border-t md:w-full border-gray-500 max-md:rounded-xl hover:bg-gray-600 hover:text-white ">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resetpassword;
