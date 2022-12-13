import React from 'react';
import './SignupImageList.scss';

const SignupImageList = () => {
  return (
    <div className="signupImageList">
      <ul className="longSignupImageList">
        {IMAGE_LIST.map(img => {
          return (
            <li key={img.id} className="longImageBoxMargin">
              <img alt={img.alt} className="longImageStyle" src={img.src} />
            </li>
          );
        })}
      </ul>
      <ul className="shortSignupImageList">
        {IMAGE_LIST.map(img => {
          return (
            <li key={img.id} className="shortImageBoxMargin">
              <img alt={img.alt} className="shortImageStyle" src={img.src} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SignupImageList;

const IMAGE_LIST = [
  {
    id: 1,
    alt: 'signupImage1',
    src: '/images/Signup/img1.jpg',
    className: 'shortImgStyle',
  },
  {
    id: 2,
    alt: 'signupImage2',
    src: '/images/Signup/img2.jpg',
    className: 'shortImgStyle',
  },
  {
    id: 3,
    alt: 'signupImage3',
    src: '/images/Signup/img3.jpg',
    className: 'shortImgStyle',
  },
  {
    id: 4,
    alt: 'signupImage4',
    src: '/images/Signup/img4.jpg',
    className: 'shortImgStyle',
  },
  {
    id: 5,
    alt: 'signupImage5',
    src: '/images/Signup/img5.jpg',
    className: 'shortImgStyle',
  },
];
