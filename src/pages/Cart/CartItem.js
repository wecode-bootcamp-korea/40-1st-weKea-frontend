import React from 'react';
import './CartItem.scss';
const CartItem = ({ cart, onDeleteClick, onQuantityChange }) => {
  const { name, price, productCode, quantity, id, thumbnailUrl } = cart;
  const total = (quantity * price).toLocaleString('ko-KR', {
    style: 'currency',
    currency: 'EUR',
  });

  const onSelectChange = e => {
    const quantity = Number(e.target.value);
    const id = Number(e.target.id);
    onQuantityChange(id, quantity);
  };

  return (
    <div className="cartItem">
      <div className="cartItemImageWrapper">
        <div className="cartItemImage">
          <img src={thumbnailUrl} alt="img" />
        </div>
        <div className="cartItemCode">
          <span>{productCode}</span>
        </div>
      </div>

      <div className="cartItemTextWrapper">
        <div className="cartItemText">
          <div className="cartItemTitle">
            <div className="cartItemName">{name}</div>
            <div>카테고리</div>
          </div>
          <div className="cartItemPrice">{total}</div>
        </div>

        <div className="cartItemButton">
          <select
            className="cartItemSelect"
            onChange={onSelectChange}
            id={id}
            value={quantity}
          >
            {CART_AMOUNT.map(cartQuantity => {
              return <option key={cartQuantity.id}>{cartQuantity.id}</option>;
            })}
          </select>

          <div className="cartItemDelete">
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
    id: 0,
  },
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
