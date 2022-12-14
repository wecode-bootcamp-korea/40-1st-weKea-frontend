import React from 'react';

const SignupInputList = () => {
  return SIGNUP_INPUT_LIST.map(input => {
    return (
      <div key={input.id}>
        {input.title}
        <input type={input.type} className="inputItemStyle" />
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
  },
  {
    id: 2,
    title: '생일',
    type: 'text',
  },
  {
    id: 3,
    title: '휴대폰',
    type: 'text',
  },
  {
    id: 4,
    title: '성별(남성, 여성)',
    type: 'text',
  },
  {
    id: 5,
    title: '상세 주소',
    type: 'text',
  },
  {
    id: 6,
    title: '이메일',
    type: 'text',
  },
  {
    id: 7,
    title: '비밀번호',
    type: 'password',
  },
];
