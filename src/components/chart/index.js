import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function Chart(props) {
  const { options } = props;
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
}
