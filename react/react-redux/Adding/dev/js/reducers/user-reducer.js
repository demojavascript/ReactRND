export default function (state = {users:[]}, action) {

    switch (action.type) {
    	case 'USER_ADDED':
    		return {
			  		state,
			        users: [...state.users, action.payload]
				}
    		break;
        default:
        	return state;       
    }
}