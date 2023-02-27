const rubInput = document.querySelector('[id="rub"]');
const usdInput = document.querySelector('[id="usd"]');

rubInput.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  request.open('GET', 'js/current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  request.addEventListener('load', () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      usdInput.value = (+rubInput.value / data.current.usd).toFixed(2);
    } else {
      usdInput.value = 'Что-то пошло не так!';
    }
  });
});
