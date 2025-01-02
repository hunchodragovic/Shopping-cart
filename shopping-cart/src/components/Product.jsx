import React from "react";
import starIcon from "../assets/icons8-star-48.png";
import { toast, Toaster } from "react-hot-toast";
const notify = () => toast("تمت الإضافة إلى العربة");
const Product = ({ product , setCartItems }) => {
  const handleClick = (product) => {
    setCartItems((prev) => [...prev, product]);
    notify();
  };
  return (
    <div>
      <li className="product">
        <img
          src={product.img}
          alt={product.title}
          width="100px"
          height="100px"
        />
        <h2>{product.title}</h2>
        <p style={{ display: "flex", alignItems: "center" }}>
          Rating: {product.rate}
          {Array(Math.floor(product.rate))
            .fill(0)
            .map((_, index) => (
              <img
                key={index}
                src={starIcon}
                alt="starIcon"
                height="20px"
                width="20px"
              />
            ))}
        </p>
        <p>
          Price: <strong>${Number(product.price).toLocaleString()}</strong>
        </p>
        <p>
          Instead of: <s> ${product.insteadOf}</s>
        </p>
        <button type="button" onClick={() => handleClick(product)}>
          أضف إلى العربة{" "}
        </button>
        <Toaster />
      </li>
    </div>
  );
};

export default Product;
