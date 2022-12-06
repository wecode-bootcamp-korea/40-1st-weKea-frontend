import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <Link className="nav__button" to="#">
        <FontAwesomeIcon
          className="font-awesome"
          icon="fa-solid fa-bars"
          size="lg"
        />
        <span>메뉴</span>
      </Link>
      <div className="nav__container">
        {/* 임시 로고 */}
        <Link className="nav__logo" to="/main">
          <img
            src="https://www.ikea.com/kr/ko/static/ikea-logo.f7d9229f806b59ec64cb.svg"
            alt="로고"
            width="90px"
          />
        </Link>
        {/* 검색 */}
        <div className="nav__search">
          <div className="nav__search--icon-left">
            <FontAwesomeIcon
              className="font-awesome"
              icon="fa-solid fa-magnifying-glass"
              size="lg"
            />
          </div>
          <input
            className="nav__search--input"
            type="text"
            placeholder="검색어 입력"
          />
          <div className="nav__search--icon-right">
            <FontAwesomeIcon
              className="font-awesome"
              icon="fa-solid fa-camera"
              size="lg"
            />
          </div>
        </div>
        {/* 아이콘 */}
        <div className="nav__icons">
          <Link className="nav__icons--left" to="#">
            <FontAwesomeIcon
              className="font-awesome"
              icon="fa-solid fa-user"
              size="lg"
            />
            <span>HeJ! 로그인 또는 가입하기</span>
          </Link>
          <Link className="nav__icons--right" to="#">
            <FontAwesomeIcon
              className="font-awesome"
              icon="fa-solid fa-cart-shopping"
              size="lg"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
