import Config from '../../theme/config';

import {SETTINGS_SET_SETTINGS} from '../constants';

const initialState = Config;

export default function settings(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_SET_SETTINGS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}
