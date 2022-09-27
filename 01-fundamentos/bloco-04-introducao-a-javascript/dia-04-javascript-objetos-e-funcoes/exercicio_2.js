// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara
// verificaPalindrome('arara')
// Retorno esperado: true
// verificaPalindrome('desenvolvimento')
// Retorno esperado: false

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
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

function biggestArrayIndex(array) {
    let biggest = -Infinity;
    let maxIndex = 0;
    for (integer in array) {
        if (array[integer] > biggest) {
            biggest = array[integer];
            maxIndex = integer;
        };
    };
    return maxIndex
};

console.log(biggestArrayIndex([1,7,3,4,5]));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

function smallestArrayIndex(array) {
    let smallest = Infinity;
    let smallestIndex = 0;
    for (integer in array) {
        if (array[integer] < smallest) {
            smallest = array[integer];
            smallestIndex = integer;
        };
    };
    return smallestIndex
};

console.log(smallestArrayIndex([1,2,3,5,-8, -20]))


// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

function mostCharacters(array) {
   let mostCharacters = -Infinity;
   let index = 0;
   for (string in array) {
       if (array[string].length > mostCharacters) {
           mostCharacters = array[integer].length;
           index = string;
          };
    }; return index
};

console.log(mostCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

function highestRepetition(array) {
    let occurencies = {};
    for (let index = 0; index < array.length; index += 1){
        let aux = array[index];
        if (!occurencies[aux]) {
            occurencies[aux] = 1;
        } else {
            occurencies[aux] += 1;
        };
    };

    let highestOccurencies = -1;
    let result = null;

    for (number in occurencies) {
        if (occurencies[number] > highestOccurencies) {
          highestOccurencies = occurencies[number];
          result = number;
        }
      };
    return result;
};

console.log(highestRepetition([2, 3, 2, 5, 8, 2, 3]));


// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function naturalSum(number) {
    let sum = 0;
    for (index = 1; index <= number; index += 1) {
        sum += index;
    } return sum;

};

console.log(naturalSum(5));


// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
//     Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
//     Retorno esperado: false

function verifyString(word, ending) {
    let stringBegning = '';
    let aux = Boolean;

    if (ending.length < word.length) {
        stringBegning = word.split('', word.length-2)
    }; 
    
    for (index = 0; index < ending.length; index += 1) {
        if (ending[index] !== stringBegning[index]) {
            aux = true;
        } else {
            aux = false;
        };
    return aux 
    };
};

console.log(verifyString('trybe', 'be'))