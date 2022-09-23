// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// toda iteração do primeiro loop for vai realizar uma comparação do valor do secondIndex, iniciando em 0, e indo até o secondIndex ser maior ou igual ao valor de index.
// isso faz com que a cada iteração do primeiro loop vc compare todos os itens do array até chegar na posição de array[index]. 
// o segundo loop, por sua vez, vai realizar a comparação sempre que o valor do secondIndex for menor que de index. assim, a comparação é feita em loop até essa condição ser falsa.
// isso permite que o segundo loop compare sempre os valores de todos os itens do array com o seu adjacente até o final. a cada iteração desse loop é verificado se
// o valor posicionado em numbers[index] é menor que o posicionado em numbers[secondIndex]; se for, executa-se o if que vai posicionar o valor de numbers[index] dentro de 
// uma var auxiliar, e em seguida atualizar o valor de numbers[index] com o valor numbers[secondIndex], jogando o valor considerado maior para a posição mais a frente 
// (o indice de numbers[index] sempre vai ser maior que o de secondIndez). em seguida, atualiza-se o valor de numbers[secondIndex] com o valor armazenado em position, que
// é igual ao menor valor da comparação.

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  };

  console.log(numbers);