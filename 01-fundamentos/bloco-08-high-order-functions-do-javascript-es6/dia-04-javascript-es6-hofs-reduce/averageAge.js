import books from './index.js';


const expectedResult = 43;

function averageAge(param) {
  const totalAge = param.reduce((acc, crr) => acc += (crr.releaseYear - crr.author.birthYear), 0);
  return totalAge / param.length;
}

console.log(averageAge(books))