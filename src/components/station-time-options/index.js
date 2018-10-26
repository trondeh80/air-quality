import React from 'react';
import AreaSelecter from '../zone-selecter';
import MunicipalitySelecter from '../municipality-selecter';
import StationSelecter from '../station-selecter';
import DateControls from '../date-controls';
import './station-time-options.scss';

export default function StationTimeOptions() {
  return (
    <div className="controls">
      <AreaSelecter />
      <MunicipalitySelecter />
      <StationSelecter />

      <DateControls />
    </div>
  );
}
