const movieDB = {
  movies: [
    'Логан',
    'Лига справедливости',
    'Ла-ла лэнд',
    'Одержимость',
    'Скотт Пилигрим против...',
    'Аватар',
  ],
};
const films = movieDB.movies.sort();

const adv = document.querySelectorAll('[class="promo__adv"] img');
const genre = document.querySelector('[class="promo__genre"]');
const promoBg = document.querySelector('[class="promo__bg"]');
const movies = document.querySelectorAll('[class="promo__interactive-item"]');
const moviesList = document.querySelector('[class="promo__interactive-list"]');

adv.forEach((el) => {
  el.remove();
});

genre.innerText = 'Драма';
promoBg.style.background = `url('img/bg.jpg')`;
movies.forEach((n) => n.remove());

films.forEach((film, i) => {
  const li = document.createElement('li');
  li.classList.add('promo__interactive-item');
  li.innerText = `${i + 1}. ${film}`;
  moviesList.appendChild(li);
});

genre.addEventListener('mouseover', (e) => {
  e.preventDefault();
  const color = genre.style.color;
  switch (color) {
    case '':
      genre.style.color = 'red';
      break;
    case 'red':
      genre.style.color = 'white';
      break;
    default:
      genre.style.color = 'red';
  }
});
