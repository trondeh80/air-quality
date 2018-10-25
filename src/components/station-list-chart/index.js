import React from 'react';
import BarChart from '../chart';

function getChartData(stationList) {
  return {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Målinger i ditt nærområde'
    },
    type: 'bar',
    series: [{
      data: stationList.map(station => ({ y: station.value, name: station.station, color: `#${station.color}` }))
    }],
    xAxis: {
      categories: stationList.map(station => station.station)
    },
    legend: {
      enabled: false
    }
  };
}

export default function StationListChart(props) {
  const { stations } = props;
  return (
    <BarChart options={getChartData(stations)} />
  );
}
