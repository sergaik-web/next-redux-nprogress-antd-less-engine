import {USER_SET_STATE} from '../constants';

export function setAuth(data) {
  return {
    type: USER_SET_STATE,
    payload: data,
  };
}
