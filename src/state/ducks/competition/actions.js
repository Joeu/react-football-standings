import * as apiService from '../../utils/apiService';
import * as types from './types';

export const fetchCompetition = (id, year) => {
  return async dispatch => {
    dispatch(fetchCompetitionBegin());
    try {
      const standings = await apiService.fetchCompetition(id, year);
      return dispatch(fetchCompetitionSuccess(standings));
    } catch(error) {
      dispatch(fetchCompetitionError(error));
    }
  }
}

export const fetchCompetitionBegin = () => {
  return {
    type: types.FETCH_COMPETITION_BEGIN,
    loading: true
  }
}

export const fetchCompetitionSuccess = (standings) => {
  return {
    type: types.FETCH_COMPETITION_SUCCESS,
    standings,
    loading: false
  }
}

export const fetchCompetitionError = (error) => {
  return {
    type: types.FETCH_COMPETITION_ERROR,
    loading: false,
    error
  }
}