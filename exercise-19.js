class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this.age = age;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(NewFirst) {
    this._firstName = NewFirst;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(Newlast) {
    this._lastName = Newlast;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
