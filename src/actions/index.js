import {
  API_AREAS,
  API_STATIONS,
  API_RADIUS,
  API_STATION_HISTORY,
  DEFAULT_RADIUS,
} from '../constants';
import getJson from '../helpers/get-json';
import formatDate, { getUTC } from '../helpers/dates';

export const INITIALIZE_DATA = 'INITIALIZE_DATA';
export const INITIALIZE_DATA_RESOLVED = 'INITIALIZE_DATA_RESOLVED';
export const SET_ZONE = 'SET_AREA';
export const SET_MUNICIPALITY = 'SET_MUNICIPALITY';
export const SET_STATION = 'SET_STATION';
export const STATION_DATA_RESOLVED = 'STATION_DATA_RESOLVED';
export const START_POSITIONING = 'START_POSITIONING';
export const POSITION_RESOLVED = 'POSITION_RESOLVED';
export const START_FETCH_LOCAL_DATA = 'START_FETCH_LOCAL_DATA';
export const LOCAL_DATA_RESOLVED = 'LOCAL_DATA_RESOLVED';

export function initializeData() {
  return {
    type: INITIALIZE_DATA
  };
}

export function initializeDataResolved(zones, stations) {
  return {
    type: INITIALIZE_DATA_RESOLVED,
    zones,
    stations
  };
}

export function selectZone(zone) {
  return {
    type: SET_ZONE,
    zone
  };
}

export function selectMunicipality(municipality) {
  return {
    type: SET_MUNICIPALITY,
    municipality
  };
}

export function startSetStation(station) {
  return {
    type: SET_STATION,
    station,
  };
}

export function stationDataResolved(data) {
  return {
    type: STATION_DATA_RESOLVED,
    data
  };
}

export function startPositioning() {
  return {
    type: START_POSITIONING
  };
}

export function positionResolved(position) {
  return {
    type: POSITION_RESOLVED,
    position
  };
}

export function startFetchLocalData() {
  return {
    type: START_FETCH_LOCAL_DATA
  };
}

export function localDataResolved(data) {
  return {
    type: LOCAL_DATA_RESOLVED,
    data
  };
}
