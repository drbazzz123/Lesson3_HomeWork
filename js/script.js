//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// console.log(fruts);

// const frutsNames = fruts.map((item) => item.name)

// console.log(frutsNames);



//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 1) continue;
//   console.log(i);
// }



//  -- 3 --
//Замініть цикл "for" на "while"

// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }

// console.log(`\n`)

// let i = -1
// while (i < 4) {
//   i++
//   console.log(`цифра ${i}!`)
// }



//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// while (true) {
//   let value = +prompt("Введіть число більше 100");
//   if (!value || value > 100) break;
// }



//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// let girlsAge = girls.map((item) => item.age)

// let averAge = girlsAge.reduce((summ, item) => summ + item) / girls.length;

// console.log(averAge);
