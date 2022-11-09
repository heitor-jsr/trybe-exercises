const ACESS_TOKEN = '5458090950975294';
const BASE_URL = `https://www.superheroapi.com/api.php/${ACESS_TOKEN}`;
const MAX_HEROES = 1000;
const randomId = () => Math.floor(Math.random() * MAX_HEROES);

const btn = document.querySelector('#draw');
const heroName = document.querySelector('#name');
const tagImg = document.querySelector('#hero-image');

const fillImg = (img) => {
  tagImg.setAttribute('src', img);
};

btn.addEventListener('click', (event) => {
  event.preventDefault();
  const id = randomId();
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const { image, name } = data;
      const { url } = image;
      fillImg(url);
      heroName.innerHTML = name;
    })
    .catch((error) => {
      window.alert('Hero not found!');
      console.log(error.message);
    });
});
