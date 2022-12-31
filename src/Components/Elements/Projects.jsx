import React from "react";

const Projects = ({ image, name, techs, desc, responsive, implement, live, Github }) => {
  return (
    <div>
      <div>
        <img
          src={image}
          className="w-auto cursor-pointer hover:transition-transform hover:scale-105 h-1/2 object-cover"
          alt=""
        />
        <h1 className="py-2 font-semibold uppercase text-teal-500">{name}</h1>
        <p className="text-sm">Technologies used: {techs}</p>
        <ul>
          <li className="text-xs font-semibold leading-7">- {desc}</li>
          <li className="text-xs font-semibold leading-7">- {responsive}</li>
          <li className="text-xs font-semibold leading-7">- {implement}</li>
              </ul>
              <div className="flex gap-5 text-sm font-bold">
                  <a target="_blank" className="cursor-pointer hover:text-teal-500" href={live}>Live</a>
                  <a target="_blank" className="cursor-pointer hover:text-teal-500" href={Github}>Github</a>
              </div>
      </div>
    </div>
  );
};

export default Projects;
