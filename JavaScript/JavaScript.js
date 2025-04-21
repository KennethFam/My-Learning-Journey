// Input/Output Basics-----------------------------------------------------------------
// printing
console.log("Printed text")

//user input
// prompt takes in text and a default value, which is optional
// prompt must be declared like below first
const prompt = require("prompt-sync")();
let person = prompt("Please enter your name", "Harry Potter");
console.log(person)

// confirm() method displays a dialog box with a message, an OK button, and a Cancel button.
// confirm("Are you okay?")

// ask, pass text/question to user and execute a function depending on the answer (yes = 2nd argument, no = 3rd argument)
// ex:
// ask("Do you agree?", showOk, showCancel);

// JavaScript Variables-----------------------------------------------------------------
// naming restrictions:
// 1. The name must contain only letters, digits, or the symbols $ and _.
// 2. The first character must not be a digit.
// names cannot be reserved words

// Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using let. This still works now if we don’t put use strict in our scripts to maintain compatibility with old scripts.
// note: no "use strict" in this example
// num = 5; // the variable "num" is created if it didn't exist
// alert(num); // 5
// ex of error:
// "use strict";
// num = 5; // error: num is not defined

// Note that the language only has one type of number (Number) for integers and floats.
// JavaScript has a second number type, BigInt, used for very, very large integers.
let name = "John"; // declare variable, var can be used instead of let but it's old
let surname = "Doe";

console.log(name); // print to console
console.log(surname);

let age = 11;
console.log(age);

age = 54; // change variable value

console.log(age);

const pi = 3.14 // declare a constant
console.log(pi)
console.log((3 + 2) - 76 * (1 + 1))
console.log((4 + 6 + 9) / 77) 

let num = 5
console.log(num) 
num /= 2
console.log(num) 

// multiple variable declaration
let user = 'John', user_age = 25, message = 'Hello'; 
let a = b = c = 2 + 2; // a, b, and c are equal to 4

// this works too
// let user = 'John',
//   age = 25,
//   message = 'Hello';

console.log(pi + name);

// scientific notation
// numbers are accurate up to 15 digits
// maximum number of decimals is 17
let x = 123e5;
console.log(x); // 12300000

let y = "20";

let z = x + y // result = string concatenation
console.log(z);

// JavaScript interpreter works from left to right
// that means that if you are adding strings and numbers, make sure the numbers are first or in parentheses if you want to have the result in the string
// JavaScript wil try to convert strings to numbers in all numeric operations

// math operators
// Addition: +, +=
// Subtraction: -, -=
// Multiplication: *, *=
// Exponential: ** or Math.pow(base, exp)
// Division: /, /=
// Modulus: %, %=
// Increment: ++
// Decrement: --
// for increment & decrement: 3++ (wrong), varName++ (correct)
// Negation Operator: - (reverses sign of a number, ex: x = -x)
// Unary Plus: + (when used next to a non-Number, it convers it to a Number, ex: +"" = 0) (think of it as Number(...))
// Note: unary operators have higher precendance than binary ones

// bitwise operators
// AND: &, &=
// OR: |, |=
// XOR: ^, ^=
// NOT: ~
// LEFT SHIFT: <<, <<=
// RIGHT SHIFT: >>, >>=
// ZERO-FILL RIGHT SHIFT: >>>, >>>=

// comma operator
// comma: , (Allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned. Ex: a = (1 + 2, 3 + 4) -> a = 7)
// Note: commas have very low precedence, lower than assignment

x = "100";
y = "10";
z = x/y; // 10
console.log(z);
// works for most operations except addition (+)

// NaN is a JavaScript reserved word indicating that a number is not a legal number.
x = 100 / "Apple"; // result: NaN
console.log(x);
console.log(isNaN(x)); // prints true
// Note: NaN * 0 = 1
console.log(typeof NaN); // prints number

x = NaN;
y = "5";
console.log(x + y); // prints NaN5

// infinity
typeof Infinity; // returns number
x = 2 / 0;
y = -2 / 0;
console.log(x); // Infinity
console.log(y); // -Infinity
x = Infinity;
y = -Infinity;

// Hexadecimal
x = 0xFF; 
console.log(x); // displays in base 10
console.log(x.toString(16)); // display x in base 16

// numbers can be defined as objects using keyword new
y = new Number(123);
// Do not create Number objects.
// The new keyword complicates the code and slows down execution speed.
// Number Objects can produce unexpected results:
x = new Number(123);
console.log(y == x); // prints false
console.log(y === x); // prints false
// comparing 2 objects in JS always returns false
// == performs type coercion before comparing values
// === does not perform type coercion and compares both the vlalue and the type of the operands
// ex: 5 == "5" is true but 5 === "5" is false

