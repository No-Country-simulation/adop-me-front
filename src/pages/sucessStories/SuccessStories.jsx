import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./successStories.css";
import imagesData from "../../data/images.json";

export const SuccessStories = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Simular la carga del JSON
    setImages(imagesData);
  }, []);

  return (
    <Container>
      <h1 className="m-4 text-center">Peluditos Adoptados</h1>
      <h4 className="m-4 text-center font">
        Estos son los peluditos que han encontrado humanos con un corazón enorme
        y que ahora disfrutan de la vida que se merecen
      </h4>
      <Row>
        {images.map((image, index) => (
          <Col
            key={index}
            xs={12}
            md={3}
            className="mb-4 d-flex justify-content-center"
          >
            <img src={image.src} alt={image.alt} className="img-fluid" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
