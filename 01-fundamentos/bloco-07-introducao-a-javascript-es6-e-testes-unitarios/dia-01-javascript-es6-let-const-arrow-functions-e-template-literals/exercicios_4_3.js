const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const arr = frase.split(' ');
  for (let index = 0; index < arr.length; index += 1){
    if (arr[index] === 'x') {
      arr[index] = nome
    }
  }
  return arr.join(' ')
};

const minhasSkills = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let resultado = `${func} Minhas três principais habilidades são:`;
  for (let skill of skills) {
    resultado = `${resultado} 
    ${skill}`
  }
  return resultado;
};

console.log(minhasSkills(substituaX('Bebeto')));