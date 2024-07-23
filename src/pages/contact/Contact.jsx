import React from "react";
import FaqsSection from "../../components/FaqsSection/FaqsSection";
import "./Contact.css";
import Contact1 from "../../assets/contact1.png";
import Contact2 from "../../assets/contact2.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";

export const Contact = () => {
  return (
    <>
      <section className="contact">
        <section className="contact-top">
        <img
                src={Contact1}
                alt="contact-icon"
                width={450}
                height={355}
                className="contact-img"
              />
          <div className="contact-container-top">
            <h1 className="contact-container-title">
              Nos encantaría que te pongas en contacto con nosotros.
            </h1>
            <h3 className="contact-container-text">
              Cuéntanos brevemente cómo ayudarte y déjanos un teléfono y mail de contacto. Nosotros te llamamos a la brevedad.
              <br />
              <br />
              También puedes contactarnos para contarnos lo que necesites, o enviarnos información sobre casos de maltrato o abandono:
            </h3>
          </div>
        </section>
        <section className="contact-info">
          <div className="contact-information">
            <div className="contact-information-box">
              <div className="contact-container contact-information-box-text">
                <p className="contact-container-text">Envía un mail a</p>
                <h6 className="contact-container-desc">email@email.com</h6>
              </div>
              <div className="contact-container contact-information-box-text">
                <p className="contact-container-text">Puedes llamarnos al</p>
                <h6 className="contact-container-desc">+123456789</h6>
              </div>
              <div className="contact-container contact-information-box-text">
                <p className="contact-container-text">Ubicación</p>
                <h6 className="contact-container-desc">Lorem Street</h6>
              </div>
            </div>
            <h6 className="contact-container-social">Redes Sociales</h6>
            <div className="social-profiles">
            <a href="https://www.facebook.com/?locale=es_LA"  target="_blank" rel="noreferrer">

<img src={facebook} alt="Facebook" className="footer-social-icon" />
</a>

<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
<img
  src={instagram}
  alt="Instragram"
  className="footer-social-icon"
/>
</a>

<a href="https://x.com/?lang=es" target="_blank" rel="noreferrer">
<img src={twitter} alt="Twitter" className="footer-social-icon" />
</a>

<a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
<img src={youtube} alt="Youtube" className="footer-social-icon" />
</a>
            </div>
          </div>
          <div className="form">
            <form action="" className="contact-container form">
              <div className="form-input">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="form-input">
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Phone" />
              </div>
              <textarea placeholder="Message" className="message"></textarea>
              <button type="submit" className="form-btn">
                Enviar
              </button>
              <img
                src={Contact2}
                alt="contact-icon2"
                className="contact-icon2"
              />
            </form>
          </div>
        </section>
        <FaqsSection />
      </section>
    </>
  );
};
