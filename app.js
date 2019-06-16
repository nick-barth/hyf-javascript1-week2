"use strict";
// Objects
// Item that has properties
// Key: Value

const thisIsAConst = true;

const newUser = {
  userName: "Nick", // string
  age: 29, // number
  friends: [], // Array
  hasAccess: false, // Boolean
  pet: [
    {
      type: "cat",
      age: 2
    },
    {
      type: "tutle",
      age: 100
    }
  ], //Array of objects,
  sayHello: function() {
    console.log("hello");
  }
};

const petProperty = "pet";

// Two ways to access and object property
// Bracket notation
console.log(newUser[petProperty]);
// Dot notation
newUser.sayHello();

newUser.hasAccess = true;

// Make an object hyfClass19
// One of bool, string, func, array, number
const hyfClasses = [
  {
    name: "Class 22",
    countOfStudents: 15,
    namesOfStudents: ["A", "B", "C"],
    onAir: true
  },
  {
    name: "Class 19",
    countOfStudents: 135,
    namesOfStudents: ["A"],
    onAir: true
  }
];

// Write a function
const addTwoNumbers = (a, b) => a + b;

// //Palindrome
// const isPalindrome = str => {
//   const length = str.length;
//   let palindromeFlag;
//   for (let i = 0; i < length; i++) {
//     if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
//       palindromeFlag = false;
//     }
//   }
//   return palindromeFlag;
// };

// const result = isPalindrome("lol");

// console.log(result);

const a = 3;
const b = 7;
// 5 lines of code to check
if (a === b) {
  console.log("we are equal");
} else {
  console.log("we are not equal");
}

a === b ? console.log("hello") : console.log("goodbye");

// This is a switch statement
switch (a) {
  case a % 3 == 0 && a % 5 == 0:
    console.log("fizzbuzz");
    break;
  case 3:
    console.log("fizz");
    break;
  case 5:
    console.log("buzz");
    break;
  default:
    console.log(a);
}

// TRUTH AND FALSY

const value = 3;
const secondValue = "3";

let undefinedVariable;

// Scope
if (true) {
  const scopeb = "scope b";
}

//
function nicksFunction(a, b, c) {}

const nicksSecondFunction = (a, b) => {
  console.log(arguments);
};

//
// array manipulation
// object
// fancy big conditional
// string manipulation
//
