const initialState = {
    todos: []
}
export default function (state = initialState, action) {
    switch (action.type) {
        case 'TASK_ADDED':
            return Object.assign({}, state, {
                todos: [
                  ...state.todos,
                  action.payload
                ]
              })
            break;
        default:
        	return state;       
    }
    //return state;
}