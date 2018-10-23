import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default class BarChart extends Component {
  render() {
    const { options } = this.props;
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    );
  }
}
