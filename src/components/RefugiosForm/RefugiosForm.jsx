import React from "react";
import "./RefugiosForm.css";
import Refugios1 from "../../assets/refugios1.png";
import Refugios2 from "../../assets/refugios2.png";
import { motion } from "framer-motion";

export const RefugiosForm = () => {
  return (
    <>
      <section className="refugios">
        <section className="refugios-top">
        <motion.img
            src={Refugios1}
            alt="refugios-icon"
            className="refugios-img"
            initial={{ x: "-7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            width={450}
            height={355}
          ></motion.img>
          <div className="refugios-container-top">
            <h1 className="refugios-container-title">
              Nos encantaría que formes parte de nosotros.
            </h1>
            <h3 className="refugios-container-text">
              Completa el formulario descrito a continuación y nosotros nos
              pondremos en contacto a la brevedad para que tu refugio forme
              parte de nuestra comunidad en Adopt Me.
              <br />
            </h3>
          </div>
        </section>
        <section className="refugios-info">
          <form action="" className="refugios-container form">
            <div className="form-input">
              <input type="text" placeholder="Nombre de Contacto" />
            </div>
            <div className="form-input">
              <input type="text" placeholder="Nombre del Refugio" />
              <input type="text" placeholder="Razón Social" />
            </div>
            <div className="form-input">
              <input type="email" placeholder="Mail" />
              <input type="number" placeholder="Teléfono" />
            </div>
            <div className="form-input">
            <input type="text" placeholder="Página Web" />
              <input type="text" placeholder="Dirección" />
            </div>
            <div className="form-input">
            <input type="text" placeholder="Cantidad de Animales" />
              <select>
                <option value="HTML">Tipo de Animales</option>
                <option value="Gatos">Gatos</option>
                <option value="Perros">Perros</option>
                <option value="Ambos">Ambos</option>
              </select>
            </div>
            <textarea placeholder="Mensaje" className="message"></textarea>
            <button type="submit" className="refugios-btn">
              Enviar
            </button>
          </form>
          <div className="refugios-form-img">
            <img src={Refugios2} alt="Form Img" className="form-img" />
          </div>
        </section>
      </section>
    </>
  );
};
