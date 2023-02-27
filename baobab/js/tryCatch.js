// console.log(a);

try {
  console.log(a);
} catch (e) {
  console.log('ERROR!');
  console.log(e);
  console.log(e.name);
  console.log(e.text);
} finally {
  console.log('Done');
}

console.log('Next');
