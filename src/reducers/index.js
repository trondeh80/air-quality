import { combineReducers } from 'redux';
import {
  INITIALIZE_DATA,
  INITIALIZE_DATA_RESOLVED,
  SET_MUNICIPALITY,
  SET_ZONE,
  SET_STATION
} from '../actions';

function optionsReducer(state = {}, action) {
  switch (action.type) {
    case INITIALIZE_DATA:
      return {
        ...state,
        isLoading: true
      };

    case INITIALIZE_DATA_RESOLVED:
      return {
        ...state,
        isLoading: false,
        zones: [...action.zones],
        stations: [...action.stations]
      };

    case SET_ZONE:
      return {
        ...state,
        selectedZone: action.zone,
        availableStations: null
      };

    case SET_MUNICIPALITY:
      return {
        ...state,
        selectedMunicipality: action.municipality,
        availableStations: state.stations.filter(station => station.zone === state.selectedZone
          && station.municipality === action.municipality)
      };

    case SET_STATION:
      return {
        ...state,
        selectedStation: action.station
      };

    default:
      return { ...state };
  }
}

const rootReducer = combineReducers({
  options: optionsReducer,
});

export default rootReducer;
