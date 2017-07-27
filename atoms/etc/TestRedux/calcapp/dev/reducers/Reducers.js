import {combineReducers} from 'redux';
import CalReducer from './Calcreducer';
import UserReducer from './Userreducer';

const Reducers = combineReducers({
    Calc: CalReducer,
    User: UserReducer
});

export default Reducers
