import React from 'react';
import './filterDropDown.scss';

const FilterDropDown = () => {
  return (
    <div className="filterDropDown">
      <fieldset>
        {FILTER_LIST.map(({ id, list }) => {
          return (
            <label className="filterList" key={id}>
              <span className="filterText">{list}</span>
              <div className="filterRadioWrapper">
                <input className="filterRadio" type="radio" name="radioName" />
                <span className="filterRadioSymbol" />
              </div>
            </label>
          );
        })}
      </fieldset>
    </div>
  );
};

export default FilterDropDown;

const FILTER_LIST = [
  { id: 1, list: '낮은 가격순' },
  { id: 2, list: '높은 가격순' },
  { id: 3, list: '이름순' },
  { id: 4, list: '인기순' },
];
