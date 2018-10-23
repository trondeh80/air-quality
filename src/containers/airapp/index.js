import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/index';
import ChartList from '../../components/chart-list/index';
import BarChart from '../../components/bar-chart/index';
import { fetchInitData } from '../../actions';

class AirApp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { props } = this;
    props.fetchInitData();
  }

  render() {
    return (
      <div className="outer-container">
        <Header />
        <ChartList />
      </div>
    );
  }
}

const mapPropsToState = store => ({
  newState: store
});

const mapDispatchToProps = dispatch => ({
  fetchInitData: () => dispatch(fetchInitData())
});

export default connect(mapPropsToState, mapDispatchToProps)(AirApp);
