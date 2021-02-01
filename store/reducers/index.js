import {combineReducers} from 'redux';
import example from './example';
import settings from './settings';

export default combineReducers({
  userState: example,
  settings,
});
