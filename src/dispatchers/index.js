import subHours from 'date-fns/sub_hours';

import {
  API_AREAS,
  API_RADIUS,
  API_STATION_HISTORY,
  API_STATIONS,
  DEFAULT_RADIUS
} from '../constants';

import formatDate from '../helpers/dates';
import getJson from '../helpers/get-json';
import {
  initializeData, initializeDataResolved, localDataResolved,
  positionResolved, startFetchLocalData, startPositioning,
  startSetStation, stationDataResolved
} from '../actions';

export function fetchInitData() {
  return (dispatch) => {
    dispatch(initializeData());
    return Promise.all([getJson(API_AREAS), getJson(API_STATIONS)])
      .then(data => dispatch(initializeDataResolved(data[0], data[1])));
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

export function selectStation(station,
  fromDate = subHours(new Date(), 24 * 7),
  toDate = new Date()) {
  return (dispatch) => {
    dispatch(startSetStation(station));
    return getJson(`${API_STATION_HISTORY}/${formatDate(fromDate)}/${formatDate(toDate)}/${station.station}?components=pm10`)
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
