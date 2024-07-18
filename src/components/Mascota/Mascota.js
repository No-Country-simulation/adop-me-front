import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";

export function Mascota({ mascotaObj }) {
  const [open, setOpen] = useState(false);

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
          <Card.Text>Edad: {mascotaObj.edad} años</Card.Text>
          <Card.Text>Tamaño: {mascotaObj.tamaño}</Card.Text>
          <Button
            variant="outline-info"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            {open ? "Ocultar" : "Mostrar"} descripcion:
          </Button>
          <Collapse in={open}>
            <Card.Text>{mascotaObj.descripcion}</Card.Text>
          </Collapse>
        </Card.Body>
        <Button variant="success">Adoptar</Button>
      </Card>
    </Col>
  );
}
