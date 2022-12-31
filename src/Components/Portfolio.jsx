import React from "react";

import commerce from "../assets/commerce.jpg";
import fintech from "../assets/fintech.png";
import hotel from "../assets/hotel.png";
import expert from "../assets/expert.png";
import nerd from "../assets/nerd.png";
import netflix from "../assets/netflix.png";
import weather from "../assets/weather.jpeg";
import login from "../assets/login.png";
import background from "../assets/background.png";

import Projects from "./Elements/Projects";

const Portfolio = () => {
  return (
    <div id="projects">
      <div>
        <h1 className="md:text-2xl text-xl font-semibold">Portfolio</h1>
        <p className="text-xs leading-5 md:leading-8 py-2 md:text-sm">
          Using various tehnologies, i've been able to work on multiple
          projects; both <span className="text-teal-500">personal</span> and{" "}
          <span className="text-teal-500">customer</span> based.
        </p>
      </div>
      <div className="md:grid-cols-2 grid-cols-1 my-10 grid gap-4">
        <Projects
          image={commerce}
          name="Ecommerce Website"
          techs="Reactjs, Firebase, TailwindCss"
          desc="An ecommerce website created using reactjs and tailwindcss for ui and firebase as a backend service."
          responsive="I used tailwindcss to improve responsiveness on mobile and pc screens"
          implement="I implemented a payment service using paystack api"
          live="https://xyz-commerce.netlify.app/"
          Github="https://github.com/Israel-sanmi/Ecommerce-project"
        />
        <Projects
          image={fintech}
          name="Fintech Landing Page"
          techs="Reactjs, Tailwindcss"
          desc="A fintech landing page created using reactjs and tailwindcss."
          responsive="I worked with a figma design to create the project"
          implement="I used tailwindcss to improve responsiveness on mobile and pc screens"
          live="https://fintech-landing.netlify.app/"
          Github="https://github.com/Israel-sanmi/Fintech-Landing"
        />
        <Projects
          image={hotel}
          name="Hotel Landing Page"
          techs="Reactjs, Tailwindcss"
          desc="An Hotel landing page created using reactjs and tailwindcss."
          responsive="I used React-router for routing between screens"
          implement="I used tailwindcss to improve responsiveness on mobile and pc screens"
          live="https://naughty-neumann-5d299c.netlify.app/"
          Github="https://github.com/Israel-sanmi/Hotel-landing-page"
        />
        <Projects
          image={expert}
          name="Event-noire Landing Page"
          techs="Reactjs, Tailwindcss"
          desc="An Event landing page created using reactjs and tailwindcss."
          responsive="I worked with a figma design to create the project"
          implement="I used tailwindcss to improve responsiveness on mobile and pc screens"
          live="https://noirexperience.netlify.app/"
          // Github=""
        />
        <Projects
          image={nerd}
          name="Nerd-eye Landing Page"
          techs="Reactjs, Tailwindcss"
          desc="I cloned an existing landing page created using reactjs and tailwindcss."
          responsive="I worked with an existing desgin to implement the webpage"
          implement="I used tailwindcss to improve responsiveness on mobile and pc screens"
          live="https://nerrdeye.netlify.app/"
          Github="https://github.com/Israel-sanmi/Nerdeye-est"
        />
        <Projects
          image={netflix}
          name="Netflix Landing Page"
          techs="Html, Css"
          desc="I cloned netflix landing page usong html and Css styles"
          responsive="I used media queries to implement responsiveness in mobile and pc screens"
          live="https://clever-wozniak-2d4753.netlify.app/"
          Github="https://github.com/Israel-sanmi/netflix-clone"
        />
        {/* <Projects className="h-48 w-auto" image={weather} /> */}
        <Projects
          image={login}
          name="Login Page"
          techs="Html, Css"
          desc="I created a login page using html and css only"
          implement="Translated into a fully responsive website"
          responsive="Orientation for smaller displays were determined by me"
          live="https://log-in-page-toba.netlify.app/"
          // Github=""
        />
        <Projects
          image={background}
          name="Background Changer"
          techs="Html, Css, JavaScript"
          desc="I created a website to change backgound colors onclick"
          responsive="Javascript DOM used to fetch colors using hex codes"
          live="https://laughing-fermat-513034.netlify.app/"
          Github="https://github.com/Israel-sanmi/Background-color-changer"
        />
      </div>
    </div>
  );
};

export default Portfolio;
