const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};
const { id, firstName, lastName, age } = person;

const personInfo = {
  firstName: firstName,
  lastName: lastName,
  age: age,
};

console.log(id, personInfo);
