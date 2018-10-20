import { combineReducers } from 'redux';
import { SELECT_OPTIONS } from '../actions';

function selectedOptions(state = {}, action) {
  switch (action.type) {
    case SELECT_OPTIONS:
      return { city: action.city, dateFrom: action.dateFrom, dateTo: action.dateTo };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  selectedOptions,
});

export default rootReducer;
