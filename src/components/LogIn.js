"use client";

import Logo from "@assets/images/Group 3.jpg";
import Google from "@assets/images/google.jpg";
import Image from "next/image";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

export default function Modal({ onClose, showSignUpModal }) {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");
    onClose();
  };
  const changeModal = (e) => {
    e.preventDefault();
    onClose();
    showSignUpModal();
  };
  return (
    <div
      style={{ backgroundColor: "#fff" }}
      className="fixed bottom-0 left-0 right-0 md:top-[20%] md:left-[20%] md:right-[20%] lg:left-[25%] lg:right-[25%] md:bottom-[inherit] z-[99] rounded-md shadow-lg shadow-slate-100"
    >
      <div className="text-md text-green-800 bg-green-700/25 py-4 px-1 text-center">
        Let's learn and inspire each other with our passion for computer
        engineering. Let's SignIn 🤟
      </div>

      <div className="flex flex-col md:flex-row align-center justify-between px-8 py-8 text-left">
        <div className="flex flex-col justify-around align-center">
          <h1 className="text-3xl font-bold py-4">Sign In</h1>
          <div className="flex flex-col">
            <input className="input bg-green-200/50" placeholder="Email" />
            <input className="input bg-green-200/50" placeholder="Password" />

            <button className="my-2 py-2 bg-blue-500 text-white font-bold rounded-full">
              Sign In
            </button>
            <button className="py-4 bg-slate-200 my-2 border border-gray-300">
              <FacebookOutlinedIcon sx={{ color: "#1778F2" }} /> Sign up with
              Facebook
            </button>
            <button className="flex items-center text-center align-center justify-center py-4 bg-slate-200 my-2 border border-gray-300">
              <Image src={Google} /> &nbsp; Sign up with Google
            </button>
          </div>
        </div>
        <div className="text-center md:text-right flex flex-col justify-between">
          <span className="py-10">
            Don't have an account. &nbsp;
            <a
              className="text-blue-600 font-semibold"
              onClick={(e) => changeModal(e)}
            >
              SignUp?
            </a>
          </span>
          <Image className="hidden md:block" src={Logo} alt="LOGO" />
        </div>
      </div>
    </div>
  );
}
