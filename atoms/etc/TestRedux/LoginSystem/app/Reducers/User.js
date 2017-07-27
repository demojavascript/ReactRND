import {LOGIN, LOGOUT} from '.././Constants/Constant'

const initialState = {
  email:"",
  name:"",
  login:false
}

export default function(state = initialState, action){
  switch(action.type){
    case LOGIN:
      var newState   = Object.assign({}, state);
      newState.email = action.payload.email;
      newState.name  = action.payload.name;
      newState.login = true;
      return newState;
      break;

    case LOGOUT:
      var newState   = Object.assign({}, state);
      newState.email = "";
      newState.name  = "";
      newState.login = false;
      return newState;
      break;

    default:
      return state;
  }
}
