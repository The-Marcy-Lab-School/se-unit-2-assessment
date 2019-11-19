# Unit 2 Assessment - JavaScript Fundamentals
## Written Assessment

1. **What is hoisting? Describe how hoisting affects variable _and_ function declarations. Provide a code snippet to illustrate hoisting for both.** 
Answer:Hoisting is when, during the moment the computer compiles, it picks up all function declarations and variables and brings it to the very top of the scope, although your code all remains exactly where it was written. Hoisting can affect the way your code is written because with `var` variables, they are taken during the compiling stage, declared, and initialized with undefined. `let` and `const` variables are declared but not initialized, which makes you right your code in chronogical order.
``` Example of var hoisted:
console.log(greeting); //Expected output: undefined
var greeting = 'Hello world!';
```
```
Example of let being hoisted(also applied to const)
console.log(greeting); //Expected output: reference error
let greeting = 'Hello world!';
```
``` Function Declarations
greeting(); //Expected output: 'Hello world!'
function greeting() {
  console.log('Hello world!');
}
```


2. **Why does the following block of code throw an error?**
  ```javascript
  const isMaya🧘🏽‍♀️ = true;

  if (isMaya🧘🏽‍♀️) {
    let status = 'Everything is just fine';
  } else {
    let status = 'Time to panic.'
  }

  console.log(status);
```
Answer: This code throw an error because This is an `if... else` statement, meaning that only line 27 OR line 29 will be run. Also since we declare it inside a block scope. If we try to access a variable that is out of scope, we will get a Reference Error.


3. **Why does the following block of code NOT throw an error?**
  ```javascript
  const isLaishaOnTime = true;

  if (isLaishaOnTime) {
    var status = 'Everything is just fine';
  } else {
    var status = 'Time to panic.'
  }

  console.log(status);
  ```
Answer: `Var` is a function scope that can be accessed globally and can be redeclared. `Let` and `const` cannot be redeclared.



4. **In JavaScript, we can declare variables with `var`, `let`, and `const`. What are the differences between each? Be sure to comment on how each declaration impacts the _scope_, _reassignment_, and _hoisting_ of variables.**
Answer: `Var` and `let` values can be reassigned. `Const` value cannot be reassigned. `Let` and `const` are local block scope. `Var` is a function scope. Only `var` can be hoisted because it is a function scoped.

5. **What does the following code log? Explain why?**
  ```javascript
  let bestPlayer = {name: "Lebron James"};
  let theGOAT = bestPlayer;
  bestPlayer.name = "Kevin Durant";
  console.log(theGOAT.name);
  ```
Answer: The following code logs "Kevin Durant" because on line 48 we declared `theGOAT` and assigned the object `bestPlayer`. On line 49 we changed `name` in the object using `.name` and we assigned it "Kevin Durant".

6. **What is the value of `b` after this code runs? Explain why this is the case.**
  ```javascript
  let a = 10;
  let b = a;
  a += 10;

  console.log(a);
  console.log(b);
  ```
The value of `b` after this code runs is still 10 because on line 57 we declared `a` and assigned it the value of `a` which hold a number value of `10`. On line 58 all we incremented `a` but we never reassign `b` the new value of `a` so it retains it's value.

7. **Where does the following code throw an error? What type of error? Why?**
  ```javascript
  const bffs = 'Enmanuel Laisha';
  bffs = 'Enmanuel Laisha Cielo';

  console.log(bffs);
  ```
Answer: The following code throw an error on line 68. It is a TypeError because we declare `bffs` with `const` so we cannot reassign it's value.

8. **Wait, why doesn't the code below throw an error?! 🧐 What does this demonstrate?**
  ```javascript
  const bffs = ['Enmanuel', 'Laisha'];
  bffs.push('Cielo');

  console.log(bffs);
  ```
Answer: The following code does not throw an error because even though we declare `bffs` with `const` it's value is assigned an array. Because it is an array , arrays can be mutated and also have prototype methods that allow you to mutate your array. So on line 77 `array.prototype.push` was used to push `'Cielo'` onto the array `bffs`.

9. **What is the purpose of _rest parameters_? How do we use them? Explain how do they differ from the `arguments` object. Illustrate the use of rest parameters by writing a function that takes any number of integers as arguments and returns their sum.**


  ```javascript
  sum(1, 2, 10); // 13
  sum(5); // 5
  sum(100, 200, 800, 1, 1, 1); // 1103;
  ```
```  javascript

function sum (...number){
    let add = 0;
    for(let i of number){ 
        add += i; 
    }
    return add;
}

```
Answer: The purpose of _rest parameters_ is to be able to call function an indefinite number of arguments.They differ from the `arguments` object because the `arguments` object is arraylike and not an array.



10. **What does the following code log? Why?**
  ```javascript
  let theCreator = 'Devonte';

  function shoutOut() {
    theCreator = 'Peter';
  }

  shoutOut();
  console.log(`The best designer in the room is ${theCreator}`.);
  ```
Answer: The following code logs `"The best designer in the room is Peter"` because we are reassigning `theCreator` value of `"Peter"` on line 112.

11. **What does the following code log? Why?**
  ```javascript
  let theHustler = 'Laisha';

  function shoutOut() {
    let theHustler = `Paul`;
    console.log(`${theHustler} is the hardest working person in the room.`);
  }

  shoutOut();
  console.log(`${theHustler} is also the hardest working person in the room.`);
  ```
Answer: Line 129 logs `"Paul is the hardest working person in the room."` because we are declaring a new `theHustler` inside a function scope and assigning it a value of `"Paul"` and we are logging inside our function so it is only looking within that scope.
Line 130 logs `"Laisha is also the hardest working person in the room."` because since  `theHustler` was also declared outside the function and logged outside the function. The program  don't have access to variables declared in that function's inner scope.


12. **What does the following code log? Why?**
  ```javascript
  let address = '7 Marcus Garvey';

  function setLocation(location) {
    location = '829 Jefferson Ave.';
    console.log(location);
  }

  setLocation(address);
  console.log(`Our address is ${address}`);
  ```
Answer: On line 156 logs `"829 Jefferson Ave."` because we are passing `address` as an argument into our function `setLocation` and our function reassign `address` value to `location` value. On line 57 `console.log` logs `"Our address is 7 Marcus Garvey"` because the `address`  variable has a value of `"7 Marcus Garvey".` The program uses string interpolation  to concatenate the sentence with value of ` address`.

13. **What do we mean when we say that JavaScript passes variables _by value_?**
Answer: When we say that JavaScript passes variables by value we, just mean that a copy of the value is passed. This will not affect the first value only the copy value.


14. **What does it mean to _pass by reference_? In what ways do arrays and objects appear to be passed by reference in JavaScript?**
Answer: To pass by reference means a pointer to memory address of the variable value. Meaning the actual value will be affected. If you are mutating the arrays and objects value then this will appear to be passed by reference in JavaScript.