console.log(typeof name); // typeof gets the type of the variable 

// fixed decimal places
x = 1.333333333;
console.log(x.toFixed(2));
// converting string to Number
x = "3";
console.log(Number(x) + 3);

// increment/decrement prefix/postfix
y = 3, x = 3;
console.log(y++ + " " + ++x);
// postfix: current value returned then incremented
// prefix: current value incremented then returned

a = 1;
b = 2;

c = 3 - (a = b + 1); // (a is assigned b + 1, which is 3)

console.log(c); // prints 0

// Data Types-----------------------------------------------------------------
// JavaScript is dynamically typed (there exist data types, but variables are not bound to any of them)

// 1. Number (aka ints & floats in other languages) (range: +-(2^53 - 1))
let number = 3;
number = 2.5;

// 2. BigInt (created by adding an n to the end of an integer)
const bigInt = 1234567890123456789012345678901234567890n;

// 3. String (3 types of quotes: double quotes, single quotes, and backticks) (no chars, just strings in JavaScript)
let str = "Hello";
str = 'Hello';
// backticks are "extended functionality quotes", allows us to embed variables and expressions into a string by wrapping them in ${…}
// aka template literal
str = `Hello`;
console.log(`The number is ${number}.`);

// 4. Boolean
let exBool = true;
exBool = false;
exBool = 1 > 2; // false

// 5. null (represents “nothing”, “empty” or “value unknown”)
let val = null;

// 6. undefined (“value is not assigned”) 
let rand; // undefined
rand = undefined; // can also be manually assigned

// 7. object (used to store collections of data and more complex entities)
typeof Math; // math is an example of an object

// 8. symbol (used to create unique identifiers for objects)
typeof Symbol("id");

// typeof function to get data type
typeof null; // returns "object" but it's an old error that was kept for compatibility 
typeof alert; // returns "function", but functions belong to "object" type (another old JavaScript error)

//Stings-----------------------------------------------------------------

// concatenation
console.log("Hello" + ", " + exBool);

// multiline strings
// template literals respect new lines
str = `Hello name,
        it's nice to meet you`;
console.log(str);

// a new line character, \n, must be added for regular strings
str = "hello there\nperson";
console.log(str);

// basic methods-----------------------

// length
console.log(str.length);

// getting char at index, returns empty string if no character is found at index
console.log(str.charAt(0));
// new way, allows negative indexes, which work just like Python
console.log(str.at(0));

// getting UTF-16 code of character at an index
console.log(str.charCodeAt(0));

// property access []
// strings are not mutatable, they're not arrays
// returns undefined if index no character found
console.log(str[0]);

// slicing strings, end position not included
// JavaScript is 0-indexed
// takes negative indexes
// omitting second paramter slices out rest of string
console.log(str.slice(1, 2));

// similar to slice but treats negative indexes as 0
console.log(str.substring(1, 2));

// deprecated: substr, omitting second paramter slices out rest of string
console.log(str.substr(1, 2));

// upper case and lower case conversion
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// concatenation
// joins 2 or more strings
console.log(str.concat("\n", "Hello"));

// removing whitespace from both slides of string
let text1 = "      Hello World!      ";
console.log(text1.trim());

// removing whitespace from start of string
console.log(text1.trimStart());

// removing whitespace from end of string
console.log(text1.trimEnd());

// padding strings
// these methods pad strings until they reach a certain length
// padding at the start
text1 = "5";
console.log(text1.padStart(4, "0"));

// padding at the end
console.log(text1.padEnd(4, "0"));

// repeating strings
console.log(text1.repeat(5));

// replacing a string
// replaces first match by default, method is case sensitive
let text = "Please visit Microsoft!";
console.log(text.replace("Microsoft", "W3Schools"));

// for case insensitive, use a regular expression with /i flag (insensitive)
// note that regular expressions are written without quotes
console.log(text.replace(/MICROSOFT/i, "W3Schools"));
// use /g flag (global match) to replace all matches
text = "Please visit Microsoft and Microsoft!";
console.log(text.replace(/Microsoft/g, "W3Schools"));

// new similar replace method
// regular expression can be used but /g flag must be set
console.log(text.replaceAll("Microsoft", "W3Schools"));

// converting string to array
// omitted seperator = whole array at index 0, seperator = "" results in an array of individual characters
console.log(text.split(""));

