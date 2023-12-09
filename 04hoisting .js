console.log(myVar); // undefined
var myVar = 10;
console.log(myVar); // 10



var myVar; // Declaration is hoisted
console.log(myVar); // undefined
myVar = 10; // Assignment remains in place
console.log(myVar); // 10


sayHello(); // "Hello!"

function sayHello() {
  console.log("Hello!");
}