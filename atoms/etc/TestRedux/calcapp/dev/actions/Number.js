import {NUM_INCREASED, NUM_DECREASED} from '.././constants/Constant';

export const numberIncreased = (step) => {
    return {
        type: NUM_INCREASED,
        payload: step
    }
};

export const numberDecreased = (step) => {
    return {
        type: NUM_DECREASED,
        payload: step
    }
};
