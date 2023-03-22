// Задача 2.
// Дан словарь такого вида:
const priorities = {
  guest: 1,
  user: 2,
  admin: 100,
  moderator: 10,
  vip: 50,
};

// И есть массив, где описаны допустимые поля из этого словаря:
const roles = ['user', 'vip', 'guest'];

// Нужно написать функцию, которая вернёт допустимое поле с максимальным значением.

// Пример вывода find(priorities, roles) => 'vip'

const myFn = (obj, arr) =>
  Object.entries(obj)
    .filter(([value]) => arr.includes(value))
    .sort(([, value1], [, value2]) => value1 - value2)
    .at(-1)[0];

console.log(myFn(priorities, roles));
