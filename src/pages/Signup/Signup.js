import React, { useState, useEffect } from 'react';
import './Signup.scss';

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    key: '',
    last_name: '',
    first_name: '',
    date_of_birth: '',
    phone_number: '',
    gender: '',
    address: '',
    email: '',
    password: '',
  });

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
              이미 가입하셨나요? <a href="login">로그인 하기</a>
            </div>
          </div>
          <img
            className="mobileImgSize"
            alt="loginImg"
            src="../../../public/images/Signup/signup_img(2).jpg"
          />
          <div className="imgContainerFlex">
            <span className="imgBox1Margin">
              <img
                alt="loginImage1"
                className="imgItemStyle1"
                src="../../../public/images/Signup/signup_img(5).jpg"
              />
            </span>
            <span className="imgBox2Margin">
              <img
                alt="loginImage1"
                className="imgItemStyle2"
                src="../../../public/images/Signup/signup_img(5).jpg"
              />
            </span>
          </div>
        </span>
      </div>
      <div className="inputContainerStyle">
        <div>
          <input type="text" className="inputItemStyle" />
        </div>

        <button className="buttonStyle">가입 하기</button>
      </div>
    </div>
  );
};

export default Signup;

const SIGNUP_INPUT_BOX = {
  id: 1,
  title:
    '성, 이름, 생일, 휴대폰, 성별(남성, 여성), 상세 주소, 이메일, 비밀번호',
  type: 'text',
  className: 'inputItemStyle',
};

const SIGNUP_IMAGE = [
  {
    id: 1,
    alt: 'image1',
    src: '../../../public/images/Signup/signup_img(1)',
  },
  {
    id: 2,
    alt: 'image2',
    src: '../../../public/images/Signup/signup_img(2)',
  },
  {
    id: 3,
    alt: 'image3',
    src: '../../../public/images/Signup/signup_img(3)',
  },
  {
    id: 4,
    alt: 'image4',
    src: '../../../public/images/Signup/signup_img(4)',
  },
  {
    id: 5,
    alt: 'image5',
    src: '../../../public/images/Signup/signup_img(5)',
  },
];