//Conditionals-----------------------------------------------------------------
// compairson operators
// Strict Equality: ===, Tests whether the left and right values are identical to one another
// Strict Non-Equality: !==, Tests whether the left and right values are not identical to one another
// Less Than: <, Tests whether the left value is smaller than the right one.
// Greater Than: >, Tests whether the left value is greater than the right one.
// Less than or Equal to: <=, Tests whether the left value is smaller than or equal to the right one.
// Greater than or Equal to: >=, Tests whether the left value is greater than or equal to the right one.
// May see some people using == and != in their tests for equality and non-equality. These are valid operators in JavaScript, but they differ from ===/!==. The former versions test whether the values are the same but not whether the values' datatypes are the same. The latter, strict versions test the equality of both the values and their datatypes. The strict versions tend to result in fewer errors.

// string comparison algorithm-----------------------
// 1. Compare the first character of both strings.
// 2. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
// 3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
// 4. Repeat until the end of either string.
// 5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

// JavaScript uses unicode, so lowercased letters > uppercased letters

// comparing different types-----------------------
// values are converted to numbers
console.log('2' > 1);
console.log(true == 1);

a = 0;
console.log( Boolean(a) ); // false

b = "0";
console.log( Boolean(b) ); // true

console.log(a == b); // true!
// From JavaScript’s standpoint, this result is quite normal. An equality check converts values using the numeric conversion (hence "0" becomes 0), while the explicit Boolean conversion uses another set of rules.

console.log('' == false); // true since empty string gets converted to 0

// strict equality checker
console.log('' === false); // false

console.log(null === undefined); // false
console.log(null == undefined); // true
// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN

console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true
// The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.
// On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

// undefined
console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)
// Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
// The equality check (3) returns false because undefined only equals null, undefined, and no other value.

// conditional statements-----------------------
// basic format ex: if (conditional) {}
// allows: if (condition) one_line_code;
// Any value that is not false, undefined, null, 0, NaN, or an empty string ('') actually returns true when tested as a conditional statement, therefore you can use a variable name on its own to test whether it is true, or even that it exists (that is, it is not undefined.).
num = 1;
if (num == 1) {

}
else if (num == 2) {

}
else {

}

// logical operators-----------------------
// can be applied to values of any type, not just booleans
// OR: ||
// AND: &&
// NOT: !
// Nullish Coalescing: ??

// OR
console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

// non-boolean operands are converted to boolean for evaluation
console.log(0 || 20);
// true value is returned in original form without conversion
// A chain of OR || returns the first truthy value or the last one if no truthy value is found.

// executing commands only if the condition on the left is false
false || console.log("printed");

// AND
// higher precedence than OR
// can be applied to values of any type, not just booleans
// If all operands have been evaluated (i.e. all were truthy), returns the last operand.
// AND returns the first falsy value or the last value if none were found.
console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

// NOT
// highest precedence out of all logical operators
// converts operand to boolean type and returns inverse value
console.log(!false);

// we can use !! to convert a non-boolean to boolean, b/c the second ! undoes the inverse
console.log(!!0);

// switch statements-----------------------
// take a single expression/value as an input, and then look through several choices until they find one that matches that value, executing the corresponding code that goes along with it
// uses strong equality for cases
// if case matches, code is executed until nearest break, executing code in the next case without checking if there is not break in the current chase
// arbitrary expressions are allowed in cases (e.g. case b + 1)
switch(num) {
    case 1:
        // run code
        break;
    case 2:
        // run code
        break;
    default:
        // run code
        break;
}

// grouping cases
switch (a) {
    case 4:
        console.log('Right!');
      break;
  
    case 3: // (*) grouped two cases
    case 5:
        console.log('Wrong!');
        console.log("Why don't you take a math class?");
      break;
  
    default:
        console.log('The result is strange. Really.');
  }

// ternary operator-----------------------
// shortcut for if-else
// low precedence
let tern = exBool ? true : false; // true/false could be code instead
// multiple ?
age = prompt('age?', 18);

message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

console.log(message);

// Objects-----------------------------------------------------------------
// Objects are associative arrays with several special features.
// Objects are passed by reference. They are not copied.
// declaration: An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
// empty object
let eo = new Object();
let empt_obj = {};

// delcaring with values
let ex_obj = { // an object
  name: "John", // by key "name" store value "John"
  age: 30 // by key "age" store value 30
};
console.log(ex_obj);
// value can be of any type
// can remove property by using delete operator
delete ex_obj.age;
console.log(ex_obj);

// can also use multiword property names but must be quoted
let ex_obj2 = {
  name: "John",
  age: 30,
  "likes birds": true,  // multiword property name must be quoted
  // note: last property may end with comma ("trailing" or "hanging" comma, makes it easier to add/remove/move around properties)
}

// dot access does not work on multiword properties, must use []
console.log(ex_obj2["likes birds"]);

// can be used to get value from user at runtime and use that value to get another value
// dot notation cannot do the same
let key_ex = "name"
console.log(ex_obj[key_ex]);

