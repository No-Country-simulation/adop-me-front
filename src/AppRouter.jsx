import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import  Navbar  from "./components/NavBar/NavBar";
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
    </Routes>
    </>
  );
};
