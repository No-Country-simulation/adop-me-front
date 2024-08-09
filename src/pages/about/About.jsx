import React from "react";
import "./About.css";

import { SuccessStories } from "../sucessStories/SuccessStories";
import Aboutimg from "../../assets/aboutimg.png";
import mision from "../../assets/mision.png";
import vision from "../../assets/vision.png";
import buscamos from "../../assets/buscamos.png";
import valores from "../../assets/valores.png";

export const About = () => {
  return (
    <>
      <section className="about min-vh-100">
        <div className="about-container-img">
          <img src={Aboutimg} alt="" className="about-img" />
        </div>
        <div className="about-container">
          <div className="about-container-intro">
            <h1 className="about-title">Acerca de nosotros</h1>
            <p className="about-text">
              Adopt Me conecta a personas amantes de animales para facilitar y
              ayudar la búsqueda según preferencias y estilo de vida adecuadas
              al adoptante. Te acompañamos en cada paso de la adopción
              ofreciendo apoyo
            </p>
          </div>
        </div>
      </section>
      {/*principios section*/}
      <section className="principios">
        <div className="principios-container">
          <div className="principios-container-intro">
            <h2 className="principios-container-title">Nuestros Principios</h2>
            <p className="principios-container-text">
            Adopt Me promueve y participa en campañas de adopción de animales 
desamparados ofreciendo colaboración efectiva con los refugios 
permitiendo publicar con un perfil de administrador gestionar 
adopciones y comunicarse con los potenciales cuidadores de mascotas
            </p>
          </div>
        </div>
        <div className="principios-box">
          <div className="principios-container-box">
            <img src={mision} alt="" className="principios-container-img" />
            <h3 className="principios-box-title">Misión</h3>
            <p className="principios-box-text">
              Encontrarles a nuestros animales a las mejores familiares para que
              los adopten y reciban todo lo que se merecen.
            </p>
          </div>
          <div className="principios-container-box">
            <img src={buscamos} alt="" className="principios-container-img" />
            <h3 className="principios-box-title">¿Qué buscamos?</h3>
            <p className="principios-box-text">
              Que cada uno de nuestros animales encuentre a su familia ideal,
              donde puedan recibir todo el amor y cuidado que merecen.
            </p>
          </div>
          <div className="principios-container-box">
            <img src={vision} alt="" className="principios-container-img" />
            <h3 className="principios-box-title">Visión</h3>
            <p className="principios-box-text">
              Es que algún día ya no seamos necesarios, ni nosotros ni ningún
              otro grupo de adopción, porque todos tengan su casa, con amor,
              respeto y para siempre.
            </p>
          </div>
          <div className="principios-container-box">
            <img src={valores} alt="" className="principios-container-img" />
            <h3 className="principios-box-title">Nuestros Valores</h3>
            <p className="principios-box-text">
              Procuramos que nuestras adopciones sean cien por cien
              responsables. No solo buscamos el mejor hogar posible de adopción
              para nuestros animales sino que intentamos que la decisión de
              adoptar por parte de las familias sea totalmente responsable y
              razonada.
            </p>
          </div>
        </div>
      </section>
      <SuccessStories></SuccessStories>
    </>
  );
};
