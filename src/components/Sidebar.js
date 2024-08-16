import React from "react";
import { useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if(!isMenuOpen) return null; 
  return (
    toggleMenu && <div className="flex flex-col p-2  shadow-lg col-span-1 bg-100xblue backdrop-blur-md pr-16  ">
      
      <ul className="pl-16">
        <a href="https://harkirat.classx.co.in/" target="_blank" rel="noopener noreferrer"><li className="text-neutral-700 dark:text-neutral-100 text-l __className_8b3a75 my-4 hover:text-blue-500  cursor-pointer">ClassX</li></a>
        <a href="https://harkirat.classx.co.in/new-courses" target="_blank" rel="noopener noreferrer"><li className="text-neutral-700 dark:text-neutral-100 text-l __className_8b3a75 my-4  hover:text-blue-500  cursor-pointer">Buy New Course</li></a>
        <a href="https://harkirat.classx.co.in/purchases" target="_blank" rel="noopener noreferrer"><li className="text-neutral-700 dark:text-neutral-100 text-l __className_8b3a75 my-4  hover:text-blue-500  cursor-pointer">Your Purchases</li></a>
        <a href="https://app.100xdevs.com/" target="_blank" rel="noopener noreferrer"><li className="text-neutral-700 dark:text-neutral-100 text-l __className_8b3a75 my-4  hover:text-blue-500  cursor-pointer">100xDevs</li></a>
        <a href="https://projects.100xdevs.com/" target="_blank" rel="noopener noreferrer"><li className="text-neutral-700 dark:text-neutral-100 text-l __className_8b3a75 my-4  hover:text-blue-500  cursor-pointer">Notes/Slides</li></a>
        <a href="https://blog.100xdevs.com/Cohort-3-0-322ac9e00cb248f090fffe05047de99f" target="_blank" rel="noopener noreferrer"><li className="text-neutral-700 dark:text-neutral-100 text-l __className_8b3a75 my-4  hover:text-blue-500  cursor-pointer">Syllabus</li></a>
        <li className="text-neutral-700 dark:text-neutral-100 text-l __className_8b3a75 my-4  hover:text-blue-500  cursor-pointer"><Link to="calendar">Calendar</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
