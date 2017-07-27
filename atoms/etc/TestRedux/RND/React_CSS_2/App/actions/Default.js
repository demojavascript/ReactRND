import {MSG, SETMSG} from '.././constants/Constant';

export const getDefaultMsg = function(){
  return {
    type:MSG,
    payload:''
  }
}

export const setDefaultMsg = function(msg){
  return {
    type:SETMSG,
    payload:msg
  }
}
