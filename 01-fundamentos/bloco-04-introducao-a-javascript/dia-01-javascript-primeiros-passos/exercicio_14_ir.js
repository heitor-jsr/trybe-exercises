// Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido. 

const salarioBruto = 2700.00;

let aliquotaInss = null;
let aliquotaIrrf = null;
let deducao = null;

if (salarioBruto <= 1556.94) {
  aliquotaInss = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  aliquotaInss = salarioBruto *0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  aliquotaInss = salarioBruto * 0.11;
} else {
  aliquotaInss = 570.88;
}

if (salarioBruto <= 1903.98) {
  aliquotaIrrf = 0;
  deducao = 0;
} else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {
  aliquotaIrrf = salarioBruto * 0.075;
  deducao = 142.80;
} else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
  aliquotaIrrf = salarioBruto * 0.15;
  deducao = 354.80;
} else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
  aliquotaIrrf = salarioBruto * 0.225;
  deducao = 636.13;
} else {
  aliquotaIrrf = salarioBruto * 0.275;
  deducao = 869.36;
}

let salarioLiquido = salarioBruto - (aliquotaInss + (aliquotaIrrf - deducao))

console.log(`O salário líquido é igual a ${salarioLiquido}. Os encargoes que recaem sobre ele são: INSS R$${aliquotaInss}, IRRF R$${aliquotaIrrf} e dedução IR R$${deducao}`)
