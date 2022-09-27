// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara

// verificaPalindrome('arara')
//     Retorno esperado: true

// verificaPalindrome('desenvolvimento')
//     Retorno esperado: false

function palindromo(phrase) {
    let aux = '';
    let trueFalse = Boolean;
    for (let index = 0; index < phrase.length; index += 1) {
        aux += phrase[phrase.length-1-index];
    };
    if (phrase === aux) {
        trueFalse = true;
    } else {
        trueFalse = false;
    } return console.log(trueFalse)
};

palindromo('desenvolvimento');

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

//     Array de teste: [2, 3, 6, 7, 10, 1];.

//     Valor esperado no retorno da função: 4.

