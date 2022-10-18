const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = arr => arr.sort((a, b) => a - b);

sortOddsAndEvens(oddsAndEvens)

console.log(`Os números ${oddsAndEvens.join(', ')} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