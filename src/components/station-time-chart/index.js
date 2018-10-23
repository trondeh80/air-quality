import React from 'react';
import BarChart from '../chart';
import { norDate } from '../../helpers/dates';

function getStationOptions(stationData) {
  const firstItem = stationData[0];
  return {
    title: {
      text: `Data for stasjon: ${firstItem.station}`
    },
    series: [{
      data: firstItem.values.map(measurement => ({
        name: norDate(new Date(measurement.fromTime)),
        y: measurement.value,
        color: `#${measurement.color}`
      }))
    }],
    legend: {
      enabled: false
    },
    xAxis: {
      categories: firstItem.values.map(measurement => norDate(new Date(measurement.fromTime)))
    }
  };
}

export default function StationTimeChart(props) {
  const { data } = props;
  const options = getStationOptions(data);
  return (<BarChart options={options} />);
}
