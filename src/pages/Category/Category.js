import React from 'react';
import CategoryItem from './CategoryItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './category.scss';
const Category = () => {
  return (
    <div className="category">
      <div className="categoryTitle">
        <h1>카테고리 이름</h1>
      </div>
      <div className="buttonCountWrapper">
        <div className="categoryButton">
          <button>제품</button>
          <button>공간</button>
        </div>

        <span className="categoryCount">123개 항목</span>
      </div>
      <div className="categoryWrapper">
        <div className="categoryFilter">
          <button>
            <span>정렬</span>
            <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
          </button>
          <button>
            <span>가격</span>
            <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
          </button>
          <button>
            <span>색상</span>
            <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
          </button>
          <button>
            <span>모든 필터</span>
            <FontAwesomeIcon icon="fa-solid fa-list-ul" />
          </button>
        </div>
        <div className="categoryList">
          {/* 테스트용 */}
          <CategoryItem price="1" />
          <CategoryItem price="2" />
          <CategoryItem price="3" />
          <CategoryItem price="4" />
          <CategoryItem price="5" />
          <CategoryItem price="6" />
          <CategoryItem price="7" />
          <CategoryItem price="8" />
        </div>
      </div>
    </div>
  );
};

export default Category;
