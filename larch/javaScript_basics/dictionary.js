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

const myFn = (obj, roles) => {
  const newObj = {};

  let result;

  const keysAndValues = Object.entries(obj);

  keysAndValues.forEach(([key, value]) => {
    if (roles.includes(key)) {
      newObj[key] = value;
    }
  });

  result = Object.entries(newObj).sort(([, value1], [, value2]) => {
    return value1 - value2;
  });

  const [key] = result.at(-1);

  return key;
};

console.log(myFn(priorities, roles));