// object with function and this
// "this" keyword refers to the current object the code is being executed in
let person1 = {
  name: "John",
  greeting() {
    console.log(`Hello, my name is ${name}!`);
  }
};
person1.greeting();

// Constructors-----------------------
// section on functions is after objects

// this works, but using a constructor would be better
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}
const salva = createPerson("Salva");
salva.introduceSelf();

// naming convention for constructor is to capitalize the name of the object you are creating
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}
// A constructor is just a function called using the new keyword. When you call a constructor, it will:
// create a new object
// bind this to the new object, so you can refer to this in your constructor code
// run the code in the constructor
// return the new object.
const frankie = new Person("Frankie");
frankie.introduceSelf();

// Computed Properties-----------------------
// We can use square brackets in an object literal, when creating an object. That’s called computed properties.
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

console.log( bag.apple ); // 5 if fruit="apple"

// same as 
let fruit2 = prompt("Which fruit to buy?", "apple");
let bag2 = {};

// take property name from the fruit variable
bag2[fruit2] = 5;

// more complex expression
let fruit3 = 'apple';
let bag3 = {
  [fruit3 + 'Computers']: 5 // bag.appleComputers = 5
};

// Property Value Shorthand-----------------------
age = 20;
let bag4 = {
  fruit, // same as fruit: fruit
  age // same as age: age
};
console.log(bag4);

// Property Names Limitations-----------------------
// none, can even use keywords
// They can be any strings or symbols (a special type for identifiers, to be covered later).
// Other types are automatically converted to strings.
// exeption: __proto__, special property that cannot be set to non-object value
let obj3 = {};
obj3.__proto__ = 5; // assign a number
console.log(obj3.__proto__); // [object Object] - the value is an object, didn't work as intended

// Property Existence Test-----------------------
// using undefined
console.log(bag.fruit === undefined);

// using "in" operator
// note that key is in string form otherwise, without quotes, it's assumed to be a var name that contains a string
console.log("fruit" in bag);

// special case where in works and comaprison to undefined doesn't
let obj4 = {
  test: undefined
};
console.log( obj4.test ); // it's undefined, so - no such property?
console.log( "test" in obj4 ); // true, the property does exist!

// Object Ordering-----------------------
// special order: integers properties are sorted while others appear in creation order
// integers properties: a string that can be converted to-and-from an integer without a change

// obj w/ integer properties
// if we wanted this in order of creation, simply add a non-numeric character to the keys
// e.g. "+49", "+41", etc.
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}

// obj w/ non-integer properties
let user4 = {
  name: "John",
  surname: "Smith"
};
user4.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user4) {
  console.log( prop ); // name, surname, age
}

// Object Assignment-----------------------
// as mentioned earlier, objects are assigned by reference
// While mutating the object we have a reference to affects all other variables that reference it, reassigning a variable does not change what the other variables refer to. For example:
let animal = { species: "dog" };
let dog = animal;

// reassigning animal variable with a completely new object
animal = { species: "cat" };

console.log(animal); // { species: "cat" }
console.log(dog); // { species: "dog" }

// Arrays & Loops-----------------------------------------------------------------

// Arrays-----------------------
// special type of object, typeof will return "object" for arrays
// 0-indexed, elements accessed like most other languages, arr[indexNum]
// may contain different types in same array, objects, functions, arrays

// declaration, notice the use of const (common practice), but let can be used too to make reassignment possible
const cars = ["Saab", "Volvo", "BMW", "Toyota", "Nissan"];
let cars_var = ["Saab", "Volvo", "BMW", "Toyota", "Nissan"];
// declaring empty array, then adding elements
const cars2 = [];
cars2[0]= "Saab";
cars2[1]= "Volvo";
cars2[2]= "BMW";
// using new keyword
const cars3 = new Array("Saab", "Volvo", "BMW", "Toyota", "Nissan");

// Array Methods-----------------------
// converting array to string
console.log(cars.toString());

// built-in methods
// length
console.log(cars.length);
// sort
console.log(`cars before sorting: ${cars}`);
console.log(cars.sort());

// adding new elements
cars.push("Hyundai");
console.log(cars);
cars[cars.length] = "Honda";
console.log(cars);

// removing last element from array, returns what was popped up
console.log(cars.pop())

// adding elements to high indexes can create undefined holes
const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";  // Creates undefined "holes" in fruits
console.log(fruits);

// Array(40) not the same as [40], Array(40) creates 40 undefined elements
console.log(new Array(40));

// check if object is an array
console.log(`cars is an array: ${Array.isArray(cars)}`);

// instanceof operator returns true if an object is created by a given constructor
console.log(`cars is an array: ${cars instanceof Array}`);

// getting the nth element, return is same as []
// ex: 3rd element
console.log(cars.at(2));

