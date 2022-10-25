const books = require('./index');

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

function getNamedBook() {
  return books.find((element) => element.name.length === 26)
};

const getNamedBooks = ((element) => element.name.length === 26);

const result = books.find((element) => element.name.length === 26);
