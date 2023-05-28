"use client";
import Post from "@components/Posts";
import { useEffect, useState } from "react";

import user from "@data/user";

export default function Home() {
  const [filter, setFilter] = useState("All");

  const [log, setLog] = useState(false);

  useEffect(() => {
    if (user[0]) {
      setLog(true);
    }
  })

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
    <div className="flex flex-col p-0">
      <div
        className="flex flex-col-reverse justify-between home my-0 bg-cover"
        id="home"
      >
        <div className="mb-10 ml-10 md:mb-16 md:ml-20 ">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold overflow-y-hidden">
            Computer Engineering
          </h1>
          <p className="text-slate-400 text-md md:text-xl">
            149,243 Computer Engineers follow this
          </p>
        </div>
        <div className="flex flex-row justify-between mt-4 md:hidden mx-8 ml-2 md:mt-16 md:ml-16">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAytJREFUaEO1WUuSnDAMtatm2VTNETJLJjlEcpPhZD1HmVOEbY4wVU2vnQIM+CNZTzaw6gLZ0nuSngVtDXlZY4yjHwV3aauWtaLLxSD0MP9WXNZY4zw0PtDliX+cWaXeE54w+FvIczylq+g9XMi5DQEreFKYMgDigHSsxN5b1hbLO8iwEm9tbyjcKEytzBBfHkijyyIRN4scT55hf4fruvjxsVxoYoFFoZfhHAAZgPe60LBMlt6xIs+hpCJNqQ0mUKFTBVobh6Lgkh5QkKkKauxuv/vH9LUsEtoL2bgkJcj63ebYiNjS3xq77sM5d3fOff56PgdZeFUhBMbSSUzsK4nqFvy2dAbx8/kcgkSESdGqbGZfHiWUlbkGb+7p+WCN+dNP0xfX0C1l3AQgxJcyvz2z1g794/FZUyRFYHWjRDzKbkHxwZuhf0x78C1MhwSkeimSU3J8BfNrQFK3eSta/TGuuOCNtcP7FWXDiAoBVgZwDfO8NHNlAjRx/lKiDl7mo7qMmVGC3+9v130Y5+5p2mi1wY5gBB93gJYzkOyMMd/2GqkDs9IIXWzDEopBB4Gpyvs0+ZgQKCCAo2xirJkL5OQR6DoAQLxiXyXK7AOOFOLSACD2kvrcQGCJPUAhSQltGgDITGJNrJgAYTZ4Q7iJ87knPsOtneeeuqFNnqm5SQhs4nT53NTzC0soQAsTlZNnixioD7LN2V5OiXdsfMZqB7GKSghZEGaDlldrsnJCNlYoVVoRpLjHFc5/gzulsfcIOK8nNnHWcNaY8eZ7oqqc+AaVdXFuu/2vDCTPfkvC9MhEcp5UNjYS/KIbqOFmV1IMtpxeXt767+9/y1oFT8SYRRWAToXpTY8JdOxu65eJLdDS2xkHRgESVyGFSuxjx8XlU1VCaMmNr68/5rKRpyKM7lKy0Jgq7CpfbjBMezXrX+oVDipQ80sIFVh7oCQt7PcZQb/9nudgTaQ5kP6gic9xxX+Q4nhC/F55ElfWCB0SAiaffLAQ9Hsj5xDmm7VaBsdkUJNvNDolm44Y5zAFY0YJ7IgMrbjfJ6AtbnHu36xVw46gZgIDTAau5u28/f8DOsqoREtGIJAAAAAASUVORK5CYII=" />
          <button className="px-3 py-2 border-2 text-white font-bold border-slate-200 rounded-md">
            Join Group
          </button>
        </div>
      </div>
      <div className="mx-0 md:mx-8 lg:mx-32 xl:mx-48 mt-6">
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
              {log ? (
                <button className="mx-4 flex flex-row bg-lime-600 p-2 text-white rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#fff"
                  >
                    <path d="M4 6h2v12H4zm10 5H8v2h6v5l6-6-6-6z"></path>
                  </svg>
                  Leave Group
                </button>
              ) : (
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
              )}
            </div>
          </div>
        </div>

        {/* Join Group Button for mobile screen  */}

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
