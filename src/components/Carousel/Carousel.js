import React from 'react';
import './Carousel.scss';

const Carousel = () => {
  const prevButton = document.querySelector('prevButton');
  const nextButton = document.querySelector('nextButton');

  return (
    <section className="carousel">
      <div className="titleStyle">공간별 제품 쇼핑하기</div>
      <button className="prevButton">&#60;</button>
      <button className="nextButton">&#62;</button>
      <div className="imageContainer">
        {CAROUSEL_LIST.map(data => {
          return (
            <div key={data.id} className="imageBoxEach">
              <button className="imageLinkButton">{data.btnText}</button>
              <img
                className="carouselImageStyle"
                src={data.src}
                alt={data.alt}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Carousel;

const CAROUSEL_LIST = [
  {
    id: 1,
    src: '/images/Carousel/carousel1.jpg',
    alt: 'carouselImage',
    btnText: '침실',
  },
  {
    id: 2,
    src: '/images/Carousel/carousel2.jpg',
    alt: 'carouselImage',
    btnText: '홈오피스',
  },
  {
    id: 3,
    src: '/images/Carousel/carousel3.jpg',
    alt: 'carouselImage',
    btnText: '다이닝',
  },
  {
    id: 4,
    src: '/images/Carousel/carousel4.jpg',
    alt: 'carouselImage',
    btnText: '거실',
  },
  {
    id: 5,
    src: '/images/Carousel/carousel5.jpg',
    alt: 'carouselImage',
    btnText: '주방',
  },
  {
    id: 6,
    src: '/images/Carousel/carousel6.jpg',
    alt: 'carouselImage',
    btnText: '홈데코/장식품',
  },
  {
    id: 7,
    src: '/images/Carousel/carousel7.jpg',
    alt: 'carouselImage',
    btnText: '이동하기',
  },
  {
    id: 8,
    src: '/images/Carousel/carousel9.jpg',
    alt: 'carouselImage',
    btnText: 'gotoBtn',
  },
  {
    id: 9,
    src: '/images/Carousel/carousel1.jpg',
    alt: 'carouselImage',
    btnText: 'pet',
  },
];
