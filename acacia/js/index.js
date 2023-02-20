const movieDB = {
  movies: [
    'Логан',
    'Лига справедливости',
    'Ла-ла лэнд',
    'Одержимость',
    'Скотт Пилигрим против...',
    'Аватар',
  ],
  inputText: '',
};

const adv = document.querySelectorAll('[class="promo__adv"] img');
const genre = document.querySelector('[class="promo__genre"]');
const promoBg = document.querySelector('[class="promo__bg"]');
const movies = document.querySelectorAll('[class="promo__interactive-item"]');
const moviesList = document.querySelector('[class="promo__interactive-list"]');
const addingInput = document.querySelector('[class="adding__input"]');
const form = document.querySelector('[class="add"]');

const filmRender = () => {
  moviesList.innerHTML = '';
  movieDB.movies.sort().forEach((film, i) => {
    const li = document.createElement('li');
    li.classList.add('promo__interactive-item');
    li.innerText = `${i + 1}. ${film}`;
    moviesList.appendChild(li);
  });
};

filmRender();

adv.forEach((el) => {
  el.remove();
});
genre.innerText = 'Драма';
promoBg.style.background = `url('img/bg.jpg')`;
movies.forEach((n) => n.remove());
addingInput.addEventListener('input', (e) => {
  let text = e.target.value.trim();
  switch (text.length > 21) {
    case true:
      text = `${text.slice(0, 21)}...`;
      break;
    default:
      break;
  }
  movieDB.inputText = text;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  switch (movieDB.inputText) {
    case '':
      break;
    default:
      movieDB.movies.push(movieDB.inputText);
      filmRender();
      addingInput.value = '';
      movieDB.inputText = '';
      break;
  }
});
