// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = '';

for (index = 1; index < array.length; index += 1) {
    for (secondIndex = 0; secondIndex < index; secondIndex +=1){
        if (array[index].length > array[secondIndex].length){
            let aux = array[index];
            array[index] = array[secondIndex];
            array[secondIndex] = aux
        } 
    }
    maiorPalavra = array[0];
};

console.log(maiorPalavra);

//MENOR PALAVRA

let menorPalavra = '';

for (index = 1; index < array.length; index += 1) {
    for (secondIndex = 0; secondIndex < index; secondIndex +=1){
        if (array[index].length < array[secondIndex].length){
            let aux = array[index];
            array[index] = array[secondIndex];
            array[secondIndex] = aux
        } 
    }
    menorPalavra = array[0];
};

console.log(menorPalavra);
