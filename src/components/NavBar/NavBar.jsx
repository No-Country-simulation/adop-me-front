import React, { useState } from "react";

import "./NavBar.css";
import logo from "../../assets/logo.png";
import {  animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom"
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const scrollToTopPage = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <nav className="navbar">
      {/*Navbar Desktop*/}
      <div className="navbar-logo">
        <Link Link
          to="/"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="logo-link"
          onClick={scrollToTopPage}
        >
          <img src={logo} alt="Logo" className="logo" />
         
        </Link>
      </div>
    
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          HOME
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          NOSOTROS
        </Link>
       
        <Link
          activeClass="active"
          to="/mascotas"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          ADOPTA
        </Link>
        <Link
          activeClass="active"
          to="/mascotas"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          CONTACTANOS
        </Link>
      </div>
      {/*Navbar Mobile*/}
      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          HOME
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          ABOUT US
        </Link>
        <Link
          activeClass="active"
          to="share"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          SHARE YOUR DOG
        </Link>
        <Link
          activeClass="active"
          to="adopt"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          ADOPT
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
