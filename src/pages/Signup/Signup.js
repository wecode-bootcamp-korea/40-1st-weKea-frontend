import React, { useState, useEffect } from 'react';
import './Signup.scss';
import SignupImageList from '../../components/Signup/SignupImageList';
import SignupInputList from '../../components/Signup/SignupInputList';

const Signup = () => {
  return (
    <div className="entireArray">
      <div>
        <header className="headerArray">
          <a className="arrowMargin" href="/Main">
            -화살표-
          </a>
          <span className="logoStyle">로고</span>
        </header>
        <span className="sideContainerWidth">
          <div className="titleMargin">
            <h1 className="titleStyle">Sims & co 회원 가입</h1>
            <div>
              <span>이미 가입하셨나요?</span> <a href="login">로그인 하기</a>
            </div>
          </div>
          <img
            className="mobileImgSize"
            alt="loginImg"
            src="/images/Signup/img1.jpg"
          />
          <SignupImageList />
        </span>
      </div>
      <div className="inputContainerStyle">
        <SignupInputList />
        <button className="buttonStyle">가입 하기</button>
      </div>
    </div>
  );
};

export default Signup;
