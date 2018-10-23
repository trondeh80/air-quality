import React from 'react';
import { connect } from 'react-redux';
import BarChart from '../bar-chart';

function ChartList(props) {
  const { selectedStation } = props;
  return (
    <div className="container chart-container">
      {
        selectedStation && (
          <div className="chart-container-inner">
            <BarChart />
          </div>
        )
      }
    </div>
  );
}

const mapStateToProps = state => ({
  selectedStation: state.options.selectedStation
});

export default connect(mapStateToProps)(ChartList);
