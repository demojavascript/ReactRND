import {USER_WELCOME, USER_WELCOME_UPDATED} from '.././Constants/Constant'

export const welcomeUpdated = (txt) => {
  return {
    type:USER_WELCOME_UPDATED,
    payload:txt
  }
}
