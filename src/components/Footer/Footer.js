import React from 'react';
import { Link } from 'react-router-dom';
import FOOTER_DATA from './footerData';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="firstColumn">
        <div className="footer__link">
          <h3>IKEA Family</h3>
          <p>
            지금 IKEA Family에 무료로 가입하고
            <br />
            다양한 멤버 전용 혜택을 누리세요.
          </p>
          <p>
            <Link to="#">자세히 보기</Link>
          </p>
          <button className="footer__link-button" to="#">
            IKEA Family 가입하기
          </button>
        </div>
        {/* <div className="footer__lists"> */}
        {FOOTER_DATA.map(footerLists => {
          return (
            <ul key={footerLists.id}>
              <h3 className="listTitle">{footerLists.title}</h3>

              {footerLists.list.map((list, i) => {
                return (
                  <li key={i} className="listContent">
                    {list}
                  </li>
                );
              })}
            </ul>
          );
        })}
        <ul>
          <ul>
            <li />
          </ul>
          <ul>
            <li />
          </ul>
        </ul>
        {/* </div> */}
      </section>
      <section className="secondColumn">
        <div className="footer__copyright">
          <span>© Inter WEKEA Systems B.V 1999-2022</span>
          <ul className="footer__copyright-lists">
            <li>개인정보처리방침 </li>
            <li>쿠키 정책</li>
            <li>쿠키 설정</li>
            <li>웹사이트 이용약관</li>
            <li>Responsible disclosure</li>
          </ul>
        </div>
      </section>
      <section className="thirdColumn">
        <div className="footerInformation">
          <span>WEKEA 코리아</span>
          <span>주소 : 서울시 강남구 테헤란로 427 위워크 타워</span>
          <span>사업자 등록번호 : 123-45-67789</span>
          <span>대표자 : 프레드릭 요한슨</span>
          <span>통신판매업 신고 : 2022-서울-0101</span>
          <span>TEL : 1234-1234</span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
