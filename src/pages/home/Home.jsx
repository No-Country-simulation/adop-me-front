import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Facebook } from 'react-bootstrap-icons';
import { Instagram, Google, Github } from 'react-bootstrap-icons';


export const Home = () => {
  return (
    <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>
          <Container>
            <Row>
              <Col>Navbar</Col>
            </Row>
            <Row>
              <Col>Ondas</Col>
            </Row>
            <Row>
              <Col>
                <h2>Adopta amor, adopta una mascota</h2>
                <p>
                  <strong>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt nostrum accusamus ducimus? Eligendi maiores vero
                    vitae, aliquam doloribus, dolorem officiis optio excepturi
                    id alias rem. Nostrum voluptates est dolorum voluptatibus.
                  </strong>
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="primary" size="lg">
                  Empezar
                </Button>{" "}
              </Col>
            </Row>
            <Row>
              <Col>
              <i class="bi bi-facebook"></i>
              <Facebook size={50} color="gray" />
              <Instagram size={50} color="#E4405F" className="mx-3" />
        <Google size={50} color="#DB4437" className="mx-3" />
        <Github size={50} color="black" className="mx-3" />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
