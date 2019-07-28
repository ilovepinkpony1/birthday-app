import { TODAY, RECENT, NEARBY } from '../constants';

export const sortByType = (array, tab) => {
  const typeHandler = {
    [TODAY]: (array) => {
      return array.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    },

    [RECENT]: (array) => {
      return array.sort((a, b) => {

        const aDayOfBirth = a.birthday.split('-')[1];
        const bDayOfBirth = b.birthday.split('-')[1];

        if (aDayOfBirth > bDayOfBirth) {
          return 1;
        }
        if (aDayOfBirth < bDayOfBirth) {
          return -1;
        }
        if (aDayOfBirth === bDayOfBirth) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        }
      })
    },

    [NEARBY]: (array) => {
      return array.sort((a, b) => {

        const aDayOfBirth = a.birthday.split('-')[1];
        const bDayOfBirth = b.birthday.split('-')[1];

        if (aDayOfBirth > bDayOfBirth) {
          return 1;
        }
        if (aDayOfBirth < bDayOfBirth) {
          return -1;
        }
        if (aDayOfBirth === bDayOfBirth) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        }
      })
    },
  }
  return typeHandler[tab](array);
}