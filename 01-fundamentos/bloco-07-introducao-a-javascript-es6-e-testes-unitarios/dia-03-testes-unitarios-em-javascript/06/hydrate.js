function hydrate(str) {
  const splited = str.split('');
  let water = 0;
  for (let index = 0; index < splited.length; index += 1) {
    const parsedInt = parseInt(splited[index]);
    if(parsedInt) {
      water += parsedInt;
    }
  }
  let glass = 'copo';
  if (water > 1) {
    glass = 'copos';
  }
  return `${water} ${glass} de água`;
}

module.exports = hydrate