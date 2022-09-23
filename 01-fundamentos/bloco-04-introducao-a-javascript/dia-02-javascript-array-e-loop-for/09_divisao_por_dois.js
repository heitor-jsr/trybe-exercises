// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let meuArray = [];

for (index = 1; index < 26; index += 1) {
    meuArray.push(index);
}

for (index = 1; index < meuArray.length; index += 1) {
    console.log(meuArray[index] % 2 );
}
