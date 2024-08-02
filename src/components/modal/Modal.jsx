import React, { useState } from 'react';
import { Button, Modal, Form, Nav } from 'react-bootstrap';

export const ModalForm = ({ show, handleClose, onLoginSuccess }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
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
        const errorText = await response.text(); // Leer el texto de la respuesta
        throw new Error(errorText);
      }

      const data = await response.json();
      localStorage.setItem('authToken', data.jwTtoken);
      console.log('Login exitoso:', data);

      onLoginSuccess();
      handleClose();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          apellido,
          correoElectronico: email,
          contrasena
        }),
      });

      if (!response.ok) {
        const errorText = await response.text(); // Leer el texto de la respuesta
        throw new Error(errorText);
      }

      const data = await response.json();
      console.log('Registro exitoso:', data);
      setError('');
      handleTabClick('login'); // Cambiar a la pestaña de login en caso de éxito
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{activeTab === 'login' ? 'Acceder' : 'Registrar'}</Modal.Title>
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
                placeholder="Ingrese nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese contraseña"
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
          <Form onSubmit={handleRegister}>
            <Form.Group controlId="formBasicName" className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicApellido" className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className="mb-3">
              <Form.Check type="checkbox" label="He leído los términos y condiciones" />
            </Form.Group>

            {error && <p style={{ color: 'red' }}>{error}</p>}

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
