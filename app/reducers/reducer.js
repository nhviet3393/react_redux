var redux = require('redux');
var mang = require('./mang');
var isAdd = require('./isAdd');

var reducer = redux.combineReducers({mang, isAdd});

module.exports = reducer;