import React, { useState } from 'react';
import { Button, Modal, Form, Nav } from 'react-bootstrap';

export const ModalForm = ({ show, handleClose, onLoginSuccess }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, contrasena }),
      });

      if (!response.ok) {
        throw new Error('Nombre o contraseña incorrecta!');
      }

      const data = await response.json();
      // Guardar el token de autenticación
      localStorage.setItem('authToken', data.jwTtoken);
      console.log('Login exitoso:', data);

      onLoginSuccess(); // Llamar a la función de éxito de login

      handleClose(); // Cerrar el modal en caso de login exitoso
    } catch (error) {
      setError(error.message);
    }
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
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicUsername" className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
            </Form.Group>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <Button variant="primary" type="submit" className="w-100 mb-3">
              Login
            </Button>
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
