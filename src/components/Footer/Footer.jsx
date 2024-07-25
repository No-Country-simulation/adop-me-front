import { Link } from "react-router-dom";
import { contactDetails } from "../../constants/contactDetails";
import { navLinks } from "../../constants/navLinks";
import React from "react";
import "./Footer.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import Logo from "../../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo-container">
        <div className="footer-logo">
          <Link to="/" className="footer-logo-link">
            <img src={Logo} alt="Logo" className="footer-logo-img" />
          </Link>
          <nav className="footer-navbar">
            <ul className="footer-navbar-list">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} className="footer-navbar-links">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com/?locale=es_LA" target="_blank" rel="noreferrer">
            <img src={facebook} alt="Facebook" className="footer-social-icon" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Instragram" className="footer-social-icon" />
          </a>
          <a href="https://x.com/?lang=es" target="_blank" rel="noreferrer">
            <img src={twitter} alt="Twitter" className="footer-social-icon" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img src={youtube} alt="Youtube" className="footer-social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-contact">
        {contactDetails.map((detail, index) => (
          <div key={index} className="footer-contact-container">
            <detail.icon size={20} />
            <p className="footer-contact-text">{detail.text}</p>
          </div>
        ))}
      </div>
      <hr className="footer-bar" />
      <p className="footer-copyright">
        Copyright © {new Date().getFullYear()} No Country. All right reserved.
      </p>
    </footer>
  );
};

export default Footer;
