import React from "react";

import web from "../assets/website.jpg";
import ecommerce from "../assets/ecommerce.jpg";
import app from "../assets/app.jpg";

const Services = () => {
  return (
    <div id="services" className="my-10">
      <div>
        <h1 className="md:text-2xl text-xl font-semibold">Services I offer</h1>
        <p className="py-2 leading-5 md:leading-8 dark:text-white text-gray-500 text-xs md:text-sm">
          Since the beginning of my journey as a Developer, I've done remote
          work for <span className="text-teal-500">agencies</span>,{" "}
          <span className="text-teal-500">startups</span> and collaborated with
          multiple <span className="text-teal-500">talented people </span>
          to create websites for both business and customer use.
        </p>
        <p className="md:text-sm dark:text-white text-xs leading-5 md:leading-8 py-2 text-gray-500">
          I offer a wide range of services, including programming and sometimes
          teaching.
        </p>
      </div>
      <div className="flex flex-wrap justify-around">
        <div className="flex cursor-pointer hover:translate-y-2 bg-white hover:transition-all flex-col items-center justify-center shadow-lg p-5 rounded-xl my-10">
          <img src={web} alt="" className=" w-auto object-cover h-48" />
          <h1 className="text-md dark:text-black font-semibold py-2">Responsive Website Designs</h1>
          <p className="py-4 text-teal-600 text-sm">Development Tools I use</p>
          <p className="py-1 text-gray-800 text-xs uppercase font-semibold">
            Html
          </p>
          <p className="py-1 text-gray-800 text-xs uppercase font-semibold">
            Css - Tailwindcss, Scss, Bootstrap
          </p>
          <p className="py-1 text-gray-800 text-xs uppercase font-semibold">
            JavaScript, TypeScript
          </p>
          <p className="py-1 text-gray-800 text-xs uppercase font-semibold">
            ReactJs
          </p>
        </div>
        <div className="flex cursor-pointer hover:-translate-y-2 bg-white hover:transition-all flex-col items-center p-5 justify-center shadow-lg rounded-xl my-10">
          <img src={ecommerce} alt="" className=" w-full object-cover h-48" />
          <h1 className="text-md dark:text-black font-semibold py-2">Responsive Ecommerce Websites</h1>
          <p className="py-4 text-teal-600 text-sm">Development Tools I use</p>
          <p className="py-1 text-gray-800 text-xs uppercase font-semibold">
            Html
          </p>
          <p className="py-1 text-gray-800 text-xs uppercase font-semibold">
            Css - Tailwindcss, Scss, Bootstrap
          </p>
          <p className="py-1 text-gray-800 text-xs uppercase font-semibold">
            JavaScript, TypeScript
          </p>
          <p className="py-1 text-gray-800 text-xs uppercase font-semibold">
            ReactJs
          </p>
          <p className="py-1 text-gray-800 text-xs uppercase font-semibold">
            Firebase
          </p>
          <p className="py-1 text-gray-800 text-xs uppercase font-semibold">
            REST Apis
          </p>
        </div>
        <div className="flex cursor-pointer hover:translate-y-2 bg-white hover:transition-all flex-col items-center justify-center shadow-lg p-5 rounded-xl my-10">
          <img src={app} alt="" className=" w-auto object-cover h-48" />
          <h1 className="text-md dark:text-black font-semibold py-2">Mobile Applications</h1>
          <p className="py-4 text-teal-600 text-sm">Development Tools I use</p>
          <p className="py-1 text-gray-800 text-xs uppercase font-semibold">
            React-Native
          </p>
          <p className="py-1 text-gray-800 text-xs uppercase font-semibold">
            Css
          </p>
          <p className="py-1 text-gray-800 text-xs uppercase font-semibold">
            JavaScript
          </p>
          <p className="py-1 text-gray-800 text-xs uppercase font-semibold">
            Firebase
          </p>
          <p className="py-1 text-gray-800 text-xs uppercase font-semibold">
            REST Apis
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
