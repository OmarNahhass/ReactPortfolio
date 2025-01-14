import React, { useEffect } from "react";
import Contact from "./components/Contact.js";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import BottomBar from "./components/BottomBar.js";
import ScrollToTopButton from "./components/ScrollToTopButton.js";
import Education from "./components/Education.js";
import Resume from "./Resume.js";

function App() {
  useEffect(() => {
    document.title = "Omar Nahhas";
  }, []);

  return (
    <div className="Main">
      <NavBar />
      <Routes>
        <Route path="/education" element={<Education />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <BottomBar />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
