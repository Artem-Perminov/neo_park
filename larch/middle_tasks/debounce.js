const fetchUrl = function (url) {
  console.log(`fetching ${url}...${this.firstName}`);
};

const user = {
  firstName: 'Bob',
};

function debounce(callback, delay) {
  let timer;

  return (...args) => {
    if (timer) {
      clearInterval(timer);
    }
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const fetching = debounce(fetchUrl.bind(user), 300);

fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);
fetching(6);
