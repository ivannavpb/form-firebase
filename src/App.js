import React, { useState } from "react";
import Holi from "./components/Form";
import Products from "./components/Products";
import { db } from "./firebase";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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
      <div className="app">
        <Holi
          fecha={fecha}
          responsable={responsable}
          tienda={tienda}
          setFecha={setFecha}
          setResponsable={setResponsable}
          setTienda={setTienda}
          handleSubmit={handleSubmit}
        />

        <Products />

        <Button
          type="submit"
          style={{ background: loader ? "#ccc" : "rgb(2,2,110)" }}
        >
          Enviar
        </Button>
      </div>
    </Container>
  );
}

export default App;
