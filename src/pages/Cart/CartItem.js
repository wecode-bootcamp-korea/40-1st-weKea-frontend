import React, { useState } from 'react';
import './CartItem.scss';
const CartItem = ({
  key,
  name,
  price,
  product_code,
  src,
  id,
  onDeleteClick,
}) => {
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
          <div className="cartItemPrice">{price}</div>
        </div>
        <div className="cartItemButton">
          <select className="cartItemSelect">
            {CARTAMOUNT.map(cartAmount => {
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

// const [data.]
// const [dataDelete, setDataDelete] = useState([]);

// const onDeleteClick = (e = {});
// const onDeleteClick = e => {
//   console.log(e.target.parentNode.parentNode.parentNode.parentNode);
//   e.target.parentNode.parentNode.parentNode.parentNode.remove();
// };
// const onDeleteClick = () => {
//   if (window.confirm('삭제하시겠습니까 ?')) {
//     fetch('http://localhost:3000/cart/${cart.id}', {
//       method: 'DELETE',
//     }).then(res => {
//       if (res.ok) {
//         ({ id: 0 });
//       }
//     });
//   }
// };
