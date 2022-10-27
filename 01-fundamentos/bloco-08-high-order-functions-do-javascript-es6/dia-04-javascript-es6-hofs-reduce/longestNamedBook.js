import books from './index.js';

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook(arr) {
  return arr.reduce((acc, crr) => (acc.name.length > crr.name.length) ? acc : crr)
}
