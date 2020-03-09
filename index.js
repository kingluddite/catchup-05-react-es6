// Example 1
function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = function() {
    console.log('yip yip! my name is ' + this.name);
  };
}

var ralph = new Dog('Ralph', 12);
ralph.bark();

// Example 2
// Well, there's another way to write this, using the class keyword
// This method of creating constructor functions is slightly prefered as it provides some nifty functionality and protection against someone calling your function without the new keyword

class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  bark() {
    console.log('yip yip! my name is ' + this.name);
  }
}

var ralph = new Dog('Ralph', 12);
ralph.bark();

// Next branch:
// $ 05-constructor-activity-start
