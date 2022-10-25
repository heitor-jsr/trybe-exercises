import books from './index.js';

function everyoneWasBornOnSecXX() {
  return books.every((element) => element.author.birthYear >= 1901);
}

const result = books.every((element) => element.author.birthYear >= 1901);

console.log(everyoneWasBornOnSecXX());