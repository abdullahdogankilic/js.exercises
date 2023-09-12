function sum(...num) {
  const totalAge = num.reduce((accumulator, nums) => accumulator + nums, 0);
  return totalAge;
}

console.log(sum(1, 2, 3, 4, 5));
