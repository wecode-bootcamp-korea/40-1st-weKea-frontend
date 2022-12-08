import React from 'react';
import CategoryItem from './CategoryItem';
import './category.scss';
const Category = () => {
  return (
    <div className="category">
      <div className="categoryTitle">
        <h1>모든 제품</h1>
      </div>
      <div className="categoryFilter">필터</div>
      <div className="categoryList">
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
  );
};

export default Category;
