import { getData } from '../utils/api';
export const DISPLAY = 'display';
export const SET_REQUESTED_TRUE = 'set_requested_true';
export const SET_REQUESTED_FALSE = 'set_requested_false';
export const ADD_USERS = 'add_users';
export const SET_ACTIVE_LINK = 'set_active_link';

export function load(from, to, tab) {
  return dispatch => {
    dispatch(setRequestedTrue());
    getData(from, to).then(data => {
      dispatch(display(data, tab));
    });
  };
}

export function setActiveLink(tab) {
  return {
    type: SET_ACTIVE_LINK,
    payload: {
      tab
    }
  };
}

export function addUsers(tab) {
  return {
    type: ADD_USERS,
    payload: {
      tab
    }
  };
}

function display(data, tab) {
  return {
    type: DISPLAY,
    payload: {
      data,
      tab
    }
  };
}

export function setRequestedTrue() {
  return {
    type: SET_REQUESTED_TRUE
  };
}

export function setRequestedFalse() {
  return {
    type: SET_REQUESTED_FALSE
  };
}
