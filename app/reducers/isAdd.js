var isAddReducer = (state = false, action) => {
    switch(action.type){
        case 'TOGGLE_IS_ADD':
            return !state;
            break;
        default:
            return state;
    }
}

module.exports = isAddReducer;