// Example 1
// We've seen a few ways to define functions:
// slightly different but largely function similarly

function foo() {
  console.log('foo');
}

var bar = function() {
  console.log('bar');
};

const baz = function() {
  console.log('baz');
};

// Example 2

// Now we're going to learn a short-hand that has one glaring and very important difference. This is called an arrow function.

// Let's convert this add function:

// Start code
// const add = function(num1, num2) {
//   return num1 + num2;
// };

// First we replace the function keyword with an arrow:

// const add = (num1, num2) => {
//   return num1 + num2;
// };

// Example 3 - Refactor even more
// If our function just has one line of logic that we want to return we can eliminate the return keyword and curly braces!
// const add = (num1, num2) => num1 + num2;

// Next
// $ git checkout 08-arrow-func-activity-start
