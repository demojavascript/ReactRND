import {LOGIN, LOGOUT} from '.././Constants/Constant'

export const userLogin = (user) => {
    return {
        type: LOGIN,
        payload: user
    }
};

export const userLogout = () => {
    return {
        type: LOGOUT,
        payload: ""
    }
};
