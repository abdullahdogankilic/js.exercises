const user = {
  id: 1,
  name: "John",
  age: 25,
};
localStorage.setItem("user", JSON.stringify(user));
let users = localStorage.getItem("user");
let newPerson = JSON.parse(users);

console.log(newPerson);
