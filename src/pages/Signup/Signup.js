import React from 'react';
import './Signup.scss';

const Signup = () => {
  return (
    <div className="signup__entire-box">
      <div className="signup__left-side">
        <div className="signup__header-section">
          <a className="signup__back-arrow" href="/Main">
            -화살표-
          </a>
          <span className="signup__logo">로고</span>
        </div>
        <span className="signup__left-container">
          <div className="signup__title-section">
            <div className="signup__title-style">Sims & co 회원 가입</div>
            <div className="signup__go-to-login">
              이미 가입하셨나요? <a href="login">로그인 하기</a>
            </div>
          </div>
          <div className="signup__img-min" />
          <div className="signup__img-container">
            <span className="signup__img-leftside">
              <div className="signup__img-items" />
              <div className="signup__img-items" />
              <div className="signup__img-items" />
              <div className="signup__img-items" />
            </span>
            <span className="signup__img-rightside">
              <div className="signup__img-items" />
              <div className="signup__img-items" />
              <div className="signup__img-items" />
              <div className="signup__img-items" />
              <div className="signup__img-items" />
            </span>
          </div>
        </span>
      </div>
      <div className="signup__input-container">
        <div>
          성
          <input type="text" className="signup__input-items" />
        </div>
        <div>
          이름
          <input type="text" className="signup__input-items" />
        </div>
        <div>
          생일
          <input type="text" className="signup__input-items" />
        </div>
        <div>
          휴대폰 <input type="text" className="signup__input-items" />
        </div>
        <div>
          성별(선택 사항)
          <select className="signup__input-items" name="성별">
            <option value="" />
            <option value="남성">남성</option>
            <option value="여성">여성</option>
          </select>
        </div>
        <div>
          상세 주소
          <input type="text" className="signup__input-items" />
        </div>
        <div>
          이메일 <input type="text" className="signup__input-items" />
        </div>
        <div>
          비밀번호
          <input type="text" className="signup__input-items" />
        </div>

        <button className="signup__button-style">가입 하기</button>
      </div>
    </div>
  );
};

export default Signup;
