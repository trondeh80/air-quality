import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropdown from '../dropdown';
import { selectStation } from '../../dispatchers';

class StationSelecter extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { setStation, availableStations } = this.props;
    const station = availableStations.find(item => item.station === e.target.value);
    setStation(station);
  }

  getListItems() {
    const { availableStations } = this.props;
    return availableStations && availableStations.length ? availableStations.map(station => ({
      value: station.station,
      label: station.station
    })) : [];
  }

  render() {
    const { availableStations } = this.props;
    const listItems = this.getListItems();
    const emptyValue = {
      defaultValue: '',
      defaultLabel: 'Velg stasjon'
    };

    return (
      <div className="station-selecter header-control">
        <Dropdown
          id="station-select-control"
          items={listItems}
          emptyValue={emptyValue}
          onChange={this.onChange}
          disabled={!availableStations}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  availableStations: state.options.availableStations
});

const mapDispatchToProps = dispatch => ({
  setStation: station => dispatch(selectStation(station))
});

export default connect(mapStateToProps, mapDispatchToProps)(StationSelecter);
