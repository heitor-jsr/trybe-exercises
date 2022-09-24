// Agora inverta o lado do triângulo. Por exemplo:

let n = 5;
let aux = 0;

for (let index = 2 * n; index > n; index -= 1) {
    aux += 1;
    console.log(' '.repeat(n-aux) + '*'.repeat(aux))
};
 