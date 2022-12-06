import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './nav.scss';

const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <span className="nav__button">
        <FontAwesomeIcon
          className="fontawesome"
          icon="fa-solid fa-bars"
          size="lg"
        />
        <span>메뉴</span>
      </span>
      <nav className="nav">
        <div className="nav__container">
          <img
            className="nav__logo"
            onClick={() => {
              navigate('/main');
            }}
            src="wekea"
            alt="로고"
          />
          {/* 검색 */}
          <div className="nav__search">
            <div className="nav__search--icon-left">
              <FontAwesomeIcon
                className="fontawesome"
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
                className="fontawesome"
                icon="fa-solid fa-camera"
                size="lg"
              />
            </div>
          </div>
          {/* 아이콘 */}
          <div className="nav__icons">
            <span className="nav__icons--left">
              <FontAwesomeIcon
                className="fontawesome"
                icon="fa-solid fa-user"
                size="lg"
              />
              <span>Hej! 로그인 또는 가입하기</span>
            </span>
            <span className="nav__icons--right">
              <FontAwesomeIcon
                className="fontawesome"
                icon="fa-solid fa-cart-shopping"
                size="lg"
              />
            </span>
            <span className="nav__icons--hamburger">
              <FontAwesomeIcon
                className="fontawesome"
                icon="fa-solid fa-bars"
                size="lg"
              />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
