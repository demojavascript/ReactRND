import {USER_WELCOME, USER_WELCOME_UPDATED} from '.././Constants/Constant'

const initialState = {
  welcomeTxt:"9"
}

export default function(state = initialState, action){
  switch(action.type){
    case USER_WELCOME:
      var newState = Object.assign({}, state);
      return newState;
      break;
    case USER_WELCOME_UPDATED:
      var newState = Object.assign({}, state);
      newState.welcomeTxt = action.payload;
      return newState;
      break;
    default:
      return state;
  }
}
