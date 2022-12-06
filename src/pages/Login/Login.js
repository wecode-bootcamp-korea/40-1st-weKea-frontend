import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="login__left-box">
        <div className="left-box__text-box">
          <div className="left-box__logo">
            <div className="logo__icon">icon</div>
            <span>Sims & co</span>
          </div>
          <div className="text-box__title">
            <h1 className="title_font">로그인</h1>
            <span>외워야 할 비밀번호가 많아 불편하셨죠?</span>
            <p>이제 일회용 코드를 이용하여 간편하게 로그인하세요.</p>

            <p className="title_font-two">
              *이메일 또는 전화번호 최초 인증 후 사용 가능
            </p>
          </div>
          <div className="title__detail">
            <span>sims&co쿠키 정책,개인정보처리방침</span>
          </div>
        </div>
      </div>
      <div className="login__right-box">
        <div className="right-box__login">
          <div className="login__board">
            <div className="login__board-email">
              이메일 또는 확인된 휴대폰 번호
              <input type="text" className="input-id" />
            </div>

            <div className="login__board-pw">
              <span className="login__bord-pw">비밀번호</span>
              <input type="text" className="input-pw" />
            </div>

            <button className="login__btn" type="Btn">
              로그인
            </button>
            <button className="join__btn" type="Btn">
              개인 회원 가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
