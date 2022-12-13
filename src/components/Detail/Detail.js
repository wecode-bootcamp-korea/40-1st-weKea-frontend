import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Detail.scss';

const Detail = () => {
  const [detailImageList, setDetailImagelist] = useState([]);

  const productDetail = {
    id: 1,
    french_name: 'CHOUCHOU',
    korean_name: '슈슈',
    category: '식탁',
    material: '호두나무',
    size: '180x90cm',
    price: 590000,
    rating: '★★★★★(15)',
    description_summary:
      '원목으로 만든 기본 원형 테이블과 의자는 공간을 따뜻하고 포근하게 만들어 줍니다. 프랑스 가정집의 감성을 멋지게 표현했죠.',
    product_code: '110.530.87',
    description_detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in ligula nibh. Aenean fringilla sem vel tellus hendrerit, in varius lectus blandit. Maecenas nec iaculis odio. Quisque eget orci mollis, faucibus nulla vitae, interdum nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt condimentum odio, sit amet ultricies quam tincidunt at. Ut nec ultrices diam. Quisque molestie maximus turpis ac dignissim. Suspendisse vel risus sed nibh iaculis auctor nec sit amet justo.',
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
        <div className="detailSummary">{productDetail.description_summary}</div>
        <div className="productCodeBox">
          <div className="productCodeTitle">제품 번호</div>
          <span className="productCode">{productDetail.product_code}</span>
        </div>
        <ul className="detailList">
          <li className="detailListItem">
            제품 설명
            <span className="detailModalArrow">
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </span>
          </li>
          <li className="detailListItem">
            치수
            <span className="detailModalArrow">
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </span>
          </li>
          <li className="detailListItem">
            상품평
            <span className="detailModalArrow">
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </span>
          </li>
        </ul>
      </main>

      <aside className="productBuyModule">
        <div className="stickyContainer">
          <div className="productNameBox">
            <span className="productName">{productDetail.french_name}</span>
            <span className="productName">{productDetail.korean_name}</span>
          </div>
          <div className="subDescription">
            {productDetail.category}, {productDetail.material},{' '}
            {productDetail.size}
          </div>
          <div className="price">&#8361;{productDetail.price}</div>
          <div className="subRating">{productDetail.rating}</div>
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
