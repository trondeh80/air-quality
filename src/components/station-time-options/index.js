import React from 'react';
import AreaSelecter from '../zone-selecter';
import MunicipalitySelecter from '../municipality-selecter';
import StationSelecter from '../station-selecter';
import './station-time-options.scss';

export default function StationTimeOptions(props) {
  return (
    <div className="controls">
      <AreaSelecter />
      <MunicipalitySelecter />
      <StationSelecter />

      <DateFrom />
      <DateTo />
    </div>
  );
}
