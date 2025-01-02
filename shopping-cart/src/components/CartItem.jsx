import React from 'react'
import { toast, Toaster } from "react-hot-toast";
const CartItem = ({cartItem}) => {
  return (
    <li className="product">
    <img
      src={cartItem.img}
      alt={cartItem.title}
      width="100px"
      height="100px"
    />
    <h2>{cartItem.title}</h2>
  
    <p>
      Price: <strong>${Number(cartItem.price).toLocaleString()}</strong>
    </p>
    <p>
      Instead of: <s> ${cartItem.insteadOf}</s>
    </p>
  
    <Toaster />
  </li>
  )
}

export default CartItem