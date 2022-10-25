import books from './index.js';

function booksOrderedByReleaseYearDesc() {
  return books.sort((a, b) => b.releaseYear - a.releaseYear)
}

const ordered = ((a,b) => b.releaseYear - a.releaseYear);
books.sort(ordered);
