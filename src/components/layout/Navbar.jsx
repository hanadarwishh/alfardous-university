import { useState } from "react";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="Al Fardous University Logo" />
          <span>Al Fardous University</span>
        </div>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/faculties">Faculties</a>
          <a href="/mission">Mission</a>
          <a href="/contact">Contact</a>
          <span className="launch-badge">Launching 2027</span>
        </nav>

        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>
    </header>
  );
}

export default Navbar;