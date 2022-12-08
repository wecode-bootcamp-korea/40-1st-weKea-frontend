import React, { useState, useEffect } from 'react';

const SignupInputList = () => {
  const [signupValue, setSignupValue] = useState({
    fullName: '',
    dateOfBirth: '',
    phoneNumber: '',
    gender: '',
    address: '',
    email: '',
    password: '',
  });

  const isValid =
    signupValue.value &&
    signupValue.email.includes('@') &&
    signupValue.password.length >= 8;

  const getSignupValue = e => {
    const { name, value } = e.target;
    setSignupValue({ ...signupValue, [name]: value });
  };

  const isValidSignup = () => {
    if (
      signupValue.value &&
      signupValue.email.includes('@') &&
      signupValue.password.length >= 8
    ) {
      return true;
    } else return false;
  };

  return SIGNUP_INPUT_LIST.map(input => {
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
  });
};
export default SignupInputList;

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
