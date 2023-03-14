// Задача 2.
// Дан словарь такого вида:
const priorities = {
  guest: 200,
  user: 2,
  admin: 1000,
  moderator: 10,
  vip: 50,
};

// И есть массив, где описаны допустимые поля из этого словаря:
const roles = ['user', 'vip', 'guest'];

// Нужно написать функцию, которая вернёт допустимое поле с максимальным значением.

// Пример вывода find(priorities, roles) => 'vip'

const find = (obj, arr) => {
  const sortedObject = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (arr.includes(key)) {
      sortedObject[key] = value;
    }
  });
  const sortedArr = Object.entries(sortedObject).sort(([, a], [, b]) => {
    return a - b;
  });
  const preResult = sortedArr.at(-1);
  const [key] = preResult;
  return key;
};

console.log(find(priorities, roles));
