import React from 'react';
import './Login.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userLogin, setUserLogin] = useState({ userId: '', userPassword: '' });
  const navi = useNavigate('/main');

  const userInfo = e => {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };
  const isUserTitle =
    userLogin.userId.includes('@') && userLogin.userPassword.length >= 8;

  const handleClick = event => {
    navi('/main');
  };
  function isvalid(e) {
    e.preventDefault();
  }
  return (
    <div className="login">
      <div className="titleBox">
        <div className="titleUseBox">
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
          <div className="article">
            <span>sims&co쿠키 정책,개인정보처리방침</span>
          </div>
        </div>
      </div>
      <div className="loginBox">
        <form className="inputForm" onSubmit={isvalid}>
          <div className="loginInputBoard">
            <div className="loginBoardEmail">
              이메일 또는 확인된 휴대폰 번호
              <input
                type="text"
                className="inputId"
                name="userId"
                value={userLogin.userId}
                onChange={userInfo}
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
            <button className="joinBtn" type="submit">
              개인 회원 가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
