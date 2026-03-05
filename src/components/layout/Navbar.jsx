import { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/faculties">Faculties</Link>
          <Link to="/mission">Mission</Link>
          <span className="launch-badge">Launching 2026</span>
        </nav>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          Menu
        </div>
      </div>
    </header>
  );
}

export default Navbar;
