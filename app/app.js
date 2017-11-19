var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List');
var {Provider} = require('react-redux');
// var Provider = require('react-redux').Provider;

ReactDOM.render(
  <Provider store={store}>
    <List/>
  </Provider>,
  document.getElementById('root')
);

require('./redux');

/*
* spread operator ... (to copy)
*/

/*var obj = {
  name: "Viet Ngo",
  age: 24
};

var obj_2 = obj;
var obj_3 = {...obj, age:20, height: 170}; //operator ...

obj.age = 18;

console.log('obj_2 = ', obj_2); //obj_2 = obj_1 because they have the same memory area
console.log('obj_3 = ', obj_3); //obj_3 has different memory area

var arr = [5, 3, 8, 5];
var arr_2 = [7, 6, ...arr, 101, 102];

arr[0] = 100;
console.log('arr_2 = ', arr_2);
*/

/*
* pure function
*/
