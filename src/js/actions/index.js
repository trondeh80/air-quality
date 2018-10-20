export const SELECT_OPTIONS = 'select-options';
export const FETCH_READINGS = 'fetch-readings';
export const FETCH_READINGS_RESOLVED = 'fetch-readings-resolved';

export function selectOptions({ city, dateFrom, dateTo }) {
  return {
    type: SELECT_OPTIONS,
    city,
    dateFrom,
    dateTo,
  };
}

export function fetchReadings({ city, dateFrom, dateTo }) {
  return (dispatch, getState) => {
    // Todo: use fetch
  };
}
