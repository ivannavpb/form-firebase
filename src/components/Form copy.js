/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { db } from "../firebase";
import "../app.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function Holi() {
  const [fecha, setFecha] = useState("");
  const [responsable, setResponsable] = useState("");
  const [tienda, setTienda] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        fecha: fecha,
        responsable: responsable,
        tienda: tienda,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setFecha("");
    setResponsable("");
    setTienda("");
  };

  return (
    <Container className="container">
      <Form onSubmit={handleSubmit}>
        <h1>Información del Pedido</h1>

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

        <Button
          type="submit"
          style={{ background: loader ? "#ccc" : "rgb(2,2,110)" }}
        >
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default Holi;
