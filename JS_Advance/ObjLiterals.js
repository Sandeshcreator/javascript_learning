//1. Shorthand Property Names:
const name = 'Alice';
const age = 30;

// Before ES6
const person = {
  name: "name",
  age: age
};

// ES6 Shorthand
const personES6 = {
  name,
  age
};

//2. Computed Property Names:
const key = 'foo';

// Before ES6
const obj = {};
obj[key] = 'value';

// ES6 Computed Property
const objES6 = {
  [key]: 'value'
};


//3. Method Shorthand:
// Before ES6
const obj = {
    greet: function() {
      console.log('Hello!');
    }
  };
  
  // ES6 Method Shorthand
  const objES6 = {
    greet() {
      console.log('Hello!');
    }
  };
  

//4. Object Destructuring:

  const person = {
    name: 'Alice',
    age: 30,
    country: 'Wonderland'
  };
  
  // Destructuring in ES6
  const { name, age } = person;
  console.log(name); // Output: 'Alice'
  console.log(age); // Output: 30
  

  //5. Spread Operator in Objects:
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, ...obj1 };
  
  console.log(obj2); // Output: { c: 3, a: 1, b: 2 }
  