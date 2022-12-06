import React from 'react';
import { Link } from 'react-router-dom';
import FOOTER_DATA from './footerData';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__first-column">
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
          <Link className="footer__link-button" to="#">
            IKEA Family 가입하기
          </Link>
        </div>
        <div className="footer__lists">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
          <ul>
            <li>
              <ul>
                <li>123</li>
              </ul>
            </li>
          </ul>
          {FOOTER_DATA.map((list, i) => {
            return (
              <ul>
                <li />
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
        </div>
      </div>
      <div className="footer__second-column">
        <div className="footer__copyright">
          <span>© Inter IKEA Systems B.V 1999-2022</span>
          <ul className="footer__copyright-lists">
            <li>개인정보처리방침 </li>
            <li>쿠키 정책</li>
            <li>쿠키 설정</li>
            <li>웹사이트 이용약관</li>
            <li>Responsible disclosure</li>
          </ul>
        </div>
      </div>
      <div className="footer__third-column">
        <div className="footer__information">info</div>
      </div>
    </footer>
  );
};

export default Footer;
