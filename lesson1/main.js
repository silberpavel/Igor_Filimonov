
var addTo = function (passed) {
  var add = function (inner) {
    return passed + inner;
  }

  return add;
}


var addThree = addTo(3)
var addOne = addTo(1)

// console.dir(addThree);
// console.dir(addOne);

console.log(addThree(10));
console.log(addOne(8));

console.log(addThree(10));
console.log(addOne(8));
