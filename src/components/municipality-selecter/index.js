import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropdown from '../dropdown';
import { selectMunicipality } from '../../actions';
import getUniqueNames from '../../helpers/get-unique';

class MunicipalitySelecter extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { setMunicipality } = this.props;
    setMunicipality(e.target.value);
  }

  getMunicipalities() {
    const { zones, selectedZone } = this.props;
    if (!selectedZone) {
      return [];
    }
    const list = zones.filter(zoneItem => zoneItem.zone === selectedZone);
    return getUniqueNames(list, 'municipality');
  }

  getListItems() {
    const municipalities = this.getMunicipalities();
    return municipalities && municipalities.length ? municipalities.map(municipality => ({
      value: municipality,
      label: municipality
    })) : [];
  }

  render() {
    const { selectedZone } = this.props;
    const listItems = this.getListItems();
    const emptyValue = {
      defaultValue: '',
      defaultLabel: 'Velg kommune'
    };

    return (
      <div className="municipality-selecter header-control">
        <Dropdown
          id="municipality-select-control"
          items={listItems}
          emptyValue={emptyValue}
          onChange={this.onChange}
          disabled={!selectedZone}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  zones: state.options.zones,
  municipalities: state.options.municipalities,
  selectedZone: state.options.selectedZone,
  selectedMunicipality: state.options.selectedMunicipality
});

const mapDispatchToProps = dispatch => ({
  setMunicipality: municipality => dispatch(selectMunicipality(municipality))
});

export default connect(mapStateToProps, mapDispatchToProps)(MunicipalitySelecter);
