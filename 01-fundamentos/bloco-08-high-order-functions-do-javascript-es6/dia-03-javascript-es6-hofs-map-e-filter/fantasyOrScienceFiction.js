import books from './index.js';

function fantasyOrScienceFiction() {
  return books.filter((element) => (
    element.genre === 'Fantasia' || element.genre === 'Ficção Científica'
  ))
}

const filtred = books.filter((element) => (
  element.genre === 'Fantasia' || element.genre === 'Ficção Científica'
))