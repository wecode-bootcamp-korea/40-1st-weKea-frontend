import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import './Main.scss';

const Main = () => {
  return (
    <div className="mainArray">
      <div className="mainTitleBoxStyle">
        <h1 className="welcomeMessageStyle">Bonjour! 돌아오신 걸 환영해요!</h1>
        <div>
          <a className="loginLinkStyle" href="/login">
            Sims & co Family
          </a>
          에 가입하여 다양한 홈퍼니싱 영감과 할인 혜택, 리워드를 받아보세요.
        </div>
      </div>
      <div className="mainPromoStyle">
        <div className="mainPromoTitle">
          올 겨울, 더 따듯한 우리집을 위해 최대 70% 할인 + 멤버 5% 추가할인
        </div>
        <div className="mainPromoSubTextBox">
          <div className="mainPromoTextStyle">
            다가오는 연말연시를 맞아 더 낮은 가격의 홈퍼니싱 제품으로 사랑하는
            사람과 함께 따뜻한 겨울을 준비하세요. 11월 20일 부터 1월 28일까지
          </div>
          <button className="promoButtonStyle">
            최대 70% 겨울세일 보러 가기
          </button>
        </div>
        <div className="promoImageBox">
          <div className="promoImageBoxEach">
            <a href="">
              <img
                className="promoImage"
                alt="promoImage"
                src="./images/Main/mainPromo1.jpg"
              />
            </a>
          </div>
          <div className="promoImageBoxEach">
            <a href="">
              <img
                className="promoImage"
                alt="promoImage"
                src="./images/Main/mainPromo2.jpg"
              />
            </a>
          </div>
        </div>
        <div className="textPromoBox">
          <div className="textPromoMainText">
            매일 환상적인 크리스마스 마법이 펼쳐지는 집
          </div>
          <div className="textPromoSubText">
            아름답고 황홀한 크리스마스의 낭만과 설렘을 집안 가득 채워보세요.
            겨울을 따뜻하게 밝혀줄 크리스마스 조명부터 산타 모양의 귀여운 장식
            방울까지, 연말을 즐겁게 만들어줄 다양한 IKEA의 크리스마스 제품들을
            만나보세요.
          </div>
          <button className="textPromoButton">크리스마스 마켓 구경가기</button>
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default Main;
