import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import './categoryItem.scss';

const CategoryItems = ({
  name,
  productsId,
  price,
  image,
  image2,
  description,
  rating,
  onCartAddClick,
}) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const params = useParams();
  const id = params;

  console.log('id : ', id);

  return (
    <div className="categoryItems">
      <div>
        <img
          className="categoryImg"
          src={isMouseOver ? image : image2}
          onMouseOver={() => setIsMouseOver(true)}
          onMouseOut={() => setIsMouseOver(false)}
          alt="상품이미지"
        />
      </div>

      <div className="itemInformationWrapper">
        <Link className="itemInformation" to={`/products/detail/${productsId}`}>
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
