import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import  Navbar  from "./components/NavBar/NavBar";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about/About";
import Footer from "./components/Footer/Footer";
import { Share } from "./pages/share/Share";
import { Adopt } from "./pages/adopt/Adopt";
import Mascotas from "./pages/mascota/Mascotas";
import { NotFound } from "./pages/NotFound/NotFound"; 

export const AppRouter = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/mascotas" element={<Mascotas />} />
      <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/share" element={<Share />} />
        <Route path="/adopt" element={<Adopt />} />
      </Routes>
      <Footer />
    </>
  );
};
