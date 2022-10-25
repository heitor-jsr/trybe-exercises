const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = ((element) => {
  if ((element % 3 === 0) && (element % 5 === 0)) return true
});

const divisibleBy = numbers.find(((element) => (element % 3 === 0) && (element % 5 === 0)))

console.log(divisibleBy);

const divisible = numbers.find(findDivisibleBy3And5);

console.log(divisible);
