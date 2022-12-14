import React from 'react';

const SignupImageList = () => {
  return ImageList.map(img => {
    return (
      <div key={img.id} className="imgContainerFlex">
        <span className="longImgBoxMargin">
          <img alt={img.alt} className="longImgStyle" src={img.src} />
        </span>
        <span className="shortImgBoxMargin">
          <img alt={img.alt} className="shortImgStyle" src={img.src} />
        </span>
      </div>
    );
  });
};

export default SignupImageList;

const ImageList = [
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
