import React from "react";
import { ArrowRight} from "lucide-react";
import { Link } from "react-scroll";
import { faqs } from "../../constants/faqs";
import Accordion from "../Accordion/Accordion";
import Contact3 from "../../assets/contact3.png";
import './FaqsSection.css';

const FaqsSection = () => {
  return (
    <section className="faqs">
      <h2 className="faqs-title">PREGUNTAS FRECUENTES SOBRE
      ADOPCIÓN DE MASCOTAS</h2>
      <p className="faqs-text">
      En ..... conectamos humanos con su mascota. Sabemos la importancia de que no haya ningún animal sin familia. Si estás pensando sumar un amigo peludo tenés que saber el compromiso que esto implica. No sólo será tu compañía sino un integrante más de la familia. Por lo que te recomendamos planifiques bien su llegada, asegúrate que todos estén de acuerdo y que en tu edificio o casa se permitan mascotas. Tené en cuenta los gastos mensuales relacionados, cuidados generales que necesitará para que se encuentre saludable y cómodo y con quién dejarlo en caso de salir de vacaciones.
      <br />
      <br />
      <span>
      Te dejamos acá un resumen de las preguntas que recibimos siempre así te ayudamos a prepararte en lo que se viene</span>
      </p>
      <div className="faqs-container">
        <div className="box">
          <Accordion data={faqs} />
        </div>
        <div className="additional-info">
          <div className="icon-container">
            <img src={Contact3} alt="" />
          </div>
          <div>
            <h5 className="info-title">¿Todavía tienes alguna pregunta?</h5>
            <p className="info-text">Si todavía tienes alguna duda, puedes apretar el siguiente botón que te llevará directo al chat con nuestro equipo de soporte para que te briden asesoramiento en cualquier momento.</p>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Contactar<ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
