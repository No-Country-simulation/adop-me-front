import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export const Home = () => {
  return (
    <Container>
    <Row>
      <Col>1 of 2</Col>
      <Col>2 of 2 <Button variant="primary">Primary</Button>{' '}</Col>
    </Row>
  </Container>
  )
}
