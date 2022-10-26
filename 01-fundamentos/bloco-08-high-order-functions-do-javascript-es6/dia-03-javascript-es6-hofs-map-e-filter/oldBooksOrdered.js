import books from './index.js';

function oldBooksOrdered(currentYear) {
  return books.filter((element) => currentYear - element.releaseYear >= 60)
  .sort((a, b) => a.releaseYear - b.releaseYear);
}

const filtred = books.filter((element) => currentYear - element.releaseYear >= 60)
.sort((a, b) => a.releaseYear - b.releaseYear)
