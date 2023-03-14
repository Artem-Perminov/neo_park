const priorities = {
  guest: 200,
  user: 2,
  admin: 10,
  anarhist: 777,
  moderator: 10,
  vip: 50,
};

const mySort = (obj) => {
  const newObj = JSON.parse(JSON.stringify(obj));
  const newArr = Object.entries(newObj).sort();
  return newArr;
};

console.log(mySort(priorities));
