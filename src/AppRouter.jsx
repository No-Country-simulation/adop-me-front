import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import NavBar from "./components/NavBar/NavBar";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about/About";
import Footer from "./components/Footer/Footer";
import { Share } from "./pages/share/Share";
import { Adopt } from "./pages/adopt/Adopt";

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/share" element={<Share />} />
        <Route path="/adopt" element={<Adopt />} />
      </Routes>
      <Footer />
    </>
  );
};
