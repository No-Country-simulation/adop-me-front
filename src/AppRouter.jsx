// src/AppRouter.js
import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/home/Home";
import Navbar from "./components/NavBar/NavBar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about/About";
import Footer from "./components/Footer/Footer";
import { Share } from "./pages/share/Share";
import { Adopt } from "./pages/adopt/Adopt";
import Mascotas from "./pages/mascota/Mascotas";
import { NotFound } from "./pages/NotFound/NotFound";
import { AuthProvider } from "./context/AuthContext "; 
import  Router from "./routes/sections"; 

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mascotas" element={<Mascotas />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/share" element={<Share />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/dashboard" element={<Router />} />
       
          {/* Ruta protegida */}
          <Route element={<PrivateRoute />}>
            
          </Route>

          
        </Routes>
      </AuthProvider>
      <Footer />
    </>
  );
};
