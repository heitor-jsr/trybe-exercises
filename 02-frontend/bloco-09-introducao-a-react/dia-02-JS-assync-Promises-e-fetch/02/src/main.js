const BASE_URL_DOG = 'https://dog.ceo/api/breeds/image/random';
const BASE_URL_CAT = 'https://aws.random.cat/meow';
const MAX = 1000;
const randomId = () => Math.floor(Math.random() * MAX);

const btnDog = document.getElementById('dog');
const btnCat = document.getElementById('cat');
const btnRandom = document.getElementById('random');
const img = document.getElementById('image');

const fetchedCat = () => fetch(BASE_URL_CAT)
  .then((response) => response.json())
  .then((data) => {
    const { file } = data;
    img.setAttribute('src', file);
  });

const fetchedDog = () => fetch(BASE_URL_DOG)
  .then((response) => response.json())
  .then((data) => {
    const { message } = data;
    img.setAttribute('src', message);
  });

btnDog.addEventListener('click', (event) => {
  event.preventDefault();
  fetchedDog();
});

btnCat.addEventListener('click', (event) => {
  event.preventDefault();
  fetchedCat();
});

const randomReturn = () => btnRandom.addEventListener('click', (event) => {
  event.preventDefault();
  const id = randomId();
  if (id % 2 === 0) return fetchedCat();
  return fetchedDog();
});

randomReturn();
