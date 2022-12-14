import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Detail.scss';

const Detail = () => {
  const [detailImageList, setDetailImagelist] = useState([]);
  const [detailInfoList, setDetailInfoList] = useState([]);
  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
    fetch('/data/DetailImage.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setDetailImagelist(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/productDetail.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setDetailInfoList(...data);
      });
  }, []);

  return (
    <div className="detail">
      <main className="detailMainContainer">
        <ul className="detailImageContainer">
          {detailImageList.map(img => {
            return (
              <li key={img.id} className="detailImageBox">
                <img
                  className="detailImageEach"
                  src={img.imgUrl}
                  alt="detailImage"
                />
              </li>
            );
          })}
        </ul>
        <div className="detailSummary">
          {detailInfoList.description_summary}
        </div>
        <div className="productCodeBox">
          <div className="productCodeTitle">제품 번호</div>
          <span className="productCode">{detailInfoList.product_code}</span>
        </div>
        <ul className="detailList">
          {DETAIL_LIST.map(data => {
            return (
              <li key={data.id} className="detailListItem">
                {data.title}{' '}
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
            <span className="productName">{detailInfoList.french_name}</span>
            <span className="productName">{detailInfoList.korean_name}</span>
          </div>
          <div className="subDescription">{detailInfoList.category}</div>
          <div className="price">
            <div className="currencyStyle">&#8361;</div>
            {numberWithCommas(+detailInfoList.price)}
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
          <button className="buyButton">구매하기</button>
        </div>
      </aside>
    </div>
  );
};

export default Detail;

const DETAIL_LIST = [
  { id: 1, title: '제품 설명' },
  { id: 2, title: '치수' },
  { id: 3, title: '상품평' },
];
