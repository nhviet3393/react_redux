var mangReducer = (state = ['Android', 'iOS', 'NodeJS'], action) => {
    switch(action.type){
        case 'ADD_NODE':
            return [...state, action.node];
            break;
        case 'DELETE':
            return state.filter((e, i) => i != action.index)
            break;
        default:
            return state;
    }
}

module.exports = mangReducer;