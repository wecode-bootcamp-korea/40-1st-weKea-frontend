import React from 'react';
import './CartItem.scss';

const CartItem = props => {
  return (
    <div className="cartItem">
      <div className="cartItemBox">
        <img src={props.img} alt="src" />
        <div className="itemBox">
          <span className="itemName">{props.name}</span>
          <span className="itemPrice">{props.price}</span>
          <span className="itemCode">{props.product_code}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

// src={props.value}
