//Spread and Rest Operators
//Spread - Used to split up array elements OR obj  properties
const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers, 5];

console.log(newNumbers);

const person = {
    name: 'Andrew'
  };
  
  const newPerson = {
    ...person,
    age: 28
  }
  
  console.log(newPerson)

//Rest - Used to merge a list of function arguments into an array
function sortArgs(...args){
    return args.sort
}