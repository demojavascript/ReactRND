
const commentsReducer = function(state={items:[], author:'', text: ''}, action) {
    switch (action.type) {
        case 'ADD_COMMENT':
        return {
            ...state,
            items: [...state.items, {id: Math.floor(Math.random()*100), ...action.comment}]
        };
        
        default:
        return state;

    }
};
export default commentsReducer;