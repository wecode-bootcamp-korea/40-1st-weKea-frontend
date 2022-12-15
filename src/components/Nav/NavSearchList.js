import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navSearchList.scss';

const NavDropDown = ({ inputValue, searchResult }) => {
  return inputValue ? (
    <ul className="navDropDown">{searchResult}</ul>
  ) : (
    <ul className="navDropDown">
      <li className="navSearchResult">
        <FontAwesomeIcon
          className="fontawesome"
          icon="fa-solid fa-magnifying-glass"
        />
        <span className="searchResultText">
          검색하고 싶은 내용을 입력하세요
        </span>
      </li>
    </ul>
  );
};

export default NavDropDown;
