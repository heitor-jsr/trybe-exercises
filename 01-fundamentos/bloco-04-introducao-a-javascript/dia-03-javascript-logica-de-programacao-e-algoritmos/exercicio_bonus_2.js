// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:


let n = 5;
// let aux = 0;

// for (let index = 0; index < n; index += 1) {
//     aux += 1;
//     console.log('*'.repeat(aux) + ' '.repeat(n-aux))
// };
 

for (index = 1; index <= n; index += 1) {
    let aux = '';
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1){
        aux += '*'
    };
    console.log(aux)     
};
