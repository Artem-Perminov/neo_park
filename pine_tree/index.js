const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

btns[0].addEventListener('click', () => {
  // if (!btns[1].classList.contains('red')) {
  //   btns[1].classList.add('red');
  // } else {
  //   btns[1].classList.remove('red');
  // }

  btns[1].classList.toggle('red');
});

wrapper.addEventListener('click', (e) => {
  if (e.target && e.target.tagName === 'BUTTON') {
    console.log('!');
  }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
