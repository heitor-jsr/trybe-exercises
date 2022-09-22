// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = [];

for (index = 0; index < numbers.length; index += 1) {
    maior.push(numbers[index]);
}

maior.sort()
console.log(maior)