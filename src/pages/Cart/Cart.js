import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.scss';

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  const onDeleteClick = id => {
    setCartData(cartData => cartData.filter(cart => cart.id !== id));
  };

  const onAmountChange = (id, amount) => {
    setCartData(cartData =>
      cartData.map(cart => {
        if (cart.id === id) cart.amount = amount;
        return cart;
      })
    );
  };

  const total = cartData
    .reduce((prev, current) => prev + current.price * current.amount, 0)
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

  useEffect(() => {
    fetch('/data/cartItem.json')
      .then(res => res.json())
      .then(data => {
        setCartData(data);
      });
  }, []);

  return (
    <div className="cart">
      <div className="shopCart">
        <div className="titleBox">
          <h1 className="cartTitle">장바구니</h1>
          <span className="cartTitleIcon">
            <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
          </span>
        </div>
        <div className="detailTitleBox">주문을 어떻게 받고 싶으세요?</div>
        <div className="titleBoxWish">
          <button className="shippingTextBox" type="button">
            <FontAwesomeIcon icon="fa-solid fa-truck" size="lg" />
            <span className="shippingText">배송</span>
          </button>

          <button className="shippingTextBox" type="button">
            <FontAwesomeIcon icon="fa-solid fa-warehouse" size="lg" />
            <span className="shippingText">픽업</span>
          </button>
        </div>

        <div className="favoriteProductBox">
          {cartData.map(data => {
            return (
              <CartItem
                key={data.id}
                cart={data}
                img={data.img}
                onDeleteClick={onDeleteClick}
                onAmountChange={onAmountChange}
              />
            );
          })}
        </div>

        <div className="productBoxCommentBox">
          <div className="serviceBox">조립서비스를 추가하시겠습니까?</div>
          <div className="serviceDetailBox">
            <FontAwesomeIcon icon="fa-solid fa-oil-well" size="lg" />
            <h1 className="serviceTitle">조립 서비스</h1>
            <p>
              sims &co에게 조립을 맡기고 소중한 시간을 아끼세요.공식 협역업체가
              제공하는 조립 서비스는 ₩30,000부터 시작합니다.
            </p>
            <span>우편 번호를 추가하여 예약 가능 여부 및 가격 확인</span>

            <p className="addLink">추가정보 링크</p>
          </div>
          <button className="serviceButton" type="button">
            조립 서비스 선택하기
          </button>
        </div>
      </div>

      <div className="payBox">
        <div className="payDetailBox">
          <div className="priceBox">
            <div className="priceDetailBox">주문 내역</div>
            <div className="orderHistoryBox">
              <span>제품 가격</span>
              <div className="boxPrice">₩{total}</div>
            </div>
            <div className="textShipping">
              <span>배송</span>
              <span className="noneShipping">
                아직 배송비가 사정되지 않았습니다
              </span>
            </div>
            <div className="totalPrice">
              <span>총 주문금액</span>
              <div className="wonBox">₩{total}</div>
            </div>

            <div className="giftPayBox">
              <button type="button" className="payButton">
                결제하기
                <FontAwesomeIcon
                  icon="fa-solid fa-circle-arrow-right"
                  size="lg"
                />
              </button>
            </div>
            <span className="payBackTitle">
              반품 정책 365일 이내에 제품 환불 가능
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
