import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';
import SignupImageList from '../../components/Signup/SignupImageList';

const Signup = () => {
  const navigate = useNavigate();

  const [signupValue, setSignupValue] = useState({
    fullName: '',
    dateOfBirth: '',
    phoneNumber: '',
    gender: '',
    address: '',
    email: '',
    password: '',
  });

  const getSignupValue = e => {
    const { name, value } = e.target;
    setSignupValue({ ...signupValue, [name]: value });
  };

  const isValid =
    Object.values(signupValue).every(value => value) &&
    signupValue.email.includes('@') &&
    signupValue.password.length >= 8;

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
        {SIGNUP_INPUT_LIST.map(input => {
          return (
            <div key={input.id}>
              {input.title}
              <input
                type={input.type}
                className="inputItemStyle"
                name={input.name}
                value={signupValue.name}
                onChange={getSignupValue}
              />
            </div>
          );
        })}
        <button
          className="buttonStyle"
          disabled={!isValid}
          onClick={() => {
            isValid
              ? fetch('http://1/signup', {
                  method: 'POST',
                  headers: { 'content-Type': 'application/json;charset-stf-8' },
                  body: JSON.stringify({
                    fullName: signupValue.fullName,
                    dateOfBirth: signupValue.dateOfBirth,
                    phoneNumber: signupValue.phoneNumber,
                    gender: signupValue.gender,
                    address: signupValue.address,
                    email: signupValue.email,
                    password: signupValue.password,
                  }),
                })
                  .then(response => {
                    if (response.ok === true) {
                      return response.json;
                    }
                    throw new Error('잘못된 접근입니다');
                  })
                  .catch(error => console.log(error))
                  .then(data => {
                    if (data.message === 'signup success') {
                      localStorage.setItem('TOKEN', data.token);
                      alert('Sims&co 가입을 축하합니다');
                    } else {
                      alert('이미 가입한 회원입니다');
                      navigate('/main');
                    }
                  })
              : console.log('입력되지 않은 정보가 있습니다');
          }}
        >
          가입 하기
        </button>
      </div>
    </div>
  );
};

export default Signup;
const SIGNUP_INPUT_LIST = [
  {
    id: 1,
    title: '이름',
    type: 'text',
    name: 'fullName',
  },
  {
    id: 2,
    title: '생일',
    type: 'date',
    name: 'dateOfBirth',
  },
  {
    id: 3,
    title: '휴대폰',
    type: 'text',
    name: 'phoneNumber',
  },
  {
    id: 4,
    title: '성별(남성, 여성)',
    type: 'text',
    name: 'gender',
  },
  {
    id: 5,
    title: '주소',
    type: 'text',
    name: 'address',
  },
  {
    id: 6,
    title: '이메일',
    type: 'text',
    name: 'email',
  },
  {
    id: 7,
    title: '비밀번호',
    type: 'password',
    name: 'password',
  },
];
