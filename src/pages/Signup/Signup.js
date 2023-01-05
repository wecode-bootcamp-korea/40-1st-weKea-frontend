import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SignupImageList from '../../components/Signup/SignupImageList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { API } from '../../config/config.js';
import './Signup.scss';

const Validator = {
  email: {
    test: value =>
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
        value
      ),
    message: '올바르지 않은 이메일 형식입니다.',
  },
  password: {
    test: value =>
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test(
        value
      ),
    message: '영문, 숫자, 특수문자 포함 8글자 이상',
  },
  phoneNumber: {
    test: value => /^(010)-?([0-9]{4})-?([0-9]{4})$/.test(value),
    message: '올바르지 않은 휴대폰 번호입니다.',
  },
};

const Signup = () => {
  const inputRef = useRef();
  const navigate = useNavigate();

  const [signupValue, setSignupValue] = useState({
    name: '',
    birthdate: '',
    phoneNumber: '',
    gender: '',
    address: '',
    email: '',
    password: '',
  });
  const getOptionValue = e => {
    const { name } = e.target;
    const optionValue = e.target.options[e.target.selectedIndex].text;
    setSignupValue({ ...signupValue, [name]: optionValue });
  };

  const getSignupValue = e => {
    const { name, value } = e.target;

    setSignupValue({ ...signupValue, [name]: value });
  };

  const isAllValid = Object.values(signupValue).every(value => value);
  console.log(signupValue);
  console.log(isAllValid);

  const gotoMain = () => {
    fetch(`${API.signup}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...signupValue }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
      })
      .then(data => {
        if (data.message === 'success') {
          alert('Sims&co 가입을 축하합니다');
          navigate('/');
        } else {
          alert('이미 가입한 회원입니다');
        }
      });
  };

  return (
    <div className="signup">
      <div>
        <header className="headerArray">
          <Link to="/" className="arrowMargin">
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
          </Link>
          <img
            className="logoStyle"
            src="/images/Nav/Sims&co_logo.png"
            alt="Sims&coLogo"
          />
        </header>
        <span className="sideContainerWidth">
          <div className="titleMargin">
            <h1 className="titleStyle">Sims & co 회원 가입</h1>
            <div>
              <span>이미 가입하셨나요?</span>
              <Link to="/login">로그인 하기</Link>
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
        <form>
          {SIGNUP_INPUT_LIST.map(input => {
            if (input.id === 4) {
              return (
                <div key={input.id}>
                  <div className="inputTitle">{input.title}</div>
                  <select
                    id={input.name}
                    className="inputItemStyle"
                    style={{ marginBottom: '34px' }}
                    onChange={getOptionValue}
                    required
                  >
                    <option value="" />
                    <option value="남성">남성</option>
                    <option value="여성">여성</option>
                  </select>
                </div>
              );
            }
            return (
              <div key={input.id}>
                <div className="inputTitle">{input.title} </div>
                <input
                  ref={inputRef}
                  type={input.type}
                  className="inputItemStyle"
                  name={input.name}
                  id={input.name}
                  value={signupValue[input.name]}
                  onChange={getSignupValue}
                />
                <div className="alertMessage">
                  {signupValue[input.name].length === 0 ||
                    (!Validator[input.name]?.test(signupValue[input.name]) &&
                      Validator[input.name]?.message)}
                </div>
              </div>
            );
          })}
        </form>

        <button
          className="buttonStyle"
          // disabled={!isAllValid}
          onClick={gotoMain}
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
    name: 'name',
  },
  {
    id: 2,
    title: '생일',
    type: 'date',
    name: 'birthdate',
  },
  {
    id: 3,
    title: '휴대폰',
    type: 'text',
    name: 'phoneNumber',
  },
  {
    id: 4,
    title: '성별',
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
