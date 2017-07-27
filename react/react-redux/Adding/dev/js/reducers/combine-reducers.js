import {combineReducers} from 'redux';
import TimeReducer from './time-reducer.js';
import UserReducer from './user-reducer.js';
import TaskReducer from './task-reducer.js';

const allReducers = combineReducers({
    time: TimeReducer,
    user: UserReducer,
    task: TaskReducer
});

export default allReducers