// join(), works like toString() but lets you specifiy seperator
console.log(cars.join(" * "));

// shift(), returns value that was shifted out
// removes 1st element and shifts all other elements to lower index
console.log(cars.shift());
console.log(cars);

//unshift(), returns new array length
// unshifts older elements, and adds argument to beginning of array
console.log(cars.unshift("Lambo"));
console.log(cars);

// delete, deletes element but leaves undefined holes in array
delete cars[0];
console.log(cars);
cars.shift();

// concatenating arrays, returns result of concatenation
// does not change existing arrays, can take any number of array arguments
// can also take strings as argument
console.log(cars.concat(cars2));
console.log(cars.concat("Tesla"));
// will work with objects
// can only concat values of object by adding special property: Symbol.isConcatSpreadable
let arr1 = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log( arr1.concat(arrayLike) ); // 1,2,something,else

// forEach
// syntax:
// arr.forEach(function(item, index, array) {
   // ... do something with an item
// });
["Bilbo", "Gandalf", "Nazgul"].forEach(console.log); // calls console.log on each element and prints the element, index, and array
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
}); // if the function returns anything, the return value is ignored

// Searching Arrays
// arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
// arr.includes(item, from) – looks for item starting from index from, returns true if found.
// Note: include works with NaN but indexOf does not (will return -1 even if NaN is in the array)
let arr3 = [1, 0, false, 1];

console.log( arr3.indexOf(0) ); // 1
console.log( arr3.indexOf(false) ); // 2
console.log( arr3.indexOf(null) ); // -1

console.log( arr3.includes(1) ); // true

// lastIndexOf()
// same as indexOf, but looks for from right to left.
console.log( arr3.lastIndexOf(1));

// copyWithing()
// arr.copyWithin(target, start, end) – copies its elements from position start till position end into itself, at position target (overwrites existing).
// does not add items to array
// does not change length of array
// overwrites existing values
// ex: copy element(s) at index 0 to index 2
cars.copyWithin(2, 0);
console.log(cars);
// ex: copy to index 0, the elements from index 0 to 2
cars.copyWithin(0, 0, 2);
console.log(cars);

// flat(), flattens array (reduces dimensions)
const myArr = [[1,2],[3,4],[5,6]];
console.log(myArr.flat());

// flatMap(), first maps all elements of an array and then creates a new array by flattening the array.
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.flatMap(x => [x, x * 10]));

// find
// used to find object with specific condition
// syntax
// let result = arr.find(function(item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
// });
// If it returns true, the search is stopped, the item is returned. If nothing is found, undefined is returned.
// ex:
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

let user1 = users.find(item => item.id == 1);

console.log(user1.name); // John

// filter
// just like find but doesn't stop after first element, returns array of all elements that match condition
// same syntax as find
// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

console.log(someUsers.length); // 2

// sort(fn)
// elements are converted to strings for comparisons
let arr4 = [ 1, 2, 15 ];

// the method reorders the content of arr
arr4.sort();

console.log( arr4 );  // 1, 15, 2
// to use own sorting order, we need to supply a function as the argument of arr.sort()
function compare(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
}
arr4.sort(compare);

console.log(arr4);  // 1, 2, 15

// looking at how elements are compared
[1, -2, 15, 2, 0, 8].sort(function(a, b) {
  console.log( a + " <> " + b );
  return a - b;
});

// compariosn functions
// may return any number
// a comparison function is only required to return a positive number to say “greater” and a negative number to say “less
// ex:
arr4 = [ 1, 2, 15 ];

arr4.sort(function(a, b) { return a - b; });

console.log(arr);  // 1, 2, 15

// using arrow function for sorter code
arr4 = [ 1, 2, 15 ];
arr4.sort((a, b) => a - b);

