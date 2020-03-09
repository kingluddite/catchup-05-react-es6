// Turn the following into arrow functions:

function subtract(num1, num2, num3) {
  return num1 - num2 - num3;
}
function subtractWithOptionalThird(num1, num2, num3) {
  if (num3) {
    return num1 - num2 - num3;
  } else {
    return num1 - num2;
  }
}
function sayHi(name) {
  console.log('Hi ' + name + '!');
}

// Next branch (solution)
// $ git checkout 08-arrow-funct-activity-solution
