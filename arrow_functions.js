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