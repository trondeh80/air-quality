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

function startSetStation(station) {
  return {
    type: SET_STATION,
    station,
  };
}

function stationDataResolved(data) {
  return {
    type: STATION_DATA_RESOLVED,
    data
  };
}

function startPositioning() {
  return {
    type: START_POSITIONING
  };
}

function positionResolved(position) {
  return {
    type: POSITION_RESOLVED,
    position
  };
}

function startFetchLocalData() {
  return {
    type: START_FETCH_LOCAL_DATA
  };
}

function localDataResolved(data) {
  return {
    type: LOCAL_DATA_RESOLVED,
    data
  };
}

function fetchDataForPosition(position) {
  return (dispatch) => {
    const { coords } = position;
    dispatch(startFetchLocalData());
    return getJson(`${API_RADIUS}/${coords.latitude}/${coords.longitude}/${DEFAULT_RADIUS}`)
      .then(data => dispatch(localDataResolved(data)));
  };
}

export function selectStation(station) {
  return (dispatch) => {
    dispatch(startSetStation(station));
    const dayInterval = 3600 * 24 * 1000;
    const today = new Date();
    const fromDate = getUTC(today) - dayInterval;
    const lastWeek = new Date(fromDate);
    return getJson(`${API_STATION_HISTORY}/${formatDate(lastWeek)}/${formatDate(today)}/${station.station}?components=pm10`)
      .then(data => dispatch(stationDataResolved(data)));
  };
}

export function fetchUserPosition() {
  return (dispatch) => {
    dispatch(startPositioning());
    return new Promise((resolve) => {
      if ('geolocation' in navigator) {
        const { geolocation } = navigator;
        geolocation.getCurrentPosition((position) => {
          dispatch(positionResolved(position));
          dispatch(fetchDataForPosition(position));
          resolve(position);
        });
      }
    });
  };
}
