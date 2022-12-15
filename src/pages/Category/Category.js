import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useOnOutSideClick from '../../hooks/useOnOutSideClick';
import CategoryItem from './CategoryItem';
import { API } from '../../config/config';
import AlarmModal from '../../components/AlarmModal/AlarmModal';
import './category.scss';

const Category = () => {
  const [itemData, setItemData] = useState([]);
  const [alarmOn, setAlarmOn] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsId = useParams();

  const ref = useRef();

  const onCartAddClick = () => {
    setAlarmOn(true);
  };

  useOnOutSideClick(ref, () => setAlarmOn(false));

  // console.log('data : ', itemData);
  useEffect(() => {
    fetch(`${API.products}/${paramsId.id}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => setItemData(result.productInfo));
  }, [paramsId]);

  // useEffect(() => {
  //   fetch('/data/itemsMockData.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setItemData(data);
  //     });
  // }, []);

  console.log(itemData);

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
              <button
                onClick={() => {
                  searchParams.set('sort', filterList.sort);
                  setSearchParams(searchParams);
                }}
                className="categoryFilterButton"
                key={filterList.id}
              >
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
            ({
              id,
              name,
              price,
              description,
              exampleImageUrl,
              thumbnailUrl,
              rating,
            }) => {
              return (
                <CategoryItem
                  key={id}
                  name={name}
                  price={price}
                  description={description}
                  image={exampleImageUrl}
                  image2={thumbnailUrl}
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
    sort: 'PRICE_HIGH_TO_LOW',
  },
  {
    id: 2,
    title: '낮은 가격 순',
    icon: 'fa-solid fa-arrow-down-short-wide',
    sort: 'PRICE_LOW_TO_HIGH',
  },

  {
    id: 3,
    title: '높은 평점 순',
    icon: 'fa-solid fa-arrow-up-wide-short',
    sort: 'RATING_LOW_TO_HIGH',
  },
  {
    id: 4,
    title: '낮은 평점 순',
    icon: 'fa-solid fa-arrow-down-short-wide',
    sort: 'RATING_HIGH_TO_LOW',
  },
  {
    id: 5,
    title: '알파벳 순',
    icon: 'fa-solid fa-arrow-up-a-z',
    sort: 'NAME_ASCENDING',
  },
  {
    id: 6,
    title: '최신순',
    icon: 'fa-solid fa-arrow-up-short-wide',
    sort: 'RELEASE_ASCENDING',
  },
];
