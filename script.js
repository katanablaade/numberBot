'use strict';

// function randomNumbers(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }
// const numbers = randomNumbers(100, 1);
// console.log(numbers);

let numberBot = function (x, y) {
  let question = +prompt('Угадай число от 1 до 100');
  console.log(question);
  function selectNumber() {
    if (question === x && y <= 10 && y !== 0) {
      const newGame = confirm(
        'Поздравляю, Вы угадали!!! Хотели бы сыграть еще?'
      );
      if (newGame === true) {
        numberBot(52, 10);
      } else {
        alert('Игра окончена');
      }
    } else if (y === 0) {
      const failedGame = confirm('Попытки закончились, хотите сыграть еще?');
      if (failedGame === true) {
        numberBot(52, 10);
      } else {
        alert('Игра окончена');
      }
    } else if (question > x && y !== 0) {
      alert(`Загаданное число меньше, осталось попыток: ${y}`),
        numberBot(52, y - 1);
    } else if (question < x && question !== 0 && y !== 0) {
      alert(`Загаданное число больше, осталось попыток: ${y}`),
        numberBot(52, y - 1);
    } else if (question === 0) {
      alert('Игра окончена');
    } else if (question !== typeof Number) {
      alert('Введите число!'), numberBot(52, 10);
    }
  }
  return selectNumber();
};

numberBot(52, 10);
