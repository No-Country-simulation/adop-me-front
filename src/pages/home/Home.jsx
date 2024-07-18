import {React,useState} from "react";
import { Container, Image, Row, Col, Button, Modal} from "react-bootstrap";
import { Facebook } from "react-bootstrap-icons";
import { Instagram, Google, Github } from "react-bootstrap-icons";
import ondas from "../../assets/ondas.jpg";
import perroAzul from "../../assets/perroAzul.jpg";
import gatoAzul from "../../assets/gatoAzul.jpg";
import "./home.css";
import { ModalForm } from "../../components/modal/Modal";

export const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <Container className="fullwidth" fluid>
      <Row>
        <Col className="img col-7"></Col>
        <Col className="col-5 ">
          <Container>
            <Row className="mt-4"></Row>
            <Row>
              <Col>
                <Image src={ondas} alt="Ondas" className="ondas" />
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 className="subTitulo"> Adopta amor, adopta una mascota</h2>
                <p className="descripcion">
                  <strong>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </strong>
                  Incidunt nostrum accusamus ducimus? Eligendi maiores vero
                  vitae, aliquam doloribus.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="colBtn">
                <Button className="btnJoin" onClick={handleShow}>Unete</Button>{" "}
              </Col>
            </Row>
            <Row>
              <Col className="btnSocialMedia">
                <Facebook size={20} color="gray " />
                <Instagram size={20} color="gray" className="mx-2" />
                <Google size={20} color="gray" className="mx-1" />
                <Github size={20} color="gray" className="mx-1" />
              </Col>
              <Row className="url">www.adoptme.com</Row>
              <div className="onda2"></div>
            </Row>
          </Container>
        </Col>
      </Row>

      {/* Nueva sección */}

      {/* Nueva sección */}
      <Container className="fullwidth mt-2" fluid>
        <Row>
          <h2 className="text-center w-100 my-5">
            ¿Quieres adoptar un perro o un gato?
          </h2>
          <Col className="section">
            <Row className="justify-content-center align-items-center">
              <Col xs="auto" className="text-center">
                <img
                  src={perroAzul}
                  alt="Perro Azul"
                  className="img-fluid card-select"
                />
              </Col>
              <Col xs="auto" className="text-center">
                <img
                  src={gatoAzul}
                  alt="Gato Azul"
                  className="img-fluid card-select"
                />
              </Col>
              <h3>texto prueba</h3>
              <br />
            </Row>
          </Col>
        </Row>
      </Container>

     <ModalForm show={show} handleClose={handleClose}></ModalForm>


    </Container>




  );
};
