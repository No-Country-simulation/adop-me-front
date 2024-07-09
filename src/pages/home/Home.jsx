import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

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
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
