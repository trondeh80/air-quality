import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/index';
import ChartList from '../chart-list/index';
import { fetchInitData, fetchUserPosition } from '../../dispatchers';

class AirApp extends Component {
  componentDidMount() {
    const { props } = this;
    props.fetchInitData();
    props.fetchUserPosition();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div className="outer-container">
        <Header />
        <div className="container">
          {
            isLoading && <div className="loading">Laster data...</div>
          }
          <ChartList />
        </div>
      </div>
    );
  }
}

const mapPropsToState = state => ({
  isLoading: state.options.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchInitData: () => dispatch(fetchInitData()),
  fetchUserPosition: () => dispatch(fetchUserPosition())
});

export default connect(mapPropsToState, mapDispatchToProps)(AirApp);
