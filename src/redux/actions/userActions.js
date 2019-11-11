/* eslint-disable no-unused-vars */
import axios from './axios';
import {
  GET_USERS_SUCCESS,
  GET_USERS_LOADING,
  GET_USERS_ERROR,
  GET_FILTERED_USERS,
} from './Types';

export const setUsersLoading = () => {
  return {
    type: GET_USERS_LOADING,
  };
};

export const getUsers = () => dispatch => {
  dispatch(setUsersLoading());
  let url = `/`;
  axios
    .get(url)
    .then(res => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: res,
      });
    })
    .catch(err =>
      dispatch({
        type: GET_USERS_ERROR,
        payload: {},
      })
    );
};

export const getFilteredUsers = selectedArray => {
  return {
    type: GET_FILTERED_USERS,
    payload: { selectedArray },
  };
};
