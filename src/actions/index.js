import { API_AREAS, API_STATIONS } from '../constants';
import getJson from '../helpers/get-json';

export const SET_ZONE = 'SET_AREA';
export const SET_MUNICIPALITY = 'SET_MUNICIPALITY';
export const SET_STATION = 'SET_STATION';
export const INITIALIZE_DATA = 'INITIALIZE_DATA';
export const INITIALIZE_DATA_RESOLVED = 'INITIALIZE_DATA_RESOLVED';
export const FETCH_READINGS = 'fetch-readings';
export const FETCH_READINGS_RESOLVED = 'fetch-readings-resolved';

function initializeData() {
  return {
    type: INITIALIZE_DATA
  };
}

function initializeDataResolved(zones, stations) {
  return {
    type: INITIALIZE_DATA_RESOLVED,
    zones,
    stations
  };
}

export function fetchInitData() {
  return (dispatch) => {
    dispatch(initializeData());
    return Promise.all([getJson(API_AREAS), getJson(API_STATIONS)])
      .then(data => dispatch(initializeDataResolved(data[0], data[1])));
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

export function selectStation(station) {
  return {
    type: SET_STATION,
    station
  };
}
