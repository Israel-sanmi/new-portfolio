import React from "react";

import { BsGithub, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import me from '../assets/me.jpg'

const Hero = () => {
  return (
    <div id="home">
      <div className="text-center py-10">
        <h1 className="md:text-5xl text-3xl py-2 dark:text-white text-teal-600 font-medium">
          Adetomokun Israel
        </h1>
        <h3 className="md:text-lg text-md py-2 font-semibold">
          Front-end Developer (ReactJs, React-native)
        </h3>
        <p className="md:text-lg text-xs py-5 leading-5 md:leading-8 dark:text-white text-gray-800">
          A Front-End Web Developer passionate about creating interactive
          applications and experiences on the web. <br /> Join me down below and
          lets get cracking!
        </p>
      </div>
      <div className="flex gap-5 md:gap-10 py-3 text-gray-600 items-center justify-center">
        <a target="_blank" href="https://twitter.com/Ilesanmiisrael0">
          <BsTwitter className="text-4xl hover:text-blue-400 hover:transition-all hover:-translate-y-2" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/israelsanmi">
          <BsLinkedin className="text-4xl hover:text-blue-900 hover:transition-all hover:-translate-y-2" />
        </a>
        <a target="_blank" href="https://github.com/Israel-sanmi">
          <BsGithub className="text-4xl hover:text-black hover:transition-all hover:-translate-y-2" />
        </a>
        <a target="_blank" href="https://wa.link/4yj119">
          <BsWhatsapp className="text-4xl hover:text-green-600 hover:transition-all hover:-translate-y-2" />
        </a>
      </div>
      <div className="relative bg-gradient-to-b from-gray-400 rounded-full overflow-hidden w-80 h-80 mt-20 mx-auto">
        <img src={me} className="object-fill block mx-auto" alt="me" />
      </div>
    </div>
  );
};

export default Hero;
