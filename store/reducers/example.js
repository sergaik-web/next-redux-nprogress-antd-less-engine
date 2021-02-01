import {USER_SET_STATE} from '../constants';

const initialState = {
  init: false,
  auth: false,
};

export default function example(state = initialState, action) {
  switch (action.type) {
    case USER_SET_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
