import React, { useContext } from "react";
import CartItem from "./CartItem";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
const CartItems = () => {
const { cartItems } = useContext(ShoppingCartContext);
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
