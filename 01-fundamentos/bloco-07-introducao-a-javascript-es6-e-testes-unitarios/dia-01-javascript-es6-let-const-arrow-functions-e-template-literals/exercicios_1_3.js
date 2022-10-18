const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = arr => {
  for (let index = 1; index < oddsAndEvens.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (oddsAndEvens[index] < oddsAndEvens[secondIndex]) {
        let position = oddsAndEvens[index];
        oddsAndEvens[index] = oddsAndEvens[secondIndex];
        oddsAndEvens[secondIndex] = position;
      };
    };
  }
}

sortArray(oddsAndEvens);

console.log(`Os números ${oddsAndEvens.join(', ')} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