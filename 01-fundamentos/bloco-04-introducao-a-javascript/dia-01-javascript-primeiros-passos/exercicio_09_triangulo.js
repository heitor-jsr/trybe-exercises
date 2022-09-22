// Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

let a = 45;
let b = 65;
let c = 70; 

let areaTriangulo = a+b+c;

if (areaTriangulo === 180 && a > 0 && b > 0 && c > 0) {
    console.log("true")
} else if (areaTriangulo !== 180 && a > 0 && b > 0 && c > 0) {
    console.log("false")
} else {
    console.log("valor de algum ângulo inválido")
}