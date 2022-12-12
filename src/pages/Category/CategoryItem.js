import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './categoryItem.scss';

const CategoryItems = ({ name, price, image, description, rating }) => {
  return (
    <div className="categoryItems">
      <div>
        <img className="categoryImg" src={image} alt="상품이미지" />
      </div>
      <div className="itemInformationWrapper">
        <Link className="itemInformation" to="#">
          <h3 className="itemTitle">
            <span className="itemName">{name}</span>
            <span className="itemDescription">{description}</span>
          </h3>
          <span className="itemPrice">{price}</span>
          <span className="itemStar">{rating}</span>
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
