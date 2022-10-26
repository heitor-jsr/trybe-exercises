import books from './index.js';

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  const currentYear = new Date().getFullYear();
  return books.filter((element) => currentYear - element.releaseYear >= 60)
  .map((element) => element.name);
}
