import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectZone } from '../../actions';
import getUnique from '../../helpers/get-unique';
import Dropdown from '../dropdown';

class ZoneSelecter extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { setZone } = this.props;
    setZone(e.target.value);
  }

  getListItems() {
    const { zones } = this.props;
    if (zones && zones.length) {
      const uniqueZones = getUnique(zones, 'zone');
      return uniqueZones && uniqueZones.length ? uniqueZones.map(zone => ({
        value: zone,
        label: zone
      })) : [];
    }
    return [];
  }

  render() {
    const { selectedZone } = this.props;
    const listItems = this.getListItems();
    const emptyValue = {
      defaultValue: '',
      defaultLabel: 'Velg sone'
    };

    return (
      <div className="zone-selecter header-control">
        <Dropdown
          id="zone-select-control"
          items={listItems}
          emptyValue={emptyValue}
          selectedValue={selectedZone}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  zones: state.options.zones,
  selectedZone: state.options.selectedZone
});

const mapDispatchToProps = dispatch => ({
  setZone: zone => dispatch(selectZone(zone))
});

export default connect(mapStateToProps, mapDispatchToProps)(ZoneSelecter);
