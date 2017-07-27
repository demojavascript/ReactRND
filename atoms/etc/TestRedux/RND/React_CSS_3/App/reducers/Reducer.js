import {combineReducers} from 'redux';
import Welcome from 'reducers/Default'

const all = combineReducers({
  wlcm:Welcome
})
export default all;
