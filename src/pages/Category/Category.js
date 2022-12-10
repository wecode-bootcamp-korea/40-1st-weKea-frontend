import React, { useState, useEffect } from 'react';
import CategoryItem from './CategoryItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './category.scss';
const Category = () => {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    fetch('/data/itemsMockData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setItemData(data);
      });
  }, []);

  return (
    <div className="category">
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
                <span>{filterList.title}</span>
                <FontAwesomeIcon icon={filterList.icon} />
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
  { id: 1, title: '정렬', icon: 'fa-solid fa-chevron-down' },
  { id: 2, title: '가격', icon: 'fa-solid fa-chevron-down' },
  { id: 3, title: '색상', icon: 'fa-solid fa-chevron-down' },
  { id: 4, title: '모든 필터', icon: 'fa-solid fa-list-ul' },
];
