const contest = (number, func) => {
  const result = Math.floor((Math.random() * 5)+1);
  return func(result, number);
};

const checkNumber = (result, number) => {
  if (result === number) return 'Parabéns você ganhou';
  return 'Tente novamente';
};

console.log(contest(5, checkNumber))
