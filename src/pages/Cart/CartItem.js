import React from 'react';
import './CartItem.scss';

const CartItem = props => {
  return (
    <div className="cartItem">
      <div className="cartItemBox">
        <img src={props.value} alt="img" />
        <span>봉쥬르 웨딩 의자 </span>
      </div>
    </div>
  );
};

export default CartItem;

// src={props.value}
