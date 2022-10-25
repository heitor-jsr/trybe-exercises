import books from './index.js';

const authorBornIn1947 = books.find((element) => element.author.birthYear === 1947)
// OUTRAS DUAS FORMAS DE RESOLVER 

// function authorBornIn194(element) {
//   return element.author.birthYear === 1947
// }

// const authorBornIn1947 = books.find(authorBornIn194)

// const authorBornIn1947 = (element) => element.author.birthYear === 1947;

// const bornIn1947 = books.find(authorBornIn1947);
