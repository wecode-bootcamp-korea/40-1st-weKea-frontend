import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageModal from '../ImageModal/ImageModal';
import './Detail.scss';

const Detail = () => {
  const [detailInfoList, setDetailInfoList] = useState({
    price: 0,
    imgUrl: '',
  });
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = () => {
    setIsClicked(true);
  };
  const productPrice = detailInfoList.price;
  const priceWithCurrency = productPrice.toLocaleString('ko-KR');
  const detailImageList = detailInfoList.imgUrl.split(',');
  const detailImageObj = detailImageList.map((data, index) => {
    return { id: { index }, src: { data } };
  });

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
    <>
      <div className="detail">
        <main className="detailMainContainer">
          <ul className="detailImageContainer">
            {detailImageObj.map(data => {
              return (
                <li key={data.id.index} className="detailImageBox">
                  <img
                    onClick={onClickHandler}
                    className="detailImageEach"
                    src={data.src.data}
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
              <span className="productName">{detailInfoList.french_name}</span>
              <span className="productName">{detailInfoList.korean_name}</span>
            </div>
            <div className="subDescription">{detailInfoList.category}</div>
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
            <button className="buyButton">구매하기</button>
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
