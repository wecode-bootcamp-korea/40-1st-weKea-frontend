import React, { useEffect, useState } from 'react';
import './Detail.scss';

const Detail = () => {
  const [detailImageList, setDetailImagelist] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/productDetailImageList.json', {
      method: 'GET',
      headers: { Accept: 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        setDetailImagelist(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/productList.json', {
      method: 'GET',
      headers: { Accept: 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data);
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
        <ul>
          <li className="detailList" />
        </ul>
      </main>
    </div>
  );
};

export default Detail;
