import * as apiService from '../../utils/apiService';
import * as types from './types';

export const fetchCompetition = (id) => {
  return async dispatch => {
    dispatch(fetchCompetitionBegin());
    try {
      const response = await apiService.fetchCompetition(id);
      if (response.errorCode) {
        dispatch(fetchCompetitionError(response));
      } else {
        dispatch(fetchCompetitionSuccess(response));
      }
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

export const fetchCompetitionSuccess = (response) => {
  return {
    type: types.FETCH_COMPETITION_SUCCESS,
    payload: response,
    loading: false
  }
}

export const fetchCompetitionError = (error) => {
  return {
    type: types.FETCH_COMPETITION_ERROR,
    loading: false,
    payload: error
  }
}