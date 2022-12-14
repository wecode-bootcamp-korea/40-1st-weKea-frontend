import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideModal from '../../components/SideModal/SideModal';
import NavSearchList from './NavSearchList';
import useOnOutSideClick from '../../hooks/useOnOutSideClick';
import './nav.scss';

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();

  const onClickHandler = () => {
    setIsClicked(true);
  };

  useOnOutSideClick(ref, () => setIsClicked(false));

  const [isFocus, setIsFocus] = useState(false);

  const onFocusHandler = () => {
    setIsFocus(!isFocus);
  };

  useOnOutSideClick(ref, () => setIsFocus(false));
  return (
    <nav className="nav">
      <span className="navButton">
        <FontAwesomeIcon
          className="fontawesome"
          icon="fa-solid fa-bars"
          size="lg"
          onClick={onClickHandler}
        />
        <span>메뉴</span>
      </span>
      <div className="navContainer">
        <img
          className="navContainerLogo"
          onClick={() => {
            navigate('/main');
          }}
          src="wekea"
          alt="로고"
        />
        <div className="navSearch">
          <div className="navSearchIconLeft">
            <FontAwesomeIcon
              className="fontawesome"
              icon="fa-solid fa-magnifying-glass"
              size="lg"
            />
          </div>
          <input
            className="navSearchInput"
            onFocus={onFocusHandler}
            type="text"
            placeholder="검색어 입력"
          />
          <div className="navSearchIconRight">
            <FontAwesomeIcon
              className="fontawesome"
              icon="fa-solid fa-camera"
              size="lg"
            />
          </div>
          {isFocus && (
            <div ref={ref}>
              <NavSearchList />
            </div>
          )}
        </div>

        <div className="navIcons">
          <span className="navIconsUser">
            <FontAwesomeIcon
              className="fontawesome"
              icon="fa-solid fa-user"
              size="lg"
            />
            <span>Hej! 로그인 또는 가입하기</span>
          </span>
          <span className="navIconsCart">
            <FontAwesomeIcon
              className="fontawesome"
              icon="fa-solid fa-cart-shopping"
              size="lg"
            />
          </span>
          <span className="navIconsHamburger">
            <FontAwesomeIcon
              className="fontawesome"
              icon="fa-solid fa-bars"
              size="lg"
            />
          </span>
        </div>
      </div>
      <div className="sideModalWrapper" ref={ref}>
        {isClicked ? (
          <SideModal className="sideModal" />
        ) : (
          <SideModal className="sideModal sideModalHidden" />
        )}
      </div>
    </nav>
  );
};

export default Nav;
