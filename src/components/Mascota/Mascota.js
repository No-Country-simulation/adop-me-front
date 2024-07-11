import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export function Mascota({ mascotaObj }) {
  return (
    <Col>
      <Card border="dark">
        <Card.Img
          variant="top"
          style={{ width: "auto", height: "280px", objectFit: "cover" }}
          src={mascotaObj.foto}
          alt={mascotaObj.nombre}
        />
        <Card.Body>
          <Card.Title>{mascotaObj.nombre}</Card.Title>
          <Card.Subtitle>
            Fecha de Ingreso: {mascotaObj.fechaIngreso}
          </Card.Subtitle>
          <Card.Text>Edad: {mascotaObj.edad}</Card.Text>
          <Card.Text>Tamaño: {mascotaObj.tamaño}</Card.Text>
          <Card.Text>Descripcion: {mascotaObj.descripcion}</Card.Text>
          <Button variant="info">Adoptar</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
