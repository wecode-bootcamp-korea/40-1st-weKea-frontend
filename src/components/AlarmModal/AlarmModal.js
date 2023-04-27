import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './alarmModal.scss';
import { Link } from 'react-router-dom';

const AlarmModal = ({ setAlarmOn, className }) => {
  const onCloseBtnClicked = () => {
    setAlarmOn(false);
  };
  return (
    <div className={className}>
      <div onClick={onCloseBtnClicked} className="alarmModalButton">
        <FontAwesomeIcon className="fontAwesome" icon="fa-solid fa-xmark" />
      </div>
      <div className="alarmModalTextWrapper">
        <span className="alarmModalText">
          제품이 장바구니에 추가되었습니다.
        </span>

        <span className="alarmModalLink">
          <Link to="/cart">장바구니로 가기</Link>
        </span>
      </div>
    </div>
  );
};

export default AlarmModal;