// The arr.findIndex method has the same syntax but returns the index where the element was found instead of the element itself. The value of -1 is returned if nothing is found.
// The arr.findLastIndex method is like findIndex, but searches from right to left, similar to lastIndexOf.
// Find the index of the first John
console.log(users.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John
console.log(users.findLastIndex(user => user.name == 'John')); // 3

// locale compare
// For many alphabets, it’s better to use str.localeCompare method to correctly sort letters, such as Ö.
let countries = ['Österreich', 'Andorra', 'Vietnam'];

console.log( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

console.log( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)

// reverse()
// reverses order of elements in array
console.log( countries.reverse() );

// split()
// splits a string into an array by the given delimiter delim
// takes in 2 arguments: 1st a delimiter, and 2nd a length limit (optional) (extra elements ignored)
// if split takes in an empty str like '', the string would be split into an array of letters
let names = 'Bilbo, Gandalf, Nazgul';

let arr5 = names.split(', ');

for (let name of arr5) {
  console.log( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}

// join(glue)
// does the opposite of split
// creates a string of arr items joined by glue between them
str = arr.join(';'); // glue the array into a string using ;

console.log( str ); // Bilbo;Gandalf;Nazgul

// splice(), modifies (deletes/replaces) items from array and also returns the new array with the edited items
// 1st parameter defines the position where new elements should be added (spliced in), takes negative indexes
// 2nd parameter defines how many elements should be removed (not index)
// rest of parameters define the new elements to be added
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.splice(2, 0, "Lemon", "Kiwi")); // insert these two elements at index 2, and delete 0 element(s)
console.log(fruits2);
// can be used to remove elements without leaving holes
fruits2.splice(0, 1);
console.log(fruits2);
// passing no arguments simply results in a return of a copy of the original array

// toSpliced(), same as splice() but creates & returns new array instead of altering old one
const months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months.toSpliced(0, 1));

// slice() slices out a piece of an array into a new array
// creates new array and does not alter old array
// can take 2 arguments, 1 for start (inclusive) and 1 for end (not included)
const citrus = fruits2.slice(1);
console.log(citrus);
console.log(fruits2.slice(1, 2))

// Automatic toString()
// JavaScript automatically converts an array to a comma separated string when a primitive value is expected.
console.log(fruits2);

// using map() to do something to each item in a collection
// map takes in a callback (e.g. a function) as in argument
// map automatically loops through the whole array and performs the callback function on the array
function toUpper(string) {
  return string.toUpperCase();
}
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const upperCats = cats.map(toUpper);
console.log(upperCats);

// using filtered() to create new collection containing only items that match
// like map but function passed in returns boolean
// if boolean function returns true, item is added
function lCat(cat) {
  return cat.startsWith("L");
}
const filtered = cats.filter(lCat);
console.log(filtered);

// reduce() and reduceRight() (same as reduce but goes from right to left)
// syntax:
// let value = arr.reduce(function(accumulator, item, index, array) {
      // ...
// }, [initial]);
// The function is applied to all array elements one after another and “carries on” its result to the next call.
// accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
// item – is the current array item.
// index – is its position.
// array – is the array.
// As the function is applied, the result of the previous function call is passed to the next one as the first argument.
// just like .map() and .filter(), it expects callback function but there are two differences
// The callback function takes two arguments instead of one. The first argument is the accumulator, which is the current value of the result at that point in the loop. The first time through, this value will either be set to the initialValue (described in the next bullet point), or the first element in the array if no initialValue is provided. The second argument for the callback is the current value, which is the item currently being iterated on.
// It also takes in an initialValue as a second argument (after the callback), which helps when we don’t want our initial value to be the first element in the array. If there is not initial value, reduce will use the first element as the initial value and starts the iteration from the 2nd element. For instance, if we wanted to sum all numbers in an array, we could call reduce without an initialValue, but if we wanted to sum all numbers in an array and add 10, we could use 10 as our initialValue.
// if no initial value is given and array is empty, reduce will return an error 
// it's advised to always set an initial value
const arr2 = [1, 2, 3, 4, 5];
const productOfAllNums = arr2.reduce((total, currentItem) => {
  return total * currentItem;
}, 1);
console.log(productOfAllNums); // Outputs 120;
console.log(arr2); // Outputs [1, 2, 3, 4, 5]
// In the above function, we:
// Pass in a callback function, which is (total, currentItem) => { return total * currentItem }.
// Initialize total to 1 in the second argument.
// So what .reduce() will do is go through every element in arr and apply the callback function to it. It updates total without actually changing the array itself. After it’s done, it returns total.
arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
console.log(result); // 15
// notice how arguments are pass in order, name does not matter, and extra arguments are ignored

// example of using all 3 functions to simplify code:
function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}
// can be written as:
function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}
// notice how you can use multiple methods in succession

// some(fn) and every(fn)
// These methods behave sort of like || and && operators: if fn returns a truthy value, arr.some() immediately returns true and stops iterating over the rest of items; if fn returns a falsy value, arr.every() immediately returns false and stops iterating over the rest of items as well.
// ex:
function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

// arr.fill(value, start, end) – fills the array with repeating value from index start to end.

// more methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// thisArg argument-----------------------
// Almost all array methods that call functions – like find, filter, map, with a notable exception of sort, accept an optional additional parameter thisArg.
// syntax:
// arr.find(func, thisArg);
// arr.filter(func, thisArg);
// arr.map(func, thisArg);
// ...
// thisArg is the optional last argument
// ex:
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23
// If in the example above we used users.filter(army.canJoin), then army.canJoin would be called as a standalone function, with this=undefined, thus leading to an instant error.
// A call to users.filter(army.canJoin, army) can be replaced with users.filter(user => army.canJoin(user)), that does the same. The latter is used more often, as it’s a bit easier to understand for most people.

