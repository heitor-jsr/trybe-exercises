// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let number = 10;
let factorial = 1;

for (index = 1; index <= number; index +=1) {
    factorial = factorial * index
};


console.log(factorial);
