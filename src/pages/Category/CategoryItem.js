import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './categoryItem.scss';

const CategoryItems = ({ price }) => {
  return (
    <div className="categoryItems">
      <div className="categoryImg">
        <img
          src="https://www.ikea.com/kr/ko/images/products/barnasinne-spice-mill-black-white__1114947_pe871876_s5.jpg?f=m"
          alt="상품이미지"
        />
      </div>

      <div className="itemInformationWrapper">
        <Link className="itemInformation" to="#">
          <h3 className="itemTitle">
            <span className="itemName">VINTERFINT 빈테르핀트</span>
            <span className="itemDescription">걸이식장식용품8종</span>
          </h3>
          <span className="itemPrice">{price}</span>
          <span className="itemStar">상품별점</span>
        </Link>

        <button className="iconCart">
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" size="lg" />
        </button>
        <button className="iconHeart">
          <FontAwesomeIcon icon="fa-regular fa-heart" size="lg" />
        </button>
      </div>
    </div>
  );
};
export default CategoryItems;
