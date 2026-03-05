import "./Footer.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <img src={logo} alt="Al Fardous University" className="footer-logo" />
          <p>
            Al Fardous University is a private university under establishment located in Al-Fayoum,
            dedicated to academic excellence and innovation.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/faculties">Faculties</Link></li>
            <li><Link to="/mission">Mission</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Faculties</h4>
          <ul>
            <li>Medicine</li>
            <li>Engineering</li>
            <li>Computer & AI</li>
            <li>Management</li>
            <li>Languages</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>Location: Al-Fayoum City, Egypt</p>
          <p>Phone: +20 123 456 789</p>
          <p>Email: info@alfardous.edu.eg</p>

          <div className="socials">
            <a href="#" aria-label="Website">Web</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Twitter">X</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Al Fardous University. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
