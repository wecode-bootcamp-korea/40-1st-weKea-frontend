import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import FOOTER_DATA from './footerData';
import './footer.scss';

const interruptedRoute = ['signup', 'login'];

const Footer = () => {
  const { pathname } = useLocation();
  const isHideFooter = interruptedRoute.some(path => pathname.includes(path));

  if (isHideFooter) return;

  return (
    <footer className="footer">
      <section className="footerMainRow">
        <div className="footerSignUp">
          <h3 className="listTitle">SIMS Family</h3>
          <p className="footerSignUpText">
            지금 SIMS Family에 무료로 가입하고
            <br />
            다양한 멤버 전용 혜택을 누리세요.
          </p>
          <p className="detailLink">
            <Link to="#">자세히 보기</Link>
          </p>
          <Link className="footerLinkButton" to="/signup">
            SIMS Family 가입하기
          </Link>
        </div>

        {FOOTER_DATA.map(footerData => {
          return (
            <ul className="footerColumnList" key={footerData.id}>
              <h3 className="listTitle">{footerData.title}</h3>
              {footerData.list.map((list, i) => {
                return (
                  <li key={list.id} className="listContent">
                    {list.title}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </section>

      <section className="footerCopyRightRow">
        <p className="copyRightText">© Inter Sims Systems B.V 1999-2022</p>
        <ul className="footerCopyRightLists">
          {FOOTER_COPYRIGHT.map(list => {
            return (
              <li className="footerCopyRightItem" key={list.id}>
                {list.list}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="footerInformationRow">
        <p>
          Sims 코리아
          <br />
          주소 : 서울시 강남구 테헤란로 427 위워크 타워
          <br />
          사업자 등록번호 : 123-45-67890
          <br />
          대표자 : 배효빈
          <br />
          통신판매업 신고 : 2022-서울-0101
          <br />
          TEL : 1234-1234
        </p>
      </section>
    </footer>
  );
};

export default Footer;

const FOOTER_COPYRIGHT = [
  { id: 1, list: '개인정보처리방침' },
  { id: 2, list: '쿠키 정책' },
  { id: 3, list: '쿠키 설정' },
  { id: 4, list: '웹사이트 이용약관' },
  { id: 5, list: 'Responsible disclosure' },
];
