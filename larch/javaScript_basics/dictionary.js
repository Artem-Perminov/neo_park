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

const myFn = (priorities, roles) => {
  const sortedData = Object.entries(priorities).filter(([key]) => {
    return roles.includes(key);
  });

  const result = sortedData.sort(([, value1], [, value2]) => value1 - value2);

  return result.at(-1)[0];
};

console.log(myFn(priorities, roles));
