import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "../src/Pages/Home.jsx";
import About from "../src/Pages/About.jsx";
import Services from "../src/Pages/Services.jsx";
import Pricing from "../src/Pages/Pricing.jsx";
import Contact from "../src/Pages/Contact.jsx";

// icons
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "./ThemeContext.jsx";

// Logo
import darkLogo from "../public/Logo_Dark.png";
import lightLogo from "../public/Logo_Light.png";

import "./App.css";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  if (menuOpen) {
    setTimeout(() => {
      setMenuOpen(false);
    }, 4000);
  }
  return (
    <BrowserRouter>
      <div className={`navDiv ${theme}`}>
        <img
          src={theme === "light" ? darkLogo : lightLogo}
          id="Logo"
          alt="OutSourse Logo"
        />

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`navMenu ${menuOpen ? "active" : ""}`}>
          <Link to={"/"} className="navLink">
            Home
          </Link>

          <Link to={"/About"} className="navLink">
            About
          </Link>

          <Link to={"/Services"} className="navLink">
            Services
          </Link>

          <Link to={"/Pricing"} className="navLink">
            Pricing
          </Link>

          <Link to={"/Contact"} className="navLink">
            Contact
          </Link>

          <div className="themeIcons">
            {theme === "light" ? (
              <FaMoon
                className="themeIcon"
                onClick={() => toggleTheme("dark")}
              />
            ) : (
              <FaSun
                className="themeIcon"
                onClick={() => toggleTheme("light")}
              />
            )}
          </div>
        </div>
      </div>

      <div className={`appContainer ${theme}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
