import React, { useContext } from "react";

import classes from "./Cart.module.css";
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-contex';

const Cart = (props) => {

  const cartCtx = useContext(CartContext)

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose} >
      {cartItem}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{cartCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose} >Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;