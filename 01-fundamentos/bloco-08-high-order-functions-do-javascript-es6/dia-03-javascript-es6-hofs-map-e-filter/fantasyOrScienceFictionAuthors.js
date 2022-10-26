import books from './index.js';

// function fantasyOrScienceFictionAuthors() {
//   return books.filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica')
//   .map((element) => element.author.name).sort()
// }

function fantasyOrScienceFictionAuthors(genres) {
  return books.filter((element) => genres.includes(element.genre))
  .map((element) => element.author.name).sort()
}
