import React from 'react';
import { connect } from 'react-redux';
import StationListChart from '../../components/station-list-chart/index';
import StationTimeChart from '../../components/station-time-chart/index';

function ChartList(props) {
  const {
    selectedStation,
    localData,
    stationData
  } = props;

  return (
    <div className="container chart-container">
      {
        !!stationData && stationData.length && !!selectedStation ? (
          <div className="single-station">
            <StationTimeChart data={stationData} />
          </div>
        ) : null
      }
      {
        localData && (
          <div className="local-data">
            <StationListChart stations={localData} />
          </div>
        )
      }
    </div>
  );
}

const mapStateToProps = state => ({
  stationData: state.options.stationData,
  selectedStation: state.options.selectedStation,
  localData: state.options.localData
});

export default connect(mapStateToProps)(ChartList);
