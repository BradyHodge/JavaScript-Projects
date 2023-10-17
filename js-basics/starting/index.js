// use 'const' for vars unless it must be changed, then use 'let'
// use 'var' for global vars
// node does not have window
// primitive data types:
//  -String
//  -Number (ints and floats are the same)
//  -Bool
//  -undefined
//  -null
// Non-primitive data types:
//  -Objects (kind of like dicts)
//  -Arrays
// Primitive data types are immutable(non-modifiable) data types. Once a primitive data type is created we cannot modify it. Non-primitive data types cannot be compared by value. 
// Object: 
let person = {
    name: 'jeff',
    age: 30
};
person['name'] = 'john';
// Array:
let colors = ['red', 'blue'];
colors[2] = 'green'
console.log(colors[0])
// Function:
function square(number) {
    return number * number;
}
let number = square(2);
console.log(number);

// Global Objects:

setTimeout()
clearTimeout();

setInterval()
clearInterval();

// Window is implied in js
window.console.log()

// Node has no window object
global.setTimeout()

// Import modules:
const logger = require('./logger.js')
logger.log('message')