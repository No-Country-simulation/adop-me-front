import React from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import { Facebook } from "react-bootstrap-icons";
import { Instagram, Google, Github } from "react-bootstrap-icons";
import ondas from "../../assets/ondas.jpg";
import Navbar from "../../components/NavBar/NavBar"
import "./home.css";

export const Home = () => {
  return (
    <Container className="fullwidth" fluid>
      <Row>
        <Col className="img col-7"></Col>
        <Col className="col-5">
          <Container>
            <Row className="mt-4">
              <Col></Col>
            </Row>
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
                <Button className="btnJoin">
                  Unete
                </Button>{" "}
              </Col>
            </Row>
            <Row>
              <Col className="btnSocialMedia">
                <Facebook size={20} color="gray " />
                <Instagram size={20} color="gray" className="mx-2" />
                <Google size={20} color="gray" className="mx-1" />
                <Github size={20} color="gray" className="mx-1" />
              </Col>
                <div className="onda2"></div>
            </Row>
              <Row className="url">
                  www.adoptme.com
              </Row>
              
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
