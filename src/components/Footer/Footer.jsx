import { Link } from "react-router-dom";
import { contactDetails } from "../../constants/contactDetails";
import { navLinks } from "../../constants/navLinks";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <Link to="/" className="footer-logo-link">
          Logo.
        </Link>
        <nav className="footer-navbar">
          <ul className="footer-navbar-list">
            {navLinks.map((link, index) => (
              <ol key={index}>
                <Link to={link.url} className="footer-navbar-links">
                  {link.label}
                </Link>
              </ol>
            ))}
          </ul>
        </nav>
        <div className="footer-social">
          <a href="#">Facebook<img src="" alt="" /></a>
          <a href="#">Instagram<img src="" alt="" /></a>
          <a href="#">Red<img src="" alt="" /></a>
          <a href="#">Red<img src="" alt="" /></a>
        </div>
      </div>
      {/* contact details */}
      <div className="footer-contact">
        {contactDetails.map((detail, index) => (
          <div key={index} className="footer-contact-container">
            <detail.icon size={20} />
            <p className="footer-contact-text">{detail.text}</p>
          </div>
        ))}
      </div>
      {/* copyright text */}
      <hr className="footer-bar"/>
      <p className="footer-copyright">
        Copyright © {new Date().getFullYear()} No Country. All right reserved.
      </p>
    </footer>
  );
};

export default Footer;
