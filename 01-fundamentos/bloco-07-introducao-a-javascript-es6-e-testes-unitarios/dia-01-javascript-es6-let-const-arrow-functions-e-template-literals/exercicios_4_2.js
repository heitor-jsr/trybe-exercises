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

console.log(substituaX('Bebeto'));

const minhasSkills = func => {
  const skills = ['HTML', 'CSS', 'Lógica'];
  let resultado = `
  ${func}
  Minhas três principais habildiades são:`;
  skills.forEach((skill) => {
    resultado = `${resultado}
    - ${skill}`;
  })
}

console.log(minhasSkills(substituaX('Bebeto')));