// Loops-----------------------

// loop through a collection
for (const car of cars) {
  console.log(car);
}

// for loop format
// for (initializer; condition; final-expression) {
      // code to run
// }
// initializer, condition, and/or final-expression can be omitted (removing all = infinite loop) (semi-colons must still be present)
// An initializer — this is usually a variable set to a number, which is incremented to count the number of times the loop has run. It is also sometimes referred to as a counter variable.
// A condition — this defines when the loop should stop looping. This is generally an expression featuring a comparison operator, a test to see if the exit condition has been met.
// A final-expression — this is always evaluated (or run) each time the loop has gone through a full iteration. It usually serves to increment (or in some cases decrement) the counter variable, to bring it closer to the point where the condition is no longer true.
// ex:
// notes: 
// i can be omitted, code will still work
// i will not exist outside the loop
// we don't have to declare a variable and can use an existing one
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

// break keyword
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
  // breaks out of for loop after 1 iteration
  break;
}

// continue keyword
for (let i = 0; i < cats.length; i++) {
  if (cats[i] == "Leopard") {
    // if the cat is a Leopard, continue and do not print it
    continue;
  }
  console.log(cats[i]);
}

// Please note that syntax constructs that are not expressions cannot be used with the ternary operator ?. In particular, directives such as break/continue aren’t allowed there.
// ex: (i > 5) ? alert(i) : continue; is not allowed

// while loop
// syntax:
// initializer
// while (condition) {
    // code to run

//   final-expression
// }
// curly braces can be omitted for a single statement
// anything can be used as condition b/c it will be converted to truthy
// ex:
let i = cats.length - 1;
while (i > 0) {
  console.log(cats[i]);
  i--;
}
i = 1
while (i) console.log(i--);

// do...while loop
// same as while loop but executes at least once
// syntax:
// initializer
// do {
    // code to run

//   final-expression
// } while (condition);
do {
  console.log("Do while loop result.");
} while (i > 0);

// for...in loop
// used with objects
// syntax: 
// for (key in object) {
    // executes the body for each key among object properties
// }
let user2 = {
  name: "John",
  age: 30,
  isAdmin: true
};
// note that the var declaration can have any name, not just "key"
for (let key in user2) {
  // keys
  console.log( key );  // name, age, isAdmin
  // values for the keys
  console.log( user[key] ); // John, 30, true
}

// using labels for break/continue
// helps simplying breaking/continuing
// notice how only 1 break was used instead of 2
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}
console.log("Done!")

// break can be used in any code block but continue can only be used in a loop
// ex: 
// label: {
    // ...
//   break label; // works
    // ...
// }

// Functions-----------------------------------------------------------------
// A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
// An argument is the value that is passed to the function when it is called (it’s a call time term).

function threeSum(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(`The sum of 3 1s is ${threeSum(1, 1, 1)}.`);
// calling a function with parameters without default values without arguments will result in the parameters being set to undefined
console.log(threeSum())

// setting default values-----------------------
// note that default values jump in when argument is not passed for a parameter or argument for parameter = undefined
// ex: if printText(undefined) is called, then the default value will also be used
function printText(str = "default") {
  console.log(str)
}
printText()

// default values can also be other functions that evaluate to another value
// function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
// }

// old ways of checking for default values
function showMessage(from, text) {
  if (text === undefined) {
    text = 'no text given';
  }

  console.log( from + ": " + text );
}

function showMessage(from, text) {
  // If the value of text is falsy, assign the default value
  // this assumes that text == "" is the same as no text at all
  // remember, || returns the first truthy value it encounters
  text = text || 'no text given';
}

// Variable shadowing-----------------------
// If there is a global variable and a same-named variable is declared inside a function then it shadows the outer one (e.g. the local variable is used).

// anonymous functions & arrow functions-----------------------

// anonymous functions have no name
// ex:
// (function () {
//   alert("hello");
// });
// normally used as a parameter for functions that take a function as arguments

// ex: event listener, which takes name of event and function to perform in case of event
// textBox.addEventListener("keydown", function (event) {
//   console.log(`You pressed "${event.key}".`);
// });

// another anonymous function:
// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

// arrow function
// same function but with arrow notation
// syntax: let func = (arg1, arg2, ..., argN) => expression;
// This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.
// If there are no arguments, parentheses are empty, but they must be present:
// some examples:
let sum = (a, b) => a + b;
console.log(sum(99, 99));

let welcome = (age < 18) ?
  () => console.log('Hello!') :
  () => console.log("Greetings!");

welcome();

// for longer functions, we need curly braces which require a return statement
sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

console.log(sum(44, 44));

// textBox.addEventListener("keydown", (event) => {
//   console.log(`You pressed "${event.key}".`);
// });
// parentheses around event can be omitted if there's only one paramter

// arrow function without parameters
// input.addEventListener("change", () => {
//   const num = parseFloat(input.value);
//   if (isNaN(num)) {
//     para.textContent = "You need to enter a number!";
//   } else {
//     para.textContent = `${num} squared is ${squared(num)}. `;
//     para.textContent += `${num} cubed is ${cubed(num)}. `;
//     para.textContent += `${num} factorial is ${factorial(num)}. `;
//   }
// });

//if your function contains only one line that's a return statement, you can also omit the braces and the return keyword and implicitly return the expression
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]

