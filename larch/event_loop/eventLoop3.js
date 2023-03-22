Promise.resolve().then(() => console.log(5));

function one() {
  setTimeout(two, 0);
}

function two() {
  console.log('Hello, World!');
}

one();

console.log('2');
