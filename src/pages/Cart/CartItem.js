import React, { useState } from 'react';
import './CartItem.scss';
const CartItem = ({ key, name, price, product_code, src }) => {
  const cart = {};
  return (
    <div className="cartItem">
      <div className="cartItemImageWrapper">
        <div className="cartItemImage">{src}</div>
        <div className="cartItemCode">
          <span>{product_code}</span>
        </div>
      </div>
      <div className="cartItemTextWrapper">
        <div className="cartItemText">
          <div className="cartItemTitle">
            <div className="cartItemName">{name}</div>
            <div>카테고리</div>
          </div>
          <div className="cartItemPrice">{price}</div>
        </div>
        <div className="cartItemButton">
          <select className="cartItemSelect">
            {CARTAMOUNT.map(data => {
              return <option key={data.id}>{data.id}</option>;
            })}
          </select>
          <div className="cartItemDelet">
            <button>삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
};
{
  /* // src={props.value} */
}

export default CartItem;

const CARTAMOUNT = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
];
