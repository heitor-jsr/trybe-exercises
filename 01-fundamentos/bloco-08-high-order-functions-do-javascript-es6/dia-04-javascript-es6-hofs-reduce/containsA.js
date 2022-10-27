import books from './index.js';

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA(arr) {
  let total = 0; 
  arr.forEach((element) => {
    const totalA = element.split('');
    total += totalA.reduce((acc, crr) => {
      if (crr.includes('a') || crr.includes('A')) {
        return acc + 1
      } else {
        return acc
      }
    }, 0);
  })
  return total
}

console.log(containsA(names))