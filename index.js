// Turn the following into arrow functions:

// Original 1
// function subtract(num1, num2, num3) {
//   return num1 - num2 - num3;
// }

// Refactored 1 with arrow functions
// const subtract = (num1, num2, num3) => num1 - num2 - num3;

// Original 2
// function subtractWithOptionalThird(num1, num2, num3) {
//   if (num3) {
//     return num1 - num2 - num3;
//   } else {
//     return num1 - num2;
//   }
// }

// Refactored 2 with arrow function
// const subtractWithOptionalThird = (num1, num2, num3) => {
//   if (num3) {
//     return num1 - num2 - num3;
//   } else {
//     return num1 - num2;
//   }
// };

// Original 3
// function sayHi(name) {
//   console.log('Hi ' + name + '!');
// }

// Refactored 3 with arrow function
// Notes:
// Parentheses around a single parameter are optional
// We can omit the brackets and write this in one line.
// This implies a return keyword but that has no impact on the functionality.
// const sayHi = name => console.log('Hi ' + name + '!');

// this binding key difference
// using regular functions
const obj1 = {
  name: 'Sam',
  greet: function() {
    function getGreeting() {
      return "Hi! I'm " + this.name;
    }

    const greeting = getGreeting();
    console.log(greeting);
  }
};
obj1.greet(); // Hi! I'm undefined

// Using regular function with arrow functions
const obj = {
  name: 'Sam',
  greet: function() {
    const getGreeting = () => "Hi! I'm " + this.name;

    const greeting = getGreeting();
    console.log(greeting);
  }
};
obj.greet(); // Hi! I'm Sam
// NOTE:
// * Arrow functions don't follow our typical rules for the this keyword
// * Instead, the this keyword in the inner functions has the same value of the this keyword in the outer function.
// if this doesn't make sense, it's ok, you will see arrow functions alot for your final project in react work and eventually you'll devlelop an intuition as you use it more
// Link to dive deeper into `this` keyword ()

// https://github.com/coding-boot-camp/live-online-web-async-classroom/blob/master/catch-up-sessions/05-catch-up-react-es6.md

// Next branch
// $ git checkout 09-template-strings
