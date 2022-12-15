import React, { useState, useRef, useEffect } from 'react';
import './EventCarousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EventCarousel = () => {
  const [slideRange, setSlideRange] = useState(0);
  const carouselRef = useRef(null);

  const eventCarouselWidth = 470;

  const goToNext = () => {
    setSlideRange(slideRange - eventCarouselWidth);
  };

  const goToPrev = () => {
    setSlideRange(slideRange + eventCarouselWidth);
  };
  useEffect(() => {
    carouselRef.current.style.transform = `translateX(${slideRange}px)`;
    carouselRef.current.style.transition = '500ms';
  }, [slideRange]);

  return (
    <section className="eventCarousel">
      <div className="titleStyle">진행 중인 이벤트 및 프로모션</div>

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
            display: slideRange === -eventCarouselWidth * 3 ? 'none' : '',
          }}
        >
          <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
        </button>
        <div className="promotionCarouselContainer">
          <div className="imageContainer" ref={carouselRef}>
            {CAROUSEL_LIST.map(data => {
              return (
                <div key={data.id} className="imageBoxEach">
                  <img
                    className="carouselImageStyle"
                    src={data.src}
                    alt={data.alt}
                  />
                  <div className="carouselTextBox">{data.carouselText}</div>
                  <div className="imageLinkButton">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCarousel;

const CAROUSEL_LIST = [
  {
    id: 1,
    src: '/images/Carousel/carousel9.jpg',
    alt: 'carouselImage',
    carouselText: 'Sims & co Family 멤버십을 만나보세요.',
  },
  {
    id: 2,
    src: '/images/Carousel/carousel6.jpg',
    alt: 'carouselImage',
    carouselText: '당신의 주방에 프랑스 감성을 한 스푼 더해 줄 주물 냄비',
  },
  {
    id: 3,
    src: '/images/Carousel/carousel7.jpg',
    alt: 'carouselImage',
    carouselText: '방 안을 식물원으로, 플랜테리어의 정석을 알려드려요.',
  },
  {
    id: 4,
    src: '/images/Carousel/carousel5.jpg',
    alt: 'carouselImage',
    carouselText: '예술품으로 완성되는 감성적인 침실',
  },
  {
    id: 5,
    src: '/images/Carousel/carousel1.jpg',
    alt: 'carouselImage',
    carouselText:
      '행복한 주말, 가족과 함께하는 멋진 디너 파티로 당신을 초대합니다',
  },
];
