import React from "react";
import CartItem from "./CartItem";

const CartItems = ({cartItems}) => {
  return (
    <div>
      <h1>Cart {cartItems.length}</h1>
      <ul style={{ display: "flex", gap: "16px", listStyle: "none" }}>
        {" "}
        {cartItems.map((item) => (
       <li>
        <CartItem key={item.id} cartItem={item}/>
       </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
