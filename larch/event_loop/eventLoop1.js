console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

console.log('3');

setTimeout(() => {
  setTimeout(() => {
    console.log('5');
  }, 0);

  Promise.resolve().then(() => console.log('promise'));

  console.log('4');
}, 0);
