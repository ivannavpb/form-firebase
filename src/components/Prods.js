import React from "react";
import { panajson } from "./ProductsData";

const Products = () => {
  return (
    <div>
      {panajson.map((products, i) => (
        <div key={i}>
          <img src={products.imagen} alt={products.productos} />
          <div>
            <p>
              {products.productos} - ${products.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
