import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navSearchList.scss';

const NavDropDown = () => {
  return (
    <div className="navDropDown">
      <div className="navSearchResult">
        <FontAwesomeIcon
          className="fontawesome"
          icon="fa-solid fa-magnifying-glass"
        />
        <span className="searchResultText">검색결과</span>
      </div>
    </div>
  );
};

export default NavDropDown;
