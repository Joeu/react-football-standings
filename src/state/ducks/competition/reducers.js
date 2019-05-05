import * as types from './types';

const competitionReducer = (state={}, action) => {
  let { payload, loading } = action;
  switch(action.type) {
    case types.FETCH_COMPETITION_BEGIN:
      return {
        loading
      }
    case types.FETCH_COMPETITION_SUCCESS:
      return {
        ...state,
        payload,
        loading
      }
    case types.FETCH_COMPETITION_ERROR:
      return {
        ...state,
        payload,
        loading
      }
    default:
      return state
  }
}

export default competitionReducer;