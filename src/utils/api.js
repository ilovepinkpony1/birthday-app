import { BASE_API } from '../constants';

export function getData(from, to) {
  return fetch(`${BASE_API}?dateFrom=${from}&dateTo=${to}`)
    .then(response => response.json())
    .then(data => data);
}
