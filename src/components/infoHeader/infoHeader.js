import React from 'react';
import './infoHeader.scss';

const InfoHeader = () => {

  return (
    <div class="info-header">
      <div class="info-header__info-container">
        <div class="info-header__info-container-half info-header__info-container-half--left">
          <div class="info-header__row info-header__row--left info-header__row-hour">
            <p>London, United Kingdom</p>
            <p>18:35 hs</p>
          </div>
          <div class="info-header__row info-header__row--left info-header__row-temp">
            <label>25°</label>
          </div>
          <div class="info-header__row info-header__row--left info-header__row-pressure">
            <label>1015 hPa</label>
          </div>
          <div class="info-header__row info-header__row--left info-header__row-humidity">
            <label>50%</label>
          </div>
        </div>
        <div class="info-header__info-container-half info-header__info-container-half--right">
          <div class="info-header__row info-header__row-weather">
            <div class="info-header__row-weather__icon-container">
              <i className={`icon icon-sun-and-clouds`}/>
            </div>
          </div>
          <div class="info-header__row info-header__row-max-min-temp">
            <label>26°/14°</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoHeader;