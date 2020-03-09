// Turn the following into arrow functions:

// Original 1
function subtract(num1, num2, num3) {
  return num1 - num2 - num3;
}

// Refactored 1 with arrow functions
const subtract = (num1, num2, num3) => num1 - num2 - num3;

// Original 2
function subtractWithOptionalThird(num1, num2, num3) {
  if (num3) {
    return num1 - num2 - num3;
  } else {
    return num1 - num2;
  }
}

// Refactored 2 with arrow function
const subtractWithOptionalThird = (num1, num2, num3) => {
  if (num3) {
    return num1 - num2 - num3;
  } else {
    return num1 - num2;
  }
};

// Original 3
function sayHi(name) {
  console.log('Hi ' + name + '!');
}

// Refactored 3 with arrow function
// Notes:
// Parentheses around a single parameter are optional
// We can omit the brackets and write this in one line.
// This implies a return keyword but that has no impact on the functionality.
const sayHi = name => console.log('Hi ' + name + '!');
