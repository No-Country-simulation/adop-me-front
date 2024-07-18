import React from "react";
import { MascotCards } from "../../components/MascotCards/MascotCards";
import "./mascotas.css";
import { Container } from "react-bootstrap";

export default function Mascotas() {
  return (
    <Container className="fullwidth" fluid>
      <MascotCards />
    </Container>
  );
}
