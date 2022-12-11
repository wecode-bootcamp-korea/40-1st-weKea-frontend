import React, { useState, useRef, useEffect } from 'react';
import './EventCarousel.scss';

const EventCarousel = () => {
  const [slideRange, setSlideRange] = useState(0);
  const carouselRef = useRef(null);

  const goToNext = () => {
    setSlideRange(slideRange - 470);
  };

  const goToPrev = () => {
    setSlideRange(slideRange + 470);
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
          &#60;
        </button>
        <button
          className="nextButton"
          onClick={goToNext}
          style={{ display: slideRange === -470 * 3 ? 'none' : '' }}
        >
          &#62;
        </button>
        <div className="aaa">
          <div className="imageContainer" ref={carouselRef}>
            {CAROUSEL_LIST.map(data => {
              return (
                <div key={data.id} className="imageBoxEach">
                  <img
                    className="carouselImageStyle"
                    src={data.src}
                    alt={data.alt}
                  />
                  <div className="carouselTextBox">
                    Sims & co Family 멤버십을 만나보세요.
                    <button className="imageLinkButton">{data.btnText}</button>
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
    btnText: '주방',
  },
  {
    id: 2,
    src: '/images/Carousel/carousel6.jpg',
    alt: 'carouselImage',
    btnText: '홈데코/장식품',
  },
  {
    id: 3,
    src: '/images/Carousel/carousel7.jpg',
    alt: 'carouselImage',
    btnText: '키즈',
  },
  {
    id: 4,
    src: '/images/Carousel/carousel5.jpg',
    alt: 'carouselImage',
    btnText: '펫',
  },
  {
    id: 5,
    src: '/images/Carousel/carousel1.jpg',
    alt: 'carouselImage',
    btnText: 'pet',
  },
];