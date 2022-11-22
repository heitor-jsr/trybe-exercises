function fillData(key, val) {
  key.forEach((element, index) => {
    const currContainer = document.getElementById('matching-currency');
    const newCurrContainer = document.createElement('div');
    newCurrContainer.setAttribute('class', 'currency-data')
    const newCurrName = document.createElement('p');
    newCurrName.innerHTML = element;
    newCurrName.setAttribute('class', 'currency-name')
    const newVal = document.createElement('p');
    newVal.innerHTML = val[index];
    newVal.setAttribute('class', 'currency-val')
    newCurrContainer.appendChild(newCurrName);
    newCurrContainer.appendChild(newVal)
    currContainer.appendChild(newCurrContainer);
  })
}


export default fillData