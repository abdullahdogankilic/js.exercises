class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
class Developer extends Person {
  constructor(name, age, role) {
    super(name, age);
    this.role = role;
  }
}
const developer = new Developer("Mario", "Rossi", "Front-end");
console.log(
  developer.firstName + " " + developer.lastName + " " + developer.role
);
