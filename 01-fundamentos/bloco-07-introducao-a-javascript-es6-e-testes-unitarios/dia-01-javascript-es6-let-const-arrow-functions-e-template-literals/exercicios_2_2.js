const factorial = num => {
  if (num < 0) return 'Somente números inteiros positivos!'
  let result = 1;
  for (index = 2; index <= num; index += 1) {
    result *=  index
  };
  return result
}

const fact = factorial(4);

console.log(`Esse é o fatorial ${fact}`)