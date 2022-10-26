import books from './index.js';

function nameAndAge() {
  return books.map((element) => ({ 
    author: element.author.name,
    age: element.releaseYear - element.author.birthYear })).sort((a,b) => a.age - b.age)
}

const nameAndAge = books.map((element) => ({ 
  author: element.author.name,
  age: element.releaseYear - element.author.birthYear })).sort((a,b) => a.age - b.age);