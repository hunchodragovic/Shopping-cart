import React from "react";
import starIcon from "../assets/icons8-star-48.png";
const Products = ({ products }) => {
  return (
    <div>
      <ul style={{ display: "flex", gap: "16px", listStyle: "none" }}>
        {" "}
        {products.map((product) => (
          <li key={product.id} className="product">
            <img
              src={product.img}
              alt={product.title}
              width="100px"
              height="100px"
            />
            <h2>{product.title}</h2>
            <p style={{ display: "flex", alignItems: "center" }}>
              Rating: {product.rate}
              {Array(Math.floor(product.rate)).fill(0).map((_, index) => (
                  <img key={index} src={starIcon} alt="" height="20px" width="20px" />
              ))}
            
            </p>
            <p>
              Price: <strong>${Number(product.price).toLocaleString()}</strong>
            </p>
            <p>
              Instead of: <s> ${product.insteadOf}</s>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
