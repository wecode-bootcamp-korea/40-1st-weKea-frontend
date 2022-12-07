import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="titleBox">
        <div className="useBox">
          <div className="textBox">
            <div className="logoIcon">icon</div>
            <span>Sims & co</span>
          </div>
          <div className="textBoxTitle">
            <h1 className="title">로그인</h1>
            <span>외워야 할 비밀번호가 많아 불편하셨죠?</span>
            <p>이제 일회용 코드를 이용하여 간편하게 로그인하세요.</p>

            <p>*이메일 또는 전화번호 최초 인증 후 사용 가능</p>
          </div>
          <div className="footer">
            <span>sims&co쿠키 정책,개인정보처리방침</span>
          </div>
        </div>
      </div>
      <div className="loginRbox">
        <form className="inputForm" onSubmit={isvalid}>
          <div className="loginBoard">
            <div className="loginBoardEmail">
              이메일 또는 확인된 휴대폰 번호
              <input
                type="text"
                className="inputId"
                value={userLogin.userId}
                onChange={userInfo}
                name="userId"
              />
            </div>
            <div className="loginBoardPw">
              <span className="loginBordPwtitle">비밀번호</span>
              <input
                type="password"
                className="inputPassword"
                name="userPassword"
                onChange={userInfo}
                value={userLogin.userPassword}
              />
            </div>
            <button
              className="loginBtn"
              disabled={!isUserTitle}
              onClick={handleClick}
            >
              로그인
            </button>
            <button className="joinBtn" type="button" value={userLogin}>
              개인 회원 가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
