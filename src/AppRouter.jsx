import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import Mascotas from "./pages/mascota/Mascotas";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mascotas" element={<Mascotas />} />
    </Routes>
  );
};
