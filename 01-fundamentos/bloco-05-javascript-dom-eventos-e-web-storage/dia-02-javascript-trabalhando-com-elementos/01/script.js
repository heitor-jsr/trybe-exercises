const ondeVcEsta = document.getElementById('elementoOndeVoceEsta');
const pai = ondeVcEsta.parentElement.style.color = 'red';
const fiDoFi = ondeVcEsta.firstElementChild;
fiDoFi.innerHTML = 'Texto';
const primeiroFilho = pai.firstElementChild;
const primeiroFilho2 = ondeVcEsta.previousElementSibling;
const text = ondeVcEsta.parentElement.innerHTML;
const terceiroFi = pai.lastElementChild.previousElementSibling;
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;