'use strict';

function randomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let numberBot = function (x) {
  let randNumb = randomNumbers(100, 1);
  return function selectNumber() {
    console.log(randNumb);
    let question = +prompt('Угадай число от 1 до 100');
    if (question === randNumb && x <= 10 && x !== 0) {
      const newGame = confirm(
        'Поздравляю, Вы угадали!!! Хотели бы сыграть еще?'
      );
      if (newGame) {
        //сравниваю с true (if принимает значение true/false)
        numberBot(9)();
      } else {
        alert('Игра окончена');
      }
    } else if (x === 0) {
      const failedGame = confirm('Попытки закончились, хотите сыграть еще?');
      if (failedGame) {
        numberBot(9)();
      } else {
        alert('Игра окончена');
      }
    } else if (question > randNumb && x !== 0) {
      alert(`Загаданное число меньше, осталось попыток: ${x}`);
      x--;
      selectNumber();
    } else if (question < randNumb && question !== 0 && x !== 0) {
      alert(`Загаданное число больше, осталось попыток: ${x}`);
      x--;
      selectNumber();
    } else if (question === 0) {
      alert('Игра окончена');
    } else if (question !== typeof Number) {
      alert('Введите число!'), selectNumber();
    }
  };
};

numberBot(9)();
