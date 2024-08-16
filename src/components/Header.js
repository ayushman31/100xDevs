import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";


//import { IMAGE_URL } from "../utils/constants";

const Header = () => {
  //const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  

  return (
    <div className="grid grid-flow-col p-2  shadow-lg col-span-1 bg-100xblue backdrop-blur-md">
      
      <div className="flex  items-center gap-x-2 transition hover:opacity-90">

        <img
        className="h-9 cursor-pointer my-4 bg-100xblue rounded-lg "
          alt="menu logo"
          src="https://st4.depositphotos.com/21557188/23281/v/1600/depositphotos_232818520-stock-illustration-hamburger-menu-web-icon-white.jpg"
          onClick={() => toggleMenuHandler()}
          
        ></img>

        <a href="/">
          <img
          className=" h-9 ml-5 my-5 rounded-full"
          alt="app-logo"
          src = "https://d2szwvl7yo497w.cloudfront.net/courseThumbnails/main.png"
          ></img>
        </a>
        <p className="text-neutral-700 dark:text-neutral-100 text-3xl __className_8b3a75">100xdevs</p>
      </div>
    </div>
  );
};

export default Header;
