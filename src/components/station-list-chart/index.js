import React from 'react';
import BarChart from '../chart';

function getChartData(localData) {
  return {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Målinger i ditt nærområde'
    },
    type: 'bar',
    series: [{
      data: localData.map(station => ({ y: station.value, name: station.station, color: `#${station.color}` }))
    }],
    xAxis: {
      categories: localData.map(station => station.station)
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
