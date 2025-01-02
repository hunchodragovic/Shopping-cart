import React from "react";
import Product from "./Product";
const Products = ({ products }) => {

  return (
    <div>
      <ul style={{ display: "flex", gap: "16px", listStyle: "none" }}>
        {" "}
        {products.map((product) => (
         <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
