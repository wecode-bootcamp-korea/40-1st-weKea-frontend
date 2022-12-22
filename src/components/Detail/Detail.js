import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageModal from '../ImageModal/ImageModal';
import useOnOutSideClick from '../../hooks/useOnOutSideClick';
import { API } from '../../../src/config/config';
import AlarmModal from '../../components/AlarmModal/AlarmModal';

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
  const [alarmOn, setAlarmOn] = useState(false);
  const ref = useRef();

  const [isClicked, setIsClicked] = useState(false);

  const { productDetailId } = useParams();

  const onClickHandler = () => {
    setIsClicked(true);
  };
  const productPrice = detailInfoList.price;
  const productID = detailInfoList.id;
  const priceWithCurrency = productPrice.toLocaleString('ko-KR');
  const detailImageList = detailInfoList.imageUrl.split(', ');

  const buyButtonClickHandler = () => {
    setAlarmOn(true);
    fetch(`${API.cart}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: window.localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        productId: productID,
      }),
    })
      .then(res => {
        if (res.status === 400) {
          alert('구매할 수 없는 상품입니다');
        }
      })
      .then((res, err) => {
        alert('ERROR:', err.message);
      });
  };

  useOnOutSideClick(ref, () => setAlarmOn(false));

  useEffect(() => {
    fetch(`${API.detail}/${productDetailId}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setDetailInfoList(data[0]));
  }, []);

  return (
    <>
      <div className="detail">
        <div ref={ref} className="alarmModalWrapper">
          {alarmOn === true ? (
            <AlarmModal className="alarmModal" setAlarmOn={setAlarmOn} />
          ) : (
            <AlarmModal
              className="alarmModal alarmModalHidden"
              setAlarmOn={setAlarmOn}
            />
          )}
        </div>
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

            <div className="subRating">
              {'★'.repeat(detailInfoList.rating) +
                '☆'.repeat(5 - detailInfoList.rating)}
            </div>
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
