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

  const onCartAddClick = productsId => {
    setAlarmOn(true);
    fetch(`${API.cart}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: window.localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({ productId: productsId }),
    });
  };

  useOnOutSideClick(ref, () => setAlarmOn(false));

  useEffect(() => {
    fetch(`${API.products}/${paramsId.id}?${searchParams.toString()}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => setItemData(result));
  }, [paramsId, searchParams]);

  return (
    <div className="category">
      <div ref={ref} className="alarmModalWrapper">
        {alarmOn === true ? (
          <AlarmModal className="alarmModal" setAlarmOn={setAlarmOn} />
        ) : (
          <AlarmModal
            className="alarmModal alarmModalHidden"
            setAlarmOn={setAlarmOn}
          />
        )}
      </div>

      <div className="categoryTitle">
        <h1>주방용품</h1>
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
                  searchParams.set('filterBy', filterList.sort);
                  searchParams.set('method', filterList.method);
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
                  productsId={id}
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
    sort: 'price',
    method: 'DESC',
  },
  {
    id: 2,
    title: '낮은 가격 순',
    icon: 'fa-solid fa-arrow-down-short-wide',
    sort: 'price',
    method: 'ASC',
  },
  {
    id: 3,
    title: '높은 평점 순',
    icon: 'fa-solid fa-arrow-up-wide-short',
    sort: 'rating',
    method: 'DESC',
  },
  {
    id: 4,
    title: '낮은 평점 순',
    icon: 'fa-solid fa-arrow-down-short-wide',
    sort: 'rating',
    method: 'ASC',
  },
  {
    id: 5,
    title: '알파벳 순',
    icon: 'fa-solid fa-arrow-up-a-z',
    sort: 'name',
    method: 'ASC',
  },
  {
    id: 6,
    title: '최신순',
    icon: 'fa-solid fa-arrow-up-short-wide',
    sort: 'createdAt',
    method: 'ASC',
  },
];
