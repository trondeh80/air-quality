import React, { Component } from 'react';
import format from 'date-fns/format';

export default class DateControl extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const {
      label,
      id,
      field,
      date,
      disabled
    } = this.props;
    return (
      <div className={`date ${field || ''}`}>
        <label htmlFor={id}>{label}</label>
        <input type="date" value={format(date, 'YYYY-MM-DD')} id={id} disabled={disabled} onChange={this.onChange} />
      </div>
    );
  }
}
