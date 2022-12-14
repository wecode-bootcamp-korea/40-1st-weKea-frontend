import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ImageModal.scss';

const ImageModal = ({ className, setIsClicked, isClicked }) => {
  const ImageModalRef = useRef(null);

  const onClickHandler = e => {
    setIsClicked(false);
  };

  return (
    <div ref={ImageModalRef} className={className}>
      <div className="imageModalBox">
        <img
          className="modalImage"
          src="/images/Detail/detail.jpg2.jpg"
          alt="imageModal"
        />
        <div className="closeButton">
          <FontAwesomeIcon icon="fa-solid fa-xmark" onClick={onClickHandler} />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
