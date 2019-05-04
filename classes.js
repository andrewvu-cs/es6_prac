//Classes
//Inheritance
class Human {
    constructor(){
      this.gender = 'male';
    }
    printGender(){
      console.log(this.gender);
    }
  }
  
class Person extends Human{
    constructor(){
      super();
      this.name ='Max';
      this.gender = 'female';
    }
    printMyName(){  
   console.log(this.name);
   }
}
  
  const person = new Person;
  person.printMyName();
  person.printGender();

  //CLasses, Properties, Methods
  //Properties are like "variables attached to classes/objects"
  //ES6
  constructor(){
      this.myProperty = 'value'
  }
  //ES7
  myProperty = 'value'
  //Methods are like "functions attached to classes/objects"
  //ES6
  myMethod(){...}
  //ES7
  myMethod = () => {...}


class Human {
    gender = 'male';
    printGender = () => {
      console.log(this.gender);
    }
  }
  
  class Person extends Human{
    name = 'Andrew';
    gender = 'female';
  
    printMyName = () => {
      console.log(this.name);
    }
  }
  
  const person = new Person;
  person.printMyName();
  person.printGender();


