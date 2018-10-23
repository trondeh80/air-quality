import React, { Component } from 'react';
import AreaSelecter from '../zone-selecter';
import MunicipalitySelecter from '../municipality-selecter';
import StationSelecter from '../station-selecter';

import './header.scss';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">AirQuality</div>
        <div className="controls">
          <AreaSelecter />
          <MunicipalitySelecter />
          <StationSelecter />
        </div>
      </header>
    );
  }
}
