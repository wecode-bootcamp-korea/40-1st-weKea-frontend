import React from 'react';
import '/Detail.scss';

const Detail = () => {
  const { id, src, alt } = DETAIL_IMAGES;

  return (
    <div className="detail">
      <nav className="detailNav">제품 러그/매트/데크 러그 장식보/러그s</nav>
      <main className="detailMainContainer">
        <ul className="detailImageContainer">
          <li className="detailImageBox">
            <img className="detailImageEach" src={detailImage} />
          </li>
        </ul>
        <div className="detailDescription" />
      </main>
    </div>
  );
};

export default Detail;
