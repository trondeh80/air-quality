import { combineReducers } from 'redux';
import {
  INITIALIZE_DATA,
  INITIALIZE_DATA_RESOLVED,
  SET_MUNICIPALITY,
  SET_ZONE,
  SET_STATION,
  STATION_DATA_RESOLVED,
  START_POSITIONING,
  POSITION_RESOLVED,
  START_FETCH_LOCAL_DATA,
  LOCAL_DATA_RESOLVED, SET_FROM_DATE, SET_TO_DATE
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
        selectedStation: action.station,
        isFetchingData: true
      };

    case STATION_DATA_RESOLVED:
      return {
        ...state,
        stationData: action.data,
        isFetchingData: false
      };

    case START_POSITIONING:
      return {
        ...state,
        isFetchingPosition: true
      };

    case POSITION_RESOLVED:
      return {
        ...state,
        isFetchingPosition: false,
        position: action.position
      };

    case START_FETCH_LOCAL_DATA:
      return {
        ...state,
        isFetchingLocalData: true
      };

    case LOCAL_DATA_RESOLVED:
      return {
        ...state,
        isFetchingLocalData: false,
        localData: action.data
      };

    case SET_FROM_DATE:
      return {
        ...state,
        fromDate: action.date
      };

    case SET_TO_DATE:
      return {
        ...state,
        toDate: action.date
      };

    default:
      return { ...state };
  }
}

const rootReducer = combineReducers({
  options: optionsReducer,
});

export default rootReducer;
