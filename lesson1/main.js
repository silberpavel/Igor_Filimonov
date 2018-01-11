// CLOSURES - Замыкания

function counter() {
  var a = 0;

  return function add() {
    a++;
    return a;
  }
}

var plus = counter();

plus();
plus();
plus();
plus();
console.log(plus());
console.log(typeof(plus()));
console.dir(counter());


// SCOPES - Область видемости 
// Глобальные
// Локальные (все то что внутри функции)