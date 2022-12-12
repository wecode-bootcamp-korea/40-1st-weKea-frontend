import React, { useEffect, useState } from 'react';
import './Detail.scss';

const Detail = () => {
  const [detailImageList, setDetailImagelist] = useState([]);

  useEffect(() => {
    fetch('/data/productDetailImageList.json', { method: 'GET' })
      .then(res => res.jons())
      .then(data => {
        setDetailImagelist(data);
      });
  }, []);

  return (
    <div className="detail">
      <main className="detailMainContainer">
        <ul className="detailImageContainer">
          {detailImageList.map(img => {
            return (
              <li key={img.id} className="detailImageBox">
                <img
                  className="detailImageEach"
                  src={img.imgUrl}
                  alt="detailImage"
                />
              </li>
            );
          })}
        </ul>
        <div className="detailDescription" />
      </main>
    </div>
  );
};

export default Detail;
