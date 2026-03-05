import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Al Fardous University Logo" />
          <span>Al Fardous University</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/faculties" onClick={closeMenu}>Faculties</Link>
          <Link to="/mission" onClick={closeMenu}>Mission</Link>
          <span className="launch-badge">Launching 2026</span>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
