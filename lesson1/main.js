// CLOSURES

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
