import "./Footer.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 - Logo & About */}
        <div className="footer-col">
          <img src={logo} alt="Al Fardous University" className="footer-logo" />
          <p>
            Al Fardous University is a private university under establishment
            located in Al-Fayoum, dedicated to academic excellence and innovation.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/faculties">Faculties</Link></li>
            {/* <li><Link to="/admissions">Admissions</Link></li> */}
          </ul>
        </div>

        {/* Column 3 - Faculties */}
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

        {/* Column 4 - Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>📍 Al-Fayoum City, Egypt</p>
          <p>📞 +20 123 456 789</p>
          <p>📧 info@alfardous.edu.eg</p>

          <div className="socials">
            <a href="#">🌐</a>
            <a href="#">📘</a>
            <a href="#">📷</a>
            <a href="#">🐦</a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Al Fardous University. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;