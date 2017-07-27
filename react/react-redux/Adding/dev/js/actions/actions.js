export const timeIncremented = (time) => {
    return {
        type: 'TIME_INCREMENTED',
        payload: time
    }
};

export const timeDecremented = (time) => {
    return {
        type: 'TIME_DECREMENTED',
        payload: time
    }
};

export const addUsers = (user) => {
    return {
        type: 'USER_ADDED',
        payload: user
    }
};

export const taskAdded = (task) => {
    return {
        type: 'TASK_ADDED',
        payload: task
    }
};
