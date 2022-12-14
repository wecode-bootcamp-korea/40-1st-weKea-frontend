import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ImageModal.scss';

const ImageModal = () => {
  return (
    <div className="imageModalContainer">
      <div className="imageModalBox">
        <img
          className="modalImage"
          src="/images/Detail/detail.jpg2.jpg"
          alt="imageModal"
        />
        <div className="closeButton">
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
