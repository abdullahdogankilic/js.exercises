const number = 15;
let check = (numbers) => {
  return new Promise((resolve, reject) => {
    if (numbers > 10) {
      resolve("number > 10");
    } else {
      reject("Number <= 10");
    }
  });
};
check(number)
  .then((message) => {
    console.log(message);
  })
  .catch((e) => {
    console.log(e);
  });