// item => item * 2 is the same as
function doubleItem(item) {
  return item * 2;
}

// scope-----------------------
// When you create a function, the variables and other things defined inside the function are inside their own separate scope, meaning that they are locked away in their own separate compartments, unreachable from code outside the functions.
// The top-level outside all your functions is called the global scope. Values defined in the global scope are accessible from everywhere in the code.
// Functions are allowed to be redeclared, and the last declaration gets used. The previous declarations are effectively overwritten.
const name7 = "Chris";
function greeting() {
  console.log(`Hello ${name7}: welcome to our company.`);
}
function greeting() {
  console.log(`Our company is called ${name7}.`);
}
// calls the second definition not the first
greeting()

// nullish coalescing operator ??-----------------------
function showCount(count) {
  // if count is undefined or null, show "unknown"
  console.log(count ?? "unknown");
}

// return-----------------------
// functions return undefined by default whether or not there is a return statement
// return by itself returns undefined
// returns spanning multiple lines
// return (
//   some + long + expression
//   + or +
//   whatever * f(a) + f(b)
//   )
// do not do b/c JS automatically puts a ; after return
// return
//  (some + long + expression + or + whatever * f(a) + f(b))

// function names-----------------------
// Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.
// A function should do exactly what is suggested by its name, no more.
// Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two).

// function expressions-----------------------
// notice the semi-colon at the end, it's like a regular variable assignment: let expr = ...;
let expr = function() {
  return 2 + 3 + 5;
};

function ex() {
  console.log("example");
}

// prints what expr is
console.log(expr);
// runs expr and prints the return value
console.log(expr());
// In JS, a function is a value, so we can treat it like one.
// this copies expr into expr_copy
let expr_copy = expr;
let ex_copy = ex;
console.log(expr_copy());
console.log(ex_copy());

// function declaration vs function expressions-----------------------
// A Function Expression is created when the execution reaches it and is usable only from that moment.
// A Function Declaration can be called earlier than it is defined.
// In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.
// this won't work:
// let age = 16; // take 16 as an example

// if (age < 18) {
//   welcome();               // \   (runs)
//                            //  |
//   function welcome() {     //  |
//     alert("Hello!");       //  |  Function Declaration is available
//   }                        //  |  everywhere in the block where it's declared
//                            //  |
//   welcome();               // /   (runs)

// } else {

//   function welcome() {
//     alert("Greetings!");
//   }
// }

// // Here we're out of curly braces,
// // so we can not see Function Declarations made inside of them.

// welcome(); // Error: welcome is not defined

// this will work:
age = prompt("What is your age?", 18);

welcome = (age < 18) ?
  function() { console.log("Hello!"); } :
  function() { console.log("Greetings!"); };

welcome(); // ok now

// JS Call Stack-----------------------
// JS uses call stack to manage execution contexts: global execution context and function execution contexts
// stack works on last-in-first-out (LIFO) principle
// When you execute a script, the JavaScript engine creates a global execution context and pushes it on top of the call stack.
// Whenever a function is called, the JavaScript engine creates a function execution context for the function, pushes it on top of the call stack, and starts executing the function.
// If a function calls another function, the JavaScript engine creates a new function execution context for the function being called and pushes it on top of the call stack.
// When the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where it left off.
// The script will stop when the call stack is empty.
// when JS engine executes a script, it places the global execution context (denoted by main() or global()) function on the call stack
// JavaScript is a single-threaded programming language. This means that the JavaScript engine has only one call stack. Therefore, it only can do one thing at a time.
// When executing a script, the JavaScript engine executes code from top to bottom, line by line. In other words, it is synchronous.
// Asynchronous means the JavaScript engine can execute other tasks while waiting for another task to be completed. For example, the JavaScript engine can:
  // Request for data from a remote server.
  // Display a spinner
  // When the data is available, display it on the webpage.
// To do this, the JavaScript engine uses an event loop.
