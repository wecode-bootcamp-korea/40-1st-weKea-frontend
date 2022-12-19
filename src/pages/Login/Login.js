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

  const isUserTitle =
    userLogin.email.includes('@') && userLogin.password.length >= 8;

  const hadleLogin = e => {
    e.preventDefault();

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
        navigate('/main');
      });

    // .then(response => {
    //   console.log('response : ', response);
    //   // if (response.ok === true) {
    //   return response.json();
    //   // }
    //   // alert('실패');
    //   // throw new Error('네트워크가 불안정합니다. 다시 시도 해 주세요');
    // })
    // .then(data => {
    //   console.log('data : ', data);
    //   if (data.message === 'login success') {
    //   localStorage.setItem('TOKEN', data.accessToken);
    //   alert('로그인에 성공했습니다');
    //   navigate('/main');
    //   } else {
    //   alert('아이디와 비밀번호를 확인 해 주세요');
    //   }
    // });
  };

  return (
    <div className="login">
      <div className="titleBox">
        <div className="titleUseBox">
          <div className="titleUseBoxWrapper">
            <Link to="/main">
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
              className="inputId"
              name="email"
              value={userLogin.email}
              onChange={userInfo}
            />
          </div>
          <div className="loginInput">
            <span className="lineInput">비밀번호</span>
            <input
              type="password"
              className="inputPassword"
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
