import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import NavBar from "./components/NavBar/NavBar";

export const AppRouter = () => {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
};
