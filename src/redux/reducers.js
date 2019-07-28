import { 
  DISPLAY, 
  SET_REQUESTED_TRUE, 
  SET_REQUESTED_FALSE 
} from "./actions";
import { 
  TODAY, 
  RECENT, 
  NEARBY 
} from '../constants';
import { sortByType } from '../utils/sortByType';


const initialState = {
  requested: false,
  recentData: null,
  todaysData: null,
  nearbyData: null,
};

const actionsHandler = {
  [DISPLAY]: (state, action) => {
    const { tab, data: { users } } = action.payload;

    if (tab === RECENT) {
      return {
        ...state,
        recentData: sortByType(users, tab),
      }
    }

    if (tab === TODAY) {
      return {
        ...state,
        todaysData: sortByType(users, tab),
      }
    }

    if (tab === NEARBY) {
      return {
        ...state,
        nearbyData: sortByType(users, tab),
      }
    }
  },

  [SET_REQUESTED_TRUE]: (state) => {
    return {
      ...state,
      requesed: true
    }
  },

  [SET_REQUESTED_FALSE]: (state) => {
    return {
      ...state,
      requesed: false
    }
  }
}

export default function reducer(state = initialState, action) {
  const handler = actionsHandler[action.type];

  return handler ? handler(state, action) : state;
}