function multiplyByTwo(value) {
  let number = 2;
  function inner() {
    let print = number * value;
    return print;
  }
  return inner;
}
console.log(multiplyByTwo(4)());
