function techList(arr, str) {
  if (arr.length === 0) return 'Vazio!';
  const sortedArr = arr.sort();
  let aux = [];
  for (let index = 0; index < sortedArr.length;  index += 1) {
    aux.push({
      tech: sortedArr[index],
      name: str,
    })
  }
  return aux
}

module.exports = techList