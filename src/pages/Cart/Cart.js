import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.scss';

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  // const [selectValue, setSeletValue] = useState('');

  // const total = selectValue
  //         .reduce((a.b) => a + b. price * b.amount, 0 )
  //         .toString()
  //         .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

  //     })
  //   )
  // }

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
        <div className="shopBox">
          <div className="titleBox">
            <h1 className="cartTitle">장바구니</h1>
            <span className="cartTitleIcon">
              <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
            </span>
          </div>
          <div className="detailTitleBox">주문을 어떻게 받고 싶으세요?</div>
          <div className="titleBoxWish">
            <div className="shippingBox">
              <button className="shippingText" type="button">
                배송
              </button>
            </div>
            <div className="pickupBox">
              <button className="shippingText" type="button">
                픽업
              </button>
            </div>
          </div>
          <div className="favoriteProducBox">
            {cartData.map(data => {
              return (
                <CartItem
                  key={data.id}
                  name={data.name}
                  price={data.price}
                  product_code={data.product_code}
                  // img={data.img}
                  amount={data.amount}
                  // data={data}
                />
              );
            })}
          </div>
          <div className="productBoxCommentBox">
            <div className="serviceBox">조립서비스를 추가하시겠습니까?</div>
            <div className="serviceDetailBox">
              <h1 className="serviceTitle">조립 서비스</h1>
              <p>
                sims &co에게 조립을 맡기고 소중한 시간을 아끼세요.공식
                협역업체가 제공하는 조립 서비스는 ₩30,000부터 시작합니다.
              </p>
              <span>우편 번호를 추가하여 예약 가능 여부 및 가격 확인</span>

              <p>추가정보 링크</p>
            </div>
            <button className="serviceButton" type="button">
              조립 서비스 선택하기
            </button>
          </div>
        </div>
      </div>
      <div className="payBox">
        <div className="payDetailBox">
          <div className="priceBox">
            <div className="priceDetailBox">주문 내역</div>
            <div className="orderHistoryBox">
              <span>제품 가격</span>
              <button className="boxPrice">가격</button>
            </div>
            <div className="textShipping">
              <span>배송</span>
              <span className="noneShipping">
                아직 배송비가 사정되지 않았습니다
              </span>
            </div>
            <div className="totalPrice">
              <span>총 주문금액</span>
              <button className="wonBox">가격</button>
            </div>
            <div className="giftBox">
              <div className="giftPayBox">
                <button type="button" className="payButton">
                  결제하기
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" size="lg" />
                </button>
              </div>
              <span className="payBackTitle">
                반품 정책 365일 이내에 제품 환불 가능
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
