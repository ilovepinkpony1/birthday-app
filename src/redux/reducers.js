import { DISPLAY } from "./actions";
import { TODAY, RECENT, NEARBY } from '../constants';

const initialState = {
  recentData: null,
  todaysData: null,
  nearbyData: null,
};

const actionsHandler = {
  [DISPLAY]: (state, action) => {
    const { tab, data } = action.payload;

    if (tab === RECENT) {
      return {
        ...state,
        recentData: data,
      }
    }

    if (tab === TODAY) {
      return {
        ...state,
        todaysData: data,
      }
    }

    if (tab === NEARBY) {
      return {
        ...state,
        nearbyData: data,
      }
    }
  },
}

export default function reducer(state = initialState, action) {
  const handler = actionsHandler[action.type];

  return handler ? handler(state, action) : state;
}