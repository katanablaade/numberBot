"use strict";

let numberBot = function (x) {
  let question = +prompt("Угадай число от 1 до 100");
  console.log(question);
  function selectNumber() {
    if (question === x) {
      alert("Поздравляю, Вы угадали!!!");
    } else if (question > x) {
      alert("Загаданное число меньше"), numberBot(52);
    } else if (question < x && question !== 0) {
      alert("Загаданное число больше"), numberBot(52);
    } else if (question === 0) {
      alert("Игра окончена");
    } else if (question !== typeof Number) {
      alert("Введите число"), numberBot(52);
    }
  }
  return selectNumber();
};

let hiddenNumber = numberBot(52);

// let oop = function hiddenNumber(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// };
// hiddenNumber(100, 1);
// console.log(oop);
