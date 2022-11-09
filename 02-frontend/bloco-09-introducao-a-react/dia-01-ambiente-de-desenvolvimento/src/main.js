import validator from 'validator';
import './style.css';

const getValidators = document.getElementById('validator');
const btn = document.getElementById('btn');
const answer = document.getElementById('answer');
const users = ['tryber', 'heitor-tryber', 'dornzak-tryber'];

btn.addEventListener('click', (event) => {
  event.preventDefault();
  const selectedValitdator = getValidators.options[getValidators.selectedIndex].value;
  const text = document.getElementById('text-validation').value;
  if (selectedValitdator === 'isEmail' && validator.isEmail(text, { allow_utf8_local_part: false }) === false) answer.innerHTML = 'E-mail inválido!';
  if (selectedValitdator === 'isIn' && validator.isIn(text, users) === true) answer.innerHTML = `User '${text}' already exists`;
  if (selectedValitdator === 'isLength' && validator.isLength(text, 6, 21) === false) answer.innerHTML = 'Digite uma senha entre 6 e 21 caracteres!';
  if (selectedValitdator === 'isLowercase' && validator.isLowercase(text) === false) answer.innerHTML = 'Desative o capslock!';
  if (selectedValitdator === 'isHexadecimal' && validator.isHexadecimal(text) === false) answer.innerHTML = 'Cor inválida!';
});
