//  Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };


//   Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console: Bem-vinda, Margarida

console.log('Bem vinda,', info.personagem);  
  
// 

// Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:

console.log(info['recorrente']);

// Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for (key in info) {
    console.log(key)
  }; 

// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

for (key in info) {
    console.log(info[key])
  }; 

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell"s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

for (key in info) {
    console.log(info[key], 'e', info2[key])
  }; 

//  🚀 Leitura de Objetos
//  Usando o objeto abaixo, faça os exercícios a seguir:

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
  
      },
    ],
  };

console.log("O livro favorito de", leitor.nome + ' ' + leitor.sobrenome, "se chama", leitor.livrosFavoritos.titulo)

// Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.

let count = 0;

for (key in leitor.livrosFavoritos) {
        count += 1;
};

console.log(`Julia tem ${count} livros favoritos`);
