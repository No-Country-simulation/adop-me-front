import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { SuccessStories } from "./pages/sucessStories/SuccessStories";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<SuccessStories />} />
    </Routes>
  );
};
