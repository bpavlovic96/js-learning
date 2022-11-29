'use strict';

const calcAge = birthYear => {
  const age = 2037 - birthYear;

  const printAge = () => {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';
      // reassigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    console.log(output);
  };
  printAge();

  return age;
};

const firstName = 'Jonas';
calcAge(1991);

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas'; // able to exectue
let job = 'teacher'; // unable to execute
const year = 1991; // unable to execute

// functions
// console.log(addDecl(2, 3)); // able to execute
// console.log(addExpr(2, 3)); // unable to execute
// console.log(addExprArrow(2, 3)); // unable to execute

// declaration
function addDecl(a, b) {
  return a + b;
}

// expression
const addExpr = () => {
  return a + b;
};

// expression
const addExprArrow = function () {
  return a + b;
};

// if var = function, then it is undefined (example -- var addExpr = () => {})

// example of why var shouldn't be used
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false

console.log(this);
const calcAge2 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge2(1991);

const calcAge2Arrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge2Arrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
