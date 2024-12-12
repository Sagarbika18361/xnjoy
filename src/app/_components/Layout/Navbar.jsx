"use client";
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Link from "next/link";
import LoginModal from "../Auth/Login";
import { usePathname } from "next/navigation";
function Navbar() {
  const [login, setLogin] = useState(false);
  const [secretKey, setSecretKey] = useState(null);
  const pathname = usePathname();

  // Access sessionStorage only in the browser
  useEffect(() => {
    if (typeof window !== "undefined") {
      setSecretKey(sessionStorage.getItem("secretKey"));
    }
  }, []);

  const handleOpen = () => {
    setLogin(true);
  };

  const handleClose = () => {
    setLogin(false);
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("secretKey");
    }
    setSecretKey(null);
    window.location.reload();
  };

  return (
    <>
      <div className="navbar z-30 grid grid-cols-6 gap-4 sm:gap-12 fixed top-0 w-[100%] shadow-lg px-6 py-2 ">
        <div
          className={`col-span-6 sm:${true ? "col-span-2" : "col-span-3"}`}
        >
          <div className="flex justify-between sm:justify-start">
            <div className="ml-[-18px] sm:ml-0 sm:w-full flex  justify-center sm:justify-start">
              <Link href={"/"}>
                <img
                  src={"/logo.png"}
                  alt=""
                  className="w-32 h-10 object-cover cursor-pointer"
                />
              </Link>
            </div>

            <div className="flex col-span-3 sm:hidden justify-end items-center pl-4">
              {!secretKey ? (
                <span className="font-semibold cursor-pointer" onClick={() => handleOpen()}>Login</span>
              ) : (
                // <svg
                //   xmlns="http://www.w3.org/2000/svg"
                //   width="24"
                //   height="24"
                //   viewBox="0 0 24 24"
                //   fill="none"
                //   stroke="currentColor"
                //   // stroke-width="2"
                //   // stroke-linecap="round"
                //   // stroke-linejoin="round"
                //   className="lucide lucide-key-round cursor-pointer stroke-2"
                //   onClick={() => handleOpen()}
                // >
                //   <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                //   <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
                // </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="lucide lucide-log-out cursor-pointer stroke-2"
                  onClick={() => handleLogout()}
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" x2="9" y1="12" y2="12" />
                </svg>
              )}
            </div>
          </div>
        </div>
        {/* {secretKey && ( */}
          <div className="col-span-6 sm:col-span-2">
            <div className="flex items-center h-full justify-between">
              <ul className="flex w-full justify-between gap-4  sm:px-0">
                <li
                  className={`font-semibold ${
                    pathname === "/" ? "border-b-2 border-[#ffc900]" : ""
                  }`}
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  className={`font-semibold ${
                    pathname.includes("/history")
                      ? "border-b-2 border-[#ffc900]"
                      : ""
                  }`}
                >
                  <Link href="/history">History</Link>
                </li>
                {/* <li
                className={`font-semibold ${
                  pathname.includes("/video-chat")
                    ? "border-b-2 border-[#ffc900]"
                    : ""
                }`}
              >
                <Link href="/video-chat">Video Chat</Link>
              </li> */}
              </ul>
            </div>
          </div>
        {/* )} */}
        <div
          className={`hidden ${
            true ? "col-span-2" : "col-span-3"
          } sm:flex justify-end items-center pl-4`}
        >
          {!secretKey ? (
            <span className="font-semibold cursor-pointer" onClick={() => handleOpen()}>Login</span>
          ) : (
            // <svg
            //   xmlns="http://www.w3.org/2000/svg"
            //   width="24"
            //   height="24"
            //   viewBox="0 0 24 24"
            //   fill="none"
            //   stroke="currentColor"
            //   // stroke-width="2"
            //   // stroke-linecap="round"
            //   // stroke-linejoin="round"
            //   className="lucide lucide-key-round cursor-pointer font-bold stroke-2"
            //   onClick={() => handleOpen()}
            // >
            //   <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
            //   <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
            // </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="lucide lucide-log-out cursor-pointer stroke-2"
              onClick={() => handleLogout()}
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
          )}
        </div>
      </div>
      {login && <LoginModal handleClose={handleClose} />}
    </>
  );
}

export default Navbar;
