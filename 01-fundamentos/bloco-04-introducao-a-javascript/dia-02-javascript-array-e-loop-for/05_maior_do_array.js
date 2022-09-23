// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// Exercício resolvido com funções:
// function sortArray (a,b) {
//     return a - b
// };

// numbers.sort(sortArray)
// console.log(numbers.pop())


let maior = -Infinity;

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maior) maior = numbers[index];
};

console.log(`O maior número é: ${maior}`)