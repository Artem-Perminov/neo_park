const sub = 'carq';
const string = 'fghcarhfqjn';

console.log(string.indexOf(sub));
console.log(string.includes(sub));

const stringSearch = (sub, string) => {
  let result = [];

  let newString = '';

  for (const el of sub) {
    if (string.includes(el)) {
      result.push(true);
      if (!newString.split('').includes(el)) {
        newString += el;
      }
    } else {
      result.push(false);
    }
  }

  return result.every((el) => el === true) && sub === newString;
};

console.log(stringSearch(sub, string));
