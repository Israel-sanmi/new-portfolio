import React from "react";

import resume from "../assets/Israel's Resume.pdf";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

const NavBar = ({darkMode, handleDark}) => {

  const Home = () => {
    const element = document.getElementById("home");
    element.scrollIntoView({behavior: "smooth"})
  }
  const Services = () => {
    const element = document.getElementById("services");
    element.scrollIntoView({behavior: "smooth"})
  }

  const Projects = () => {
    const element = document.getElementById("projects");
    element.scrollIntoView({behavior: "smooth"})
  }

  const Contact = () => {
    const element = document.getElementById("contact");
    element.scrollIntoView({behavior: "smooth"})
  }

 

  return (
    <div>
      <div className="py-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="md:text-lg text-sm font-bold">Israel Ilesanmi</h1>
          </div>
          <div className="flex items-center gap-5">
            <div
              onClick={handleDark}
              className="rounded-full dark:bg-white bg-black p-2 cursor-pointer"
            >
              <BsFillMoonStarsFill className="text-white dark:text-black" />
            </div>
            <div>
              <ul className="fixed text-right z-100000000 text-white md:text-lg text-sm font-bold uppercase right-0 top-1/2">
                <li
                  className="cursor-pointer my-1 bg-teal-500 px-2"
                  onClick={Home}
                >
                  Home
                </li>
                <li
                  className="cursor-pointer my-1 bg-teal-500 px-2"
                  onClick={Services}
                >
                  services
                </li>
                <li
                  className="cursor-pointer my-1 bg-teal-500 px-2"
                  onClick={Projects}
                >
                  projects
                </li>
                <li
                  className="cursor-pointer my-1 bg-teal-500 px-2"
                  onClick={Contact}
                >
                  contact
                </li>
              </ul>
              <a
                download
                href={resume}
                className="px-4 cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-600 text-white py-2 rounded-sm hover:transition-all hover:translate-y-2 border-none font-semibold"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
