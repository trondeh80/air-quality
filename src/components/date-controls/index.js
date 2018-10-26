import React, { Component } from 'react';
import { connect } from 'react-redux';
import subHours from 'date-fns/sub_hours';
import parse from 'date-fns/parse';
import DateControl from './date-control';
import { selectStation } from '../../dispatchers';

class DateControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateFrom: props.dateFrom || subHours(new Date(), 24 * 7),
      dateTo: props.dateTo || new Date(),
      station: props.station
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(dateStr, field) {
    const date = parse(dateStr);
    this.setState(() => ({ [field]: date }), this.onStateChange.bind(this));
  }

  onStateChange() {
    const { dateFrom, dateTo, station } = this;
    this.props.selectStation(station, dateFrom, dateTo);
  }

  render() {
    const { dateFrom, dateTo, station } = this.state;
    return (
      <div className="date-controls">
        <div>
          <DateControl
            date={dateFrom}
            onChange={e => this.onChange(e, 'dateFrom')}
            field="dateFrom"
            label="Fra"
            id="from-date"
            disabled={!station}
          />

          <DateControl
            date={dateTo}
            onChange={e => this.onChange(e, 'dateTo')}
            field="dateTo"
            label="Til"
            id="to-date"
            disabled={!station}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  station: state.options.selectedStation,
  dateFrom: state.options.dateFrom,
  dateTo: state.options.dateTo
});

const dispatchMap = dispatch => ({
  selectStation: (station, dateFrom, dateTo) => dispatch(selectStation(station, dateFrom, dateTo))
});

export default connect(mapStateToProps, dispatchMap)(DateControls);
