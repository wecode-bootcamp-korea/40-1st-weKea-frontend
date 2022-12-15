import React from 'react';
import './CartItem.scss';
const CartItem = ({ cart, onDeleteClick, onAmountChange }) => {
  const { name, price, product_code, amount, id } = cart;

  const total = (amount * price)
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

  const onSelectChange = e => {
    const value = Number(e.target.value);
    onAmountChange(id, value);
  };

  return (
    <div className="cartItem">
      <div className="cartItemImageWrapper">
        <div className="cartItemImage">이미지임</div>
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
          <div className="cartItemPrice">₩{total}</div>
        </div>

        <div className="cartItemButton">
          <select
            className="cartItemSelect"
            onChange={onSelectChange}
            value={amount}
          >
            {CART_AMOUNT.map(cartAmount => {
              return <option key={cartAmount.id}>{cartAmount.id}</option>;
            })}
          </select>

          <div className="cartItemDelet">
            <button onClick={() => onDeleteClick(id)}>삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

const CART_AMOUNT = [
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
];
