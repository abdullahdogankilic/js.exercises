const isLogged = true;
const promis = (isLogged) => {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      const randomNum = Math.random();
      resolve(randomNum);
    } else {
      reject(new Error("False"));
    }
  });
};

const promis1 = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("randomV < 0.5"));
    }
  });
};

promis(isLogged)
  .then((message) => {
    console.log(message);
    return promis1(message);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error.message);
  })
  .finally(() => {
    console.log("Promise block ended");
  });
