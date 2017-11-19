var redux = require('redux');
var reducer = require('./reducers/reducer');

/*var default_state = {
    mang: ['Android', 'iOS', 'NodeJS'],
    isAdd: false
}

var reducer = (state = default_state, action) => {
    switch(action.type){
        case 'TOGGLE_IS_ADD':
            return {...state, isAdd: !state.isAdd};
            break;
        case 'ADD_NODE':
            return {...state, mang: [...state.mang, action.node]};
            break;
        case 'DELETE':
            return {...state, mang: state.mang.filter((e, i) => i != action.index)}
            break;
        default:
            return state;
    }
}
*/

//redux.compose use redux devTools in browser
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension(): f => f
));
console.log('current mang = ', store.getState());
//following store dispatch
// store.subscribe(() => console.log('mang changed =', store.getState()));
store.subscribe(() => {
    var str = store.getState();
    document.getElementById('p_detail').innerHTML = JSON.stringify(str);
});

// store.dispatch({type: 'TOGGLE_IS_ADD'});
// store.dispatch({type: 'ADD_NODE', node: 'PHP'});
// store.dispatch({type: 'DELETE', index: 1});

module.exports = store;