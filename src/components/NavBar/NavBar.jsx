import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
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
        <Link
          to="intro"
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
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          INICIO
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
          to="share"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          MASCOTAS
        </Link>
        <Link
          activeClass="active"
          to="adopt"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          ADOPTAR
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          CONTACTO
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
          INICIO
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
          NOSOTROS
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
          MASCOTAS
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
          ADOPTAR
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
          CONTACTO
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
