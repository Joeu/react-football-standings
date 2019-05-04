import { combineReducers } from "redux";
import * as types from './types';

const competitionReducer = (state={}, action) => {
  let { standings, loading } = action;
  switch(action.type) {
    case types.FETCH_COMPETITION_BEGIN:
      return {
        ...state,
        standings,
        loading
      }
    case types.FETCH_COMPETITION_SUCCESS:
      return {
        ...state,
        standings,
        loading
      }
    case types.FETCH_COMPETITION_ERROR:
      return {
        ...state,
        loading
      }
    default:
      return state
  }
}

export default combineReducers({
  competitionReducer,
});