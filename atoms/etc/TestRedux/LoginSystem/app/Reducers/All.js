import {combineReducers} from 'redux';
import UserReducer from './User';

const All = combineReducers({
    User: UserReducer
});

export default All
