import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavSearchList from './NavSearchList';
import './nav.scss';

const Nav = () => {
  const navigate = useNavigate();
  const ref = useRef();
  const [isFocus, setIsFocus] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);

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
            <div className="navDropDown" ref={ref}>
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
    </nav>
  );
};

const useOnOutSideClick = (ref, handler) => {
  useEffect(() => {
    const close = e => {
      console.log(e.target);
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
      console.log('current', ref.current);
      // console.log(e.target);
    };
    document.addEventListener('mousedown', close);

    return () => {
      document.removeEventListener('mousedown', close);
    };
  }, [ref, handler]);
};

export default Nav;
