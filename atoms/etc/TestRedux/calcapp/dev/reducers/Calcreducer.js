import {NUM_INCREASED, NUM_DECREASED} from '.././constants/Constant'

const initialState = {
  number:0
}
export default function (state = initialState, action) {
    switch (action.type) {
        case NUM_INCREASED:
            var newState = Object.assign({}, state);
            newState.number = newState.number + parseInt(action.payload)
            return newState;
            break;
        case NUM_DECREASED:
            var newState = Object.assign({}, state);
            newState.number = newState.number - parseInt(action.payload)
            return newState;
            break;
        default:
            return state;
    }
}
