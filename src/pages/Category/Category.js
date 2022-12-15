import React, { useState, useEffect } from 'react';
import CategoryItem from './CategoryItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useOnOutSideClick from '../../hooks/useOnOutSideClick';
import { useRef } from 'react';
import './category.scss';

import AlarmModal from '../../components/AlarmModal/AlarmModal';
import { useParams } from 'react-router-dom';
const Category = () => {
  const [itemData, setItemData] = useState([]);
  const [alarmOn, setAlarmOn] = useState(false);

  const ref = useRef();

  const onCartAddClick = () => {
    setAlarmOn(true);
  };

  useOnOutSideClick(ref, () => setAlarmOn(false));
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    fetch(`http://10.58.52.245:3000/products/${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setItemData(data.product_Info);
      });
  }, []);

  return (
    <div className="category">
      <div ref={ref} className="alarmModalWrapper">
        {alarmOn === true ? (
          <AlarmModal className="alarmModal" />
        ) : (
          <AlarmModal className="alarmModal alarmModalHidden" />
        )}
      </div>
      <div className="categoryTitle">
        <h1>카테고리 이름</h1>
      </div>

      <div className="buttonCountWrapper">
        <div className="categoryButton">
          <button className="categoryFilterButton">제품</button>
          <button className="categoryFilterButton">공간</button>
        </div>
        <span className="categoryCount">123개 항목</span>
      </div>

      <div className="categoryWrapper">
        <div className="categoryFilter">
          {CATEGORY_FILTER.map(filterList => {
            return (
              <button className="categoryFilterButton" key={filterList.id}>
                <span className="categoryFilterButtonText">
                  {filterList.title}
                </span>
                <FontAwesomeIcon
                  className="categoryFilterButtonIcon"
                  icon={filterList.icon}
                />
              </button>
            );
          })}
        </div>

        <div className="categoryList">
          {itemData.map(
            ({ id, name, price, description, thumbnail_url, rating }) => {
              return (
                <CategoryItem
                  key={id}
                  name={name}
                  price={price}
                  description={description}
                  image={thumbnail_url}
                  rating={rating}
                  onCartAddClick={onCartAddClick}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;

const CATEGORY_FILTER = [
  {
    id: 1,
    title: '높은 가격 순',
    icon: 'fa-solid fa-arrow-up-wide-short',
  },
  {
    id: 2,
    title: '낮은 가격 순',
    icon: 'fa-solid fa-arrow-down-short-wide',
  },

  {
    id: 3,
    title: '높은 평점 순',
    icon: 'fa-solid fa-arrow-up-wide-short',
  },
  {
    id: 4,
    title: '낮은 평점 순',
    icon: 'fa-solid fa-arrow-down-short-wide',
  },
  {
    id: 5,
    title: '알파벳 순',
    icon: 'fa-solid fa-arrow-up-a-z',
  },
  {
    id: 6,
    title: '최신순',
    icon: 'fa-solid fa-arrow-up-short-wide',
  },
];
