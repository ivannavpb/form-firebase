/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "../app.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

function Holi({
  fecha,
  responsable,
  tienda,
  setFecha,
  setResponsable,
  setTienda,
  handleSubmit,
}) {
  return (
    <Form onSubmit={handleSubmit}>
      <h2>Información del Pedido</h2>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Col sm="4">
          <Form.Label>Fecha:</Form.Label>
          <Form.Control
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </Col>

        <Col sm="4">
          <Form.Label>Responsable:</Form.Label>
          <Form.Control
            placeholder="Responsable"
            value={responsable}
            onChange={(e) => setResponsable(e.target.value)}
          />
        </Col>

        <Col sm="4">
          <Form.Label>Tienda</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tienda"
            value={tienda}
            onChange={(e) => setTienda(e.target.value)}
          />
        </Col>
      </Form.Group>
    </Form>
  );
}

export default Holi;
