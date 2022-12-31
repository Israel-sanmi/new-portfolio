import { useState } from "react";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";

function App() {
   const [darkMode, setDarkMode] = useState(false);
   const handleDark = () => {
     setDarkMode((prev) => !prev);
   };
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen dark:bg-slate-800 dark:text-white px-10">
        <NavBar handleDark={handleDark} darkMode={darkMode} />
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
