import {MSG, SETMSG} from '.././constants/Constant';

const initialState = {
  msg:"asd"
}

export default function(state = initialState, action){
  switch(action.type){
    case MSG:
        var newState = Object.assign({}, state);
        return newState;
        break;
      case SETMSG:
          var newState = Object.assign({}, state);
          newState.msg = action.payload
          return newState;
          break;
    default:
        return state;
  }
}
