import React, { useState, useRef, useEffect } from 'react';
import './CategoryCarousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CategoryCarousel = () => {
  const [slideRange, setSlideRange] = useState(0);
  const carouselRef = useRef(null);

  const categoryCarouselWidth = 267;

  const goToNext = () => {
    setSlideRange(slideRange - categoryCarouselWidth);
  };

  const goToPrev = () => {
    setSlideRange(slideRange + categoryCarouselWidth);
  };
  useEffect(() => {
    carouselRef.current.style.transform = `translateX(${slideRange}px)`;
    carouselRef.current.style.transition = '500ms';
  }, [slideRange]);

  return (
    <section className="categoryCarousel">
      <div className="titleStyle">공간별 제품 쇼핑하기</div>
      <div className="carouselContainer">
        <button
          className="prevButton"
          onClick={goToPrev}
          style={{ display: slideRange === 0 ? 'none' : '' }}
        >
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
        </button>
        <button
          className="nextButton"
          onClick={goToNext}
          style={{
            display: slideRange === -categoryCarouselWidth * 4 ? 'none' : '',
          }}
        >
          <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
        </button>
        <div className="categoryCarouselContainer">
          <div className="imageContainer" ref={carouselRef}>
            {CAROUSEL_LIST.map(data => {
              return (
                <div key={data.id} className="imageBoxEach">
                  <img
                    className="carouselImageStyle"
                    src={data.src}
                    alt={data.alt}
                  />
                  <button className="imageLinkButton">{data.btnText}</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;

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
    btnText: '키즈',
  },
  {
    id: 8,
    src: '/images/Carousel/carousel9.jpg',
    alt: 'carouselImage',
    btnText: '펫',
  },
  {
    id: 9,
    src: '/images/Carousel/carousel1.jpg',
    alt: 'carouselImage',
    btnText: 'pet',
  },
];
