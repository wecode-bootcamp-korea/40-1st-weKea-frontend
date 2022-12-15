// TODO : 검색 결과없을경우 메세지 출력, 검색 결과 최대갯수 제한, 검색결과 모달창 클릭해도 box-shadow 안사라지게

import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideModal from '../../components/SideModal/SideModal';
import NavSearchList from './NavSearchList';
import useOnOutSideClick from '../../hooks/useOnOutSideClick';
import './nav.scss';

const interruptedRoute = ['signup', 'login'];

const Nav = () => {
  const { pathname } = useLocation();
  const [isFocus, setIsFocus] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [itemsData, setItemsData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  const isHideNav = interruptedRoute.some(path => pathname.includes(path));

  const onClickHandler = () => {
    setIsClicked(true);
  };

  useOnOutSideClick(ref, () => setIsClicked(false));

  const onFocusHandler = () => {
    setIsFocus(!isFocus);
  };

  const onChangeInputHandler = e => {
    setSearchInput(e.target.value);
  };

  const searchResult = itemsData.map(({ name, id }) => {
    if (searchInput.length > 0 && name.toLowerCase().includes(searchInput)) {
      return (
        <li className="navSearchResult" key={id}>
          <FontAwesomeIcon
            className="fontawesome"
            icon="fa-solid fa-magnifying-glass"
          />
          <span className="searchResultText">{name}</span>
        </li>
      );
    }
  });

  useOnOutSideClick(ref, () => setIsClicked(false));

  useEffect(() => {
    fetch('/data/searchMockData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setItemsData(data);
      });
  }, []);

  if (isHideNav) return;

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
          src="/images/Nav/Sims&co_logo.png"
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
            onChange={onChangeInputHandler}
            value={searchInput}
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
              <NavSearchList
                inputValue={searchInput}
                searchResult={searchResult}
              />
            </div>
          )}
        </div>

        <div className="navIcons">
          <Link to="/login">
            <span className="navIconsUser">
              <FontAwesomeIcon
                className="fontawesome"
                icon="fa-solid fa-user"
                size="lg"
              />
              <span>Hej! 로그인 또는 가입하기</span>
            </span>
          </Link>
          <span className="navIconsCart">
            <Link to="/cart">
              <FontAwesomeIcon
                className="fontawesome"
                icon="fa-solid fa-cart-shopping"
                size="lg"
              />
            </Link>
          </span>
          <span className="navIconsHamburger">
            <FontAwesomeIcon
              onClick={onClickHandler}
              className="fontawesome"
              icon="fa-solid fa-bars"
              size="lg"
            />
          </span>
        </div>
      </div>
      <div className="sideModalWrapper" ref={ref}>
        {isClicked ? (
          <SideModal setIsClicked={setIsClicked} className="sideModal" />
        ) : (
          <SideModal
            setIsClicked={setIsClicked}
            className="sideModal sideModalHidden"
          />
        )}
      </div>
    </nav>
  );
};

export default Nav;
