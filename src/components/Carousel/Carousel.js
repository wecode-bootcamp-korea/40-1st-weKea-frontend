import React from 'react';
import './Carousel.scss';

const Carousel = () => {
  return (
    <section className="carousel">
      <div className="titleStyle">공간별 제품 쇼핑하기</div>
      <div className="imageBox">
        {CAROUSEL_IMG_LIST.map(image => {
          return (
            <img
              key={image.id}
              className="carouselImageStyle"
              src={image.src}
              alt={image.alt}
            />
          );
        })}
      </div>
      <button />
    </section>
  );
};

export default Carousel;

const CAROUSEL_IMG_LIST = [
  { id: 1, src: './images/carousel1.jpg', alt: 'carouselImage' },
  { id: 2, src: './images/carousel2.jpg', alt: 'carouselImage' },
  { id: 3, src: './images/carousel3.jpg', alt: 'carouselImage' },
  { id: 4, src: './images/carousel4.jpg', alt: 'carouselImage' },
  { id: 5, src: './images/carousel5.jpg', alt: 'carouselImage' },
  { id: 6, src: './images/carousel6.jpg', alt: 'carouselImage' },
  { id: 7, src: './images/carousel7.jpg', alt: 'carouselImage' },
  { id: 8, src: './images/carousel9.jpg', alt: 'carouselImage' },
  { id: 9, src: './images/carousel1.jpg', alt: 'carouselImage' },
];
