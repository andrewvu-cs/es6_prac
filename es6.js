// LET & CONST VARIABLES

// let - for only variables
// const - const for values that should never change

let myName = 'Andrew';     
console.log(myName);

myName = 'Andres';
console.log(myName);

//Code below will provide an error because myName value cannot be reassigned
const myName = 'Andrew';
console.log(myName);

myName = 'Andres';
console.log(myName);


// ARROW FUNCTIONS

//solves issues with 'this' keyword
//classic function call for JS
function printMyName(name){
    console.log(name);
  }  
printMyName('Andrew');

//No more issues with this keyword!
const myFnc = (name) => {
    console.log(name);
}
printMyName('Andrew');

//If youre arrow function only needs one and only one parameter
//then you do not need to wrap it in parentheses
const myFnc = name => {
    console.log(name);
}
printMyName('Andrew');

//multiply functions are equivalent to each other
const multiply = number => {
    return number * 2;
}

const multiply = number => number * 2;
console.log(multiply(2));


//EXPORTS & IMPORTS

//example1
//person.js file
const person = {
    name: 'Max'
}
export default person
//app.js 
import person from './person.js'
import prs from './person.js'

//example 2
//utility.js
export const clean = () => {...}
export const baseData = 10;
//app.js
import{baseData} from './utility.js'
import{clean} from './utility.js'
//OR
import{baseData,clean} from './utility.js'


