import {USER_ADD, USER_REMOVE} from '.././constants/Constant'

export const addUser = (name) => {
    return {
        type: USER_ADD,
        payload: name
    }
};

export const removeUser = (index) => {
    return {
        type: USER_REMOVE,
        payload: index
    }
};
