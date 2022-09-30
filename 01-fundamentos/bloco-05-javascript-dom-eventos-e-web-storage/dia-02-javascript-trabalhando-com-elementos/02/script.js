const pai = document.getElementById('pai');
const irmao1 = document.createElement('section');
irmao1.id = 'irmão1';
pai.appendChild(irmao1);

const elementoOndeVcTa = document.getElementById('elementoOndeVoceEsta');
const filhoOndeVcTa = document.createElement('section');
filhoOndeVcTa.id = 'eu sou seu filho';
elementoOndeVcTa.appendChild(filhoOndeVcTa);

const fiDoFi = document.getElementById('primeiroFilhoDoFilho');
const fiDoFiDoFi = document.createElement('section');
fiDoFiDoFi.id = 'filho do filho do filho';
fiDoFi.appendChild(fiDoFiDoFi);
// Você pode usar os paramentros de navegação para ir "escalando" determinados elementos como abaixo:
const bisneto = document.getElementById('filho do filho do filho');
const tioAvo = bisneto.parentElement.parentElement.nextElementSibling;
console.log(tioAvo); 