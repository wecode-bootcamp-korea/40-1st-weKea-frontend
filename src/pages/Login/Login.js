import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { API } from '../../config/config';
import './Login.scss';

const Login = () => {
  const [userLogin, setUserLogin] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const userInfo = e => {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const { email, password } = userLogin;
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  const emailValueCheck = emailRegex.test(email);
  const passwordValueCheck = passwordRegex.test(password);

  const isUserTitle = emailValueCheck || passwordValueCheck;
  const hadleLogin = () => {
    fetch(`${API.signin}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ ...userLogin }),
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        localStorage.setItem('TOKEN', data.accessToken);
        alert('로그인에 성공했습니다');
        navigate('/');
      });
  };

  return (
    <div className="login">
      <div className="titleBox">
        <div className="titleUseBox">
          <div className="titleUseBoxWrapper">
            <Link to="/">
              <img
                className="logoBox"
                src="/images/Nav/Sims&co_logo.png"
                alt="logoImage"
              />
            </Link>

            <div
              className="logoIcon"
              onClick={() => {
                navigate(-1);
              }}
            >
              <FontAwesomeIcon
                className="fontAwesome"
                icon="fa-solid fa-arrow-left"
                size="lg"
              />
            </div>
          </div>

          <div className="textBoxTitle">
            <h1 className="title">로그인</h1>
            <p className="titleText">
              외워야 할 비밀번호가 많아 불편하셨죠?
              <br />
              이제 일회용 코드를 이용하여 간편하게 로그인하세요.
              <br />
              <br />
              *이메일 또는 전화번호 최초 인증 후 사용 가능
            </p>
          </div>
          <p className="article">
            <span>
              SIMS&CO
              <span className="underline"> 쿠키 정책, 개인정보처리방침</span>
            </span>
            <span>© Inter SIMS&CO Systems 1999-2022</span>
          </p>
        </div>
      </div>
      <div className="loginBox">
        <form className="inputForm">
          <div className="loginInput">
            <span className="lineInput">이메일</span>
            <input
              type="text"
              className={isUserTitle ? 'inputId' : 'inputId inputDisabled'}
              name="email"
              value={userLogin.email}
              onChange={userInfo}
            />
            {isUserTitle ? (
              ''
            ) : (
              <span className="noneTitle"> 이메일 을 입력하세요</span>
            )}
          </div>
          <div className="loginInput">
            <span className="lineInput">비밀번호</span>
            <input
              type="password"
              className={
                isUserTitle ? 'inputPassword' : 'inputPassword inputFail'
              }
              name="password"
              onChange={userInfo}
              value={userLogin.password}
            />
          </div>
          <button
            className="loginBtn"
            disabled={!isUserTitle}
            onClick={hadleLogin}
          >
            로그인
          </button>
          <button
            className="joinBtn"
            onClick={() => {
              navigate('/signup');
            }}
          >
            개인 회원 가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
