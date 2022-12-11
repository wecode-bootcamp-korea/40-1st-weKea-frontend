import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userLogin, setUserLogin] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const userInfo = e => {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };
  const isUserTitle =
    userLogin.email.includes('@') && userLogin.password.length >= 8;

  const handleClick = event => {
    navigate('/main');
  };
  function isvalid(e) {
    e.preventDefault();
  }
  const hadleLogin = () => {
    fetch('http://10.58.52.109:3000/', {
      method: 'POST',
      headers: { 'Content-type': 'application/json;charset=utf-8' },
      body: JSON.stringify(userLogin),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('네트워크가 불안정합니다. 다시 시도 해 주세요');
      })
      .then(data => {
        if (data.message === 'login success') {
          localStorage.setItem('TOKEN', data.accessToken);
          alert('로그인에 성공했습니다');
          navigate('/main');
        } else {
          alert('아이디와 비밀번호를 확인 해 주세요');
        }
      });
  };
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
                name="email"
                value={userLogin.email}
                onChange={userInfo}
              />
            </div>
            <div className="loginBoardPw">
              <span className="loginBordPwtitle">비밀번호</span>
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
