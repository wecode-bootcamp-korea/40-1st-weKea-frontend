import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './categoryItem.scss';

const CategoryItems = ({
  name,
  price,
  image,
  image2,
  description,
  rating,
  onCartAddClick,
}) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const ref = useRef(null);

  return (
    <div className="categoryItems">
      <div>
        <img
          ref={ref}
          className="categoryImg"
          src={isMouseOver ? image : image2}
          onMouseOver={() => setIsMouseOver(true)}
          onMouseOut={() => setIsMouseOver(false)}
          // style={{ opacity: isMouseOver ? 1 : 0 }}
          alt="상품이미지"
        />
        {/* <img
          ref={ref}
          className="categoryImg2"
          src={isMouseOver ? image : image2}
          onMouseOver={() => setIsMouseOver(false)}
          onMouseOut={() => setIsMouseOver(true)}
          style={{ opacity: !isMouseOver ? 1 : 0 }}
          alt="상품이미지"
        /> */}
      </div>
      <div className="itemInformationWrapper">
        <Link className="itemInformation" to="">
          <h3 className="itemTitle">
            <span className="itemName">{name}</span>
            <span className="itemDescription">{description}</span>
          </h3>
          <span className="itemPrice">{price}</span>
          <span className="itemStar">{rating}</span>
        </Link>

        <button className="iconCart" onClick={onCartAddClick}>
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
