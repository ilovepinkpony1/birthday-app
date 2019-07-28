import { TODAY, RECENT, NEARBY } from '../constants';

const setTimeForDate = (date, range) => {
  date.setTime(date.getTime() + range);
};

const normalizeDate = date => {
  return [
    String(date.getDate()).padStart(2, '0'),
    String(date.getMonth() + 1).padStart(2, '0')
  ];
};

export const getDatesRange = tab => {
  let dayFrom = 0;
  let dayTo = 0;

  if (tab === RECENT) {
    dayFrom = -1 * 14 * 24 * 60 * 60 * 1000;
    dayTo = -1 * 1 * 24 * 60 * 60 * 1000;
  }
  if (tab === NEARBY) {
    dayFrom = 1 * 24 * 60 * 60 * 1000;
    dayTo = 14 * 24 * 60 * 60 * 1000;
  }

  const dateNowForNearDate = new Date();
  const dateNowForFarDate = new Date();

  setTimeForDate(dateNowForNearDate, dayFrom);
  setTimeForDate(dateNowForFarDate, dayTo);
  const [dayNear, monthNear] = normalizeDate(dateNowForNearDate);
  const [dayFar, monthFar] = normalizeDate(dateNowForFarDate);

  if (
    tab === TODAY &&
    `${monthFar}.${dayFar}` === '02.28' &&
    dateNowForFarDate.getFullYear() % 4 === 0
  ) {
    dayFar = '29';
  }
  return [`${monthNear}.${dayNear}`, `${monthFar}.${dayFar}`];
};
