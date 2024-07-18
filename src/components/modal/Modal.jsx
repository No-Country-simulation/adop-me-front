import React, { useState } from 'react';
import { Button, Modal, Form, Nav } from "react-bootstrap";

export const ModalForm = ({ show, handleClose }) => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Acceder</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Nav variant="tabs" defaultActiveKey="login" className="mb-3">
          <Nav.Item>
            <Nav.Link eventKey="login" active={activeTab === 'login'} onClick={() => handleTabClick('login')}>
              Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="register" active={activeTab === 'register'} onClick={() => handleTabClick('register')}>
              Registrate
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {activeTab === 'login' && (
          <Form>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className="mb-3">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-3">
              Registrate
            </Button>
            <div className="text-center">
              <p>No eres mienbro? <a href="#!">Registrate</a></p>
              <p>o registrate con:</p>
              <div className="d-flex justify-content-center">
                <Button variant="link" className="m-1"><i className="fab fa-facebook-f"></i></Button>
                <Button variant="link" className="m-1"><i className="fab fa-twitter"></i></Button>
                <Button variant="link" className="m-1"><i className="fab fa-google"></i></Button>
                <Button variant="link" className="m-1"><i className="fab fa-github"></i></Button>
              </div>
            </div>
          </Form>
        )}

        {activeTab === 'register' && (
          <Form>
            <Form.Group controlId="formBasicName" className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="formBasicUsername" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className="mb-3">
              <Form.Check type="checkbox" label="I have read and agree to the terms" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-3">
              Registrate
            </Button>
            <div className="text-center">
              <p>o registrate con:</p>
              <div className="d-flex justify-content-center">
                <Button variant="link" className="m-1"><i className="fab fa-facebook-f"></i></Button>
                <Button variant="link" className="m-1"><i className="fab fa-twitter"></i></Button>
                <Button variant="link" className="m-1"><i className="fab fa-google"></i></Button>
                <Button variant="link" className="m-1"><i className="fab fa-github"></i></Button>
              </div>
            </div>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
