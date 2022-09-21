// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

const a = 10;
const b = 100;
const c = 1000;

if (a > b && a > c) {
    console.log(`o maior valor é o de ${a}`)
} else if (b > c && b > c) {
    console.log(`o maior valor é o de ${b}`)
} else {
    console.log(`o maior valor é o de ${c}`)
}