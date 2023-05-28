"use client";

import Image from "next/image";

import Logo from "@assets/images/whole.svg";

import SignUp from "./SignUp";
import SignIn from "./LogIn";
import user from "@data/user";


import { useEffect, useState } from "react";


export default function Navbar() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [username, setUserName] = useState("");

  const [log, setLog] = useState(false);

  useEffect(() => {
    if (user[0]) {
      setUserName(user[0].firstName +" " + user[0].lastName);
      console.log(log)
    }
  }, [log, user]);

  return (
    <nav className="flex bg-white h-20">
      <div className="hidden md:flex flex-row align-center items-center justify-around w-full">
        <div>
          <Image src={Logo} alt="LOGO" />
        </div>
        <div>
          <input
            type="search"
            placeholder="Search for your favorite group in ATG"
            className="bg-slate-200 px-5 py-4 rounded-full w-48 lg:w-[400px] font-semibold"
          />
        </div>
        <div>
          {username ? (
            <div className="flex align-center items-center">
              <span className="h-12 w-12 text-xl flex justify-center align-center items-center text-white bg-red-500 rounded-full text-center font-semibold my-auto">
                {username[0]}
              </span>&nbsp;&nbsp;
              {username}
            </div>
          ) : (
            <button
              onClick={() => {
                setShowSignUp(true);
              }}
            >
              Create Account.
              <span className="hidden lg:inline font-bold text-blue-700">
                It's free!
              </span>
              &#x25BC;
            </button>
          )}
          {showSignUp && (
            <SignUp
              onClose={() => setShowSignUp(false)}
              showSignInModal={() => setShowSignIn(true)}
              logState={setLog}
            ></SignUp>
          )}
          {showSignIn && (
            <SignIn
              onClose={() => setShowSignIn(false)}
              showSignUpModal={() => setShowSignUp(true)}
              logState={setLog}
            ></SignIn>
          )}
        </div>
      </div>
      <div className="flex flex-row-reverse items-center w-full px-10 text-2xl md:hidden ">
        <button
          className="text-slate-600 px-3"
          onClick={() => setShowSignUp(true)}
        >
          &#x25BC;
        </button>
        <button className="text-slate-600 px-3">&#x25CF;</button>
        <button className="text-slate-600 px-3">&#x25A0;</button>
        {showSignUp && (
          <SignUp
            onClose={() => setShowSignUp(false)}
            showSignInModal={() => setShowSignIn(true)}
            logState={setLog}
          ></SignUp>
        )}
        {showSignIn && (
          <SignIn
            onClose={() => setShowSignIn(false)}
            showSignUpModal={() => setShowSignUp(true)}
            logState={setLog}
          ></SignIn>
        )}
      </div>
    </nav>
  );
}
