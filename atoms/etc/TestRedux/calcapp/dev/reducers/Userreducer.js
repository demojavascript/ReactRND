import {USER_ADD, USER_REMOVE} from '.././constants/Constant'

const initialState = {
  users:[]
}
export default function (state = initialState, action) {
    switch (action.type) {
        case USER_ADD:
            var newState = Object.assign({}, state);
            newState.users.push(action.payload);
            return newState;
            break;
        case USER_REMOVE:
            var newState = Object.assign({}, state);
            newState.users.splice(action.payload, 1);
            return newState;
            break;
        case USER_UPDATE:
            var newState = Object.assign({}, state);
            newState.users[action.payload.index] = action.payload.name
            return newState;
            break;
        default:
            return state;
    }
}
