// Calcule e imprima a média aritmética dos valores contidos no array; 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media = 0;

for (index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
    media = sum / numbers.length;
};

console.log(`média = ${sum} / ${numbers.length}, que é ${media}.`);
