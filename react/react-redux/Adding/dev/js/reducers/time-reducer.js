export default function (state = {time:0}, action) {

    switch (action.type) {
        case 'TIME_INCREMENTED':
            return {
			        state,
			        time: state.time+1
				}
            break;

        case 'TIME_DECREMENTED':
            return {
			        state,
			        time: state.time-1
				}
            break; 
        default:
        	return state;       
    }
    //return state;
}