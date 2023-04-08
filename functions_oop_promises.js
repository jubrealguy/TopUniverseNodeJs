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

// An array of persons to test the function
const persons = [
  new Person('Adebayo', 32),
  new Person('Oluwatosin', 27),
  new Person('Gbemisola', 29),
];

greetPersons(persons);
