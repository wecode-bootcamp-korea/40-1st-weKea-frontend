import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageModal from '../ImageModal/ImageModal';
import { API } from '../../../src/config/config';
import { useParams } from 'react-router-dom';

import './Detail.scss';

const Detail = () => {
  const [detailInfoList, setDetailInfoList] = useState({
    id: 0,
    koreanName: '',
    name: '',
    price: 0,
    imageUrl: '',
    description: '',
    productCode: '',
    rating: 0,
  });

  const [isClicked, setIsClicked] = useState(false);

  const { productDetailId } = useParams();
  // const productDetailId = params.id;

  const onClickHandler = () => {
    setIsClicked(true);
  };
  const productPrice = detailInfoList.price;
  const productID = detailInfoList.id;
  const priceWithCurrency = productPrice.toLocaleString('ko-KR');
  const detailImageList = detailInfoList.imageUrl.split(', ');

  const buyButtonClickHandler = () => {
    fetch('http://10.58.52.142:3000/cart/putItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        jwtoken: window.localStorage.getItem('jwtoken'),
      },
      body: JSON.stringify({
        productId: productID,
      }),
    })
      .then(res => {
        if (res.status === 201) {
          alert('장바구니에 추가되었습니다');
        } else if (res.status === 400) {
          alert('구매할 수 없는 상품입니다');
        }
      })
      .then((res, err) => {
        alert('ERROR:', err.message);
      });
  };
  useEffect(() => {
    fetch(`${API.detail}/${productDetailId}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setDetailInfoList(data[0]));
  }, []);
  console.log(detailInfoList);

  return (
    <>
      <div className="detail">
        <main className="detailMainContainer">
          <ul className="detailImageContainer">
            {detailImageList.map((src, index) => {
              return (
                <li key={index} className="detailImageBox">
                  <img
                    onClick={onClickHandler}
                    className="detailImageEach"
                    src={src}
                    alt="detailImage"
                  />
                </li>
              );
            })}
          </ul>
          <div className="detailSummary">{detailInfoList.description}</div>
          <div className="productCodeBox">
            <div className="productCodeTitle">제품 번호</div>
            <span className="productCode">{detailInfoList.productCode}</span>
          </div>
          <ul className="detailList">
            {DETAIL_LIST.map(data => {
              return (
                <li key={data.id} className="detailListItem">
                  {data.title}
                  <span className="detailModalArrow">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  </span>
                </li>
              );
            })}
          </ul>
        </main>
        <aside className="productBuyModule">
          <div className="stickyContainer">
            <div className="productNameBox">
              <span className="productName">{detailInfoList.name}</span>
              <span className="productName">{detailInfoList.koreanName}</span>
            </div>
            {/* <div className="subDescription">{detailInfoList.category}</div> */}
            <div className="price">
              <div className="currencyStyle">&#8361;</div>
              {priceWithCurrency}
            </div>
            <div className="subRating">{detailInfoList.rating}</div>
            <div className="buyMethodContainer">
              <div className="buyMethodMsg">어떻게 구매하시겠어요?</div>
              <div className="buyMethodBox">
                <div className="deliveryBox">
                  <div className="deliveryText">배송</div>
                  <button className="deliveryLink">구매 가능 여부 확인</button>
                </div>
                <div className="pickupBox">
                  <div className="pickupText">매장구매</div>
                  <button className="pickupLink">
                    매장 재고 및 재입고 날짜 확인
                  </button>
                </div>
              </div>
            </div>
            <button onClick={buyButtonClickHandler} className="buyButton">
              구매하기
            </button>
          </div>
        </aside>
      </div>
      {isClicked && (
        <ImageModal
          modalImage={detailImageList[0]}
          setIsClicked={setIsClicked}
          isClicked={isClicked}
          className="imageModalContainer"
        />
      )}
    </>
  );
};

export default Detail;

const DETAIL_LIST = [
  { id: 1, title: '제품 설명' },
  { id: 2, title: '치수' },
  { id: 3, title: '상품평' },
];
