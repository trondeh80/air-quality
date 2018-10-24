import React, { Component } from 'react';
import AreaSelecter from '../zone-selecter';
import MunicipalitySelecter from '../municipality-selecter';
import StationSelecter from '../station-selecter';
import BurgerMenu from '../burger-menu';

import './header.scss';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">AirQuality</div>
        <BurgerMenu>
          <div className="controls">
            <AreaSelecter />
            <MunicipalitySelecter />
            <StationSelecter />
          </div>
        </BurgerMenu>
      </header>
    );
  }
}
