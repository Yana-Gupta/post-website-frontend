"use client";

import Image from "next/image";

import Logo from "@assets/images/whole.svg";

import SignUp from "./SignUp";
import SignIn from "./LogIn";
import { useState } from "react";
export default function Navbar() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
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
          {showSignUp && (
            <SignUp
              onClose={() => setShowSignUp(false)}
              showSignInModal={() => setShowSignIn(true)}
            ></SignUp>
          )}
          {showSignIn && (
            <SignIn
              onClose={() => setShowSignIn(false)}
              showSignUpModal={() => setShowSignUp(true)}
            ></SignIn>
          )}
        </div>
      </div>
      <div className="flex flex-row-reverse items-center w-full px-10 text-2xl md:hidden ">
        <button className="text-slate-600 px-3" onClick={() => setShowSignUp(true)}>
          &#x25BC;
        </button>
        <button className="text-slate-600 px-3">&#x25CF;</button>
        <button className="text-slate-600 px-3">&#x25A0;</button>
        {showSignUp && (
          <SignUp
            onClose={() => setShowSignUp(false)}
            showSignInModal={() => setShowSignIn(true)}
          ></SignUp>
        )}
        {showSignIn && (
          <SignIn
            onClose={() => setShowSignIn(false)}
            showSignUpModal={() => setShowSignUp(true)}
          ></SignIn>
        )}
      </div>
    </nav>
  );
}
