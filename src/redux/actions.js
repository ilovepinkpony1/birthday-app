import { BASE_API } from '../constants';
export const DISPLAY = 'display';

export function load(from, to, tab) {
  return dispatch => {
    fetch(`${BASE_API}?dateFrom=${from}&dateTo=${to}`)
      .then(response => response.json())
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
