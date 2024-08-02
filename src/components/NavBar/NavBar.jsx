import React, { useState, useEffect } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import menu from "../../assets/menu.png";
import { Button } from "react-bootstrap";
import { ModalForm } from "../../components/modal/Modal"; // Asegúrate de importar el componente ModalForm

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navBackground, setNavBackground] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTopPage = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };

  const handleShowModal = (tab) => {
    setActiveTab(tab);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <nav className={`navbar ${navBackground ? "scrolled" : ""}`}>
      {/*Navbar Desktop*/}
      <div className="navbar-logo">
        <Link
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
          to="/contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          CONTACTANOS
        </Link>
        <Button variant="outline-primary" className="mx-2" onClick={() => handleShowModal('login')}>Login</Button>
        <Button variant="outline-secondary" onClick={() => handleShowModal('register')}>Register</Button>
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
          NOSOTROS
        </Link>
        <Link
          activeClass="active"
          to="/mascotas"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          ADOPTA
        </Link>
        <Link
          activeClass="active"
          to="/contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          CONTACTANOS
        </Link>
        <Button variant="outline-primary" className="mx-2" onClick={() => handleShowModal('login')}>Login</Button>
        <Button variant="outline-secondary" onClick={() => handleShowModal('register')}>Register</Button>
      </div>

      <ModalForm show={showModal} handleClose={handleCloseModal} activeTab={activeTab} />
    </nav>
  );
};

export default Navbar;
