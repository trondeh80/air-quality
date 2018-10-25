import React from 'react';
import parse from 'date-fns/parse';
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
        name: norDate(parse(measurement.fromTime)),
        y: measurement.value,
        color: `#${measurement.color}`
      }))
    }],
    legend: {
      enabled: false
    },
    xAxis: {
      categories: firstItem.values.map(measurement => norDate(parse(measurement.fromTime)))
    }
  };
}

export default function StationTimeChart(props) {
  const { data } = props;
  const options = getStationOptions(data);
  return (<BarChart options={options} />);
}
