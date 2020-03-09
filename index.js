// Example 1
// ## This works as we expect
// let varOne = 'Hello from the global scope';

// if (true) {
//   console.log(varOne);
// }
// Output: Hello from the global scope

// Example 2
// ## This causes a problem
let varOne = 'Hello from the global scope';

if (true) {
  console.log(varOne);
  let varTwo = 'Hello from the local scope';
}

// console.log(varTwo);
// ERROR - varTwo is not defined

// Example 3
// ### Important scope rule
let varOne = 'Hello from the global scope';

if (true) {
  console.log(varOne);
  let varTwo = 'Hello from the local scope';
  console.log(varTwo);
}

console.log(varTwo);

// This explains why we CAN access `varOne` and `varTwo` from _inside_ the "code block"
//  But we CAN NOT access `varTwo` from _outside_ the "code block"

// Example 4
// ## Fun with "scope trees"
// ### Let's draw a scope tree for the following:
let varOne = 'varOne';

if (true) {
  console.log(varOne);
  let varTwo = "Hello from varTwo's local scope";
  console.log(varTwo);

  if (true) {
    let varFour = "Hello from varFour's local scope";
  }
}

if (true) {
  let varThree = "Hello from varThree's local scope";
}

console.log(varTwo);

// here is the scope tree for the above code

// global scope (varOne)
//  local scope (varTwo)
//    local scope (varFour)
//  local scope (varThree)

// global scope can only access `varOne`
// The first local scope can only access `varOne` and `varTwo` and `varFour`
// The second local scope can only access `varOne` and `varThree`
