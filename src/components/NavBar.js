import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../components/images/ye.png";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".nav") && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <nav className="nav">
      <Link to="/">
        <div className="logo-container">
          <img src={logo} className="logo" alt="Logo" />
        </div>
      </Link>
      <ul className={`navLinks ${isMenuOpen ? "show" : ""}`}>
        <li>
          <Link
            to="/education"
            className="navbar-text"
            onClick={() => setIsMenuOpen(false)}
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="navbar-text"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="navbar-text"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div
        className={`hamburger ${isMenuOpen ? "show" : ""}`}
        onClick={handleHamburgerClick}
      >
        ☰
      </div>
    </nav>
  );
}
