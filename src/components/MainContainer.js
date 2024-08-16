import React, { useState } from "react";
import { useSelector } from "react-redux";

const MainContainer = () => {
  {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-100xblue">
      <div
        className={`flex flex-col items-center justify-center  ${
          isMenuOpen ? "pl-[132px]" : "pl-[384px]"
        }`}
      >
        <div className="md:text-md mb-4 flex items-center rounded-full border bg-blue-50 px-4 py-2.5 font-sans text-sm font-semibold uppercase text-blue-700 shadow-md md:px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-medal mr-2 h-5 w-5"
          >
            <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path>
            <path d="M11 12 5.12 2.2"></path>
            <path d="m13 12 5.88-9.8"></path>
            <path d="M8 7h8"></path>
            <circle cx="12" cy="17" r="5"></circle>
            <path d="M12 18v-2h-.5"></path>
          </svg>
          #1 learning platform
        </div>
        <h1 className="mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-center text-4xl text-transparent md:mb-4 md:text-6xl">
          100xdevs
        </h1>
        <div className="w-fit px-4 pb-4 text-center text-3xl text-neutral-800 dark:text-neutral-200 md:text-6xl">
          because 10x ain't enough!
        </div>
        <div className="mx-auto mt-4 max-w-sm px-2 text-center text-sm text-neutral-400 dark:text-neutral-500 md:max-w-2xl md:text-xl">
          A Beginner-Friendly Platform for Mastering Programming Skills and
          Unleashing Your Inner Developer Genius! Start Learning Today and
          Transform into a Tech Pro Tomorrow!
        </div>
      </div>
    </div>
  );
};}

export default MainContainer;
