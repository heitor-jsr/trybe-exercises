import books from './index.js';

function someBookWasReleaseOnThe80s() {
  return books.some((element) => element.releaseYear >= 1980 && element.releaseYear <= 1989);
}

const result = books.some((element) => element.releaseYear >= 1980 && element.releaseYear <= 1989);
