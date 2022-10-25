const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  if (arr.some((element) => element === name)) return true;
  return false
};

console.log(hasName(names, 'Ana'));