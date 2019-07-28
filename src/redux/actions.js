import { getData } from '../utils/api';
export const DISPLAY = 'display';
export const SET_REQUESTED_TRUE = 'set_requested_true';
export const SET_REQUESTED_FALSE = 'set_requested_false';

export function load(from, to, tab) {
  return dispatch => {
    dispatch(setRequestedTrue())
    getData(from, to)
      .then(data => {
        dispatch(display(data, tab));
      });
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

function setRequestedTrue() {
  return {
    type: SET_REQUESTED_TRUE
  }
}

function setRequestedFalse() {
  return {
    type: SET_REQUESTED_FALSE
  }
}
