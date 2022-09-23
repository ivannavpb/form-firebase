/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../app.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { panajson } from "./ProductsData";

const Products = () => {
  return (
    <>
      <Form>
        <h2>Pedido</h2>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Col sm="4">
            <Form.Label>Producto:</Form.Label>
            <input list="data" placeholder="Search" />
            <datalist id="data">
              {panajson.map((e, i) => {
                return (
                  <option key={i} value={e.productos}>
                    {e.productos}
                  </option>
                );
              })}
            </datalist>
          </Col>

          <Col sm="2">
            <Form.Label>Cantidad:</Form.Label>
            <Form.Control type="number" />
          </Col>

          <Col sm="4">
            <Form.Label>Nota de Producto</Form.Label>
            <Form.Control type="text" placeholder="Nota de Producto" />
          </Col>

          <Col sm="2">
            <Form.Label>🖼️Foto</Form.Label>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default Products;
