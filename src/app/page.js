"use client";
import Post from "@components/Posts";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState("All");
  const giveFilter = () => {
    const dropdown = document.getElementById("dropdown-content");
    dropdown.classList.toggle("show");
    dropdown.classList.toggle("hide");
  };

  const changeFilter = (value) => {
    const dropdown = document.getElementById("dropdown-content");
    dropdown.classList.remove("show");
    dropdown.classList.add("hide");
    setFilter(value);
  };

  return (
    <div className="flex min-h-screen flex-col p-0">
      <div
        className="flex flex-col items-center justify-center w-full bg-center bg-no-repeat home my-0"
        id="home"
      ></div>
      <div className="mx-0 lg:mx-32 xl:mx-48 mt-6">
        <div className="block md:hidden flex flex-row justify-between px-8">
          <h1 className="font-bold">Posts(368)</h1>
          <div id="dropdown" className="flex flex-row">
            <button
              id="dropBtn"
              className="bg-slate-200 px-3 py-2 rounded-md"
              onClick={giveFilter}
            >
              Filter: {filter} &nbsp; &#x25BC;
            </button>
            <div id="dropdown-content" className="hide">
              <a href="#" value={"All"} onClick={() => changeFilter("All")}>
                All
              </a>
              <a
                href="#"
                value={"Article"}
                onClick={() => changeFilter("Article")}
              >
                Article
              </a>
              <a href="#" onClick={() => changeFilter("Events")}>
                Events
              </a>
              <a href="#" onClick={() => changeFilter("Education")}>
                Education
              </a>
              <a href="#" onClick={() => changeFilter("Job")}>
                Job
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:block h-20 border-b-2 border-grey-200 items-center flex flex-row">
          <div className=" flex w-full justify-between">
            <div className="flex flex-row">
              <button className="px-2 md:px-4">All Posts(32)</button>
              <button className="px-2 md:px-4">Article</button>
              <button className="px-2 md:px-4">Events</button>
              <button className="px-2 md:px-4">Education</button>
              <button className="px-2 md:px-4">Job</button>
            </div>

            <div className="flex ml-5 flex-row">
              <button className="mx-4 flex flex-row p-2 bg-slate-200 rounded">
                Write a Post
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="rgba(0, 0, 0, 1)"
                  transform=";msFilter:;"
                >
                  <path d="m11.998 17 7-8h-14z"></path>
                </svg>
              </button>
              <button className="mx-4 flex flex-row bg-blue-600 p-2 text-white rounded">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  transform=";msFilter:;"
                >
                  <path d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z"></path>
                  <path d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm1.5 7H8c-3.309 0-6 2.691-6 6v1h2v-1c0-2.206 1.794-4 4-4h3c2.206 0 4 1.794 4 4v1h2v-1c0-3.309-2.691-6-6-6z"></path>
                </svg>
                Join Group
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <Post />
          <div className="hidden md:inline lg:mt-10">
            <form className="nosubmit flex flex-col items-center justify-center align-center md:ml-16 lg:ml-32 xl:ml-60">
              <input
                className="nosubmit"
                type="location"
                placeholder="Search..."
              />
              <span className="mt-10 inline">
                &#9432; Your location will help use serve better and extend a
                personalised experience.
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
