// class definition
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    // method definition
    greet() {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    }
  }
  
  // A new function that takes an array of Person; persons is the array
  function greetPersons(persons) {
    for (let person of persons) {
      person.greet();
    }
  }
  
  const persons = [
    new Person('Adebayo', 32),
    new Person('Oluwatosin', 27),
    new Person('Gbemisola', 29),
  ];
  
  // An array of persons to test the function
  greetPersons(persons);
  console.log('\n');
  
  // A new promise to resolve a message for each item in the array persons
  const promise = new Promise(function (resolve, reject) {
    for (let person of persons) {
      console.log(`Hi ${person.name}, it's good to have you here`);
    }
    resolve();
  });
  
  // promise.then(function () {
  //   console.log('All persons have been greeted.');
  // });