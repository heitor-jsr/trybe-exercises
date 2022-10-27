import books from './index.js';

function reduceNames(list) {
  return list.reduce((acc, crr) => `${acc} ${crr.author.name}.`, '')
}

console.log(reduceNames(books))