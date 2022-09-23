// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = [];

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        impar.push(numbers[index]);
    };
};

if (impar[0] % 2 === 0) {
    console.log(impar);
} else {
    console.log('nenhum valor ímpar encontrado');
}
