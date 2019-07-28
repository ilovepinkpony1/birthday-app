import { TODAY, RECENT, NEARBY } from '../constants';

export const sortByType = (array, tab) => {
  const typeHandler = {
    [TODAY]: array => {
      return array.sort((a, b) => {
        if (a.name[0].toLowerCase() > b.name[0].toLowerCase()) {
          return 1;
        }
        if (a.name[0].toLowerCase() < b.name[0].toLowerCase()) {
          return -1;
        }
        return 0;
      });
    },

    [RECENT]: array => {
      return array.sort((a, b) => {
        const aDayOfBirth = a.birthday.split('-')[2];
        const bDayOfBirth = b.birthday.split('-')[2];

        if (aDayOfBirth < bDayOfBirth) {
          return 1;
        }
        if (aDayOfBirth > bDayOfBirth) {
          return -1;
        }
        if (aDayOfBirth === bDayOfBirth) {
          if (a.name[0].toLowerCase() > b.name[0].toLowerCase()) {
            return 1;
          }
          if (a.name[0].toLowerCase() < b.name[0].toLowerCase()) {
            return -1;
          }
          return 0;
        }
      });
    },

    [NEARBY]: array => {
      return array.sort((a, b) => {
        const aDayOfBirth = a.birthday.split('-')[2];
        const bDayOfBirth = b.birthday.split('-')[2];

        if (aDayOfBirth > bDayOfBirth) {
          return 1;
        }
        if (aDayOfBirth < bDayOfBirth) {
          return -1;
        }
        if (aDayOfBirth === bDayOfBirth) {
          if (a.name[0].toLowerCase() > b.name[0].toLowerCase()) {
            return 1;
          }
          if (a.name[0].toLowerCase() < b.name[0].toLowerCase()) {
            return -1;
          }
          return 0;
        }
      });
    }
  };
  return typeHandler[tab](array);
};
