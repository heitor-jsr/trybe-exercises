import books from './index.js';

function formatedBookNames(arr) {
  return arr.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`)
}

const formatedNames1 = books.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`)

const formatedNames2 = formatedBookNames(books);

console.log(formatedNames1);