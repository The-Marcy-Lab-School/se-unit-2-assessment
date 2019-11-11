# Unit 2 Assessment - JavaScript Fundamentals
## Written Assessment

1. **What is hoisting? Describe how hoisting affects variable _and_ function declarations. Provide a code snippet to illustrate hoisting for both.** 
- Hoisting is when, during the moment the computer compiles, it picks up all function declarations and variables and brings it to the very top of the scope, although your code all remains exactly where it was written. Hoisting can affect the way your code is written: with `var` variables, they are taken during the compiling stage, declared, and initialized with undefined. `let` and `const` variables are declared but not initialized, which forces you to write your code in chronological order. An example of `var` hoisting is as follows:
```
console.log(greeting); //Expected output: undefined
var greeting = 'Hello world!';
```
An example of `let` and `const` hoisting is as follows (we'll use just `let`, but know that this also applies to `const`):
```
console.log(greeting); //Expected output: reference error
let greeting = 'Hello world!';
```
Function declarations are hoisted with all of the code inside the function, so you can call it even before the function in your code is made. For example:
```
greeting(); //Expected output: 'Hello world!'

function greeting() {
  console.log('Hello world!');
}
```
It's important to understand hoisting in order to avoid errors or conflicts with the code written, as well as having a better understanding of how each variable declaration and function declaration works.

2. **Why does the following block of code throw an error?**
  ```javascript
  const isMaya🧘🏽♀️ = true;

  if (isMaya🧘🏽♀️) {
    let status = 'Everything is just fine';
  } else {
    let status = 'Time to panic.'
  }

  console.log(status);
```
- `let` variables are block scoped, meaning they cannot be referenced outside of the scope `{}` they're in. Logging `status` in the global scope would return an error because it does not exist there.


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
- `var` variables are function scoped, meaning they cannot be referenced outside of a function. Other than that, they can be referenced from anywhere, so `status` can be referenced from the conditional in the global scope.



4. **In JavaScript, we can declare variables with `var`, `let`, and `const`. What are the differences between each? Be sure to comment on how each declaration impacts the _scope_, _reassignment_, and _hoisting_ of variables.**
- `var` variables are function scoped, so if they are inside a function, they cannot be referenced from the outside of the function. Otherwise, they can be referenced regardless if they're in conditionals or loops. You can also reassign these as often as you would like. When it is hoisted, it will be declared and initialized with undefined. With `let` and `const` variables, they are block scoped, so if they're in any block `{}`, they cannot be referenced outside of that block. Any conditionals, loops, functions, etc have blocks, so be aware of these scopes when creating variables with `let` and `const`. `let`, similarly to `var`, can be reassigned as often as you want. `const`, however, cannot be reassigned once it has been assigned a variable. When hoisting these variables, they are declared, but not initialized, so they have no value. 



5. **What does the following code log? Explain why?**
  ```javascript
  let bestPlayer = {name: "Lebron James"};
  let theGOAT = bestPlayer;
  bestPlayer.name = "Kevin Durant";
  console.log(theGOAT.name);
  ```
- It logs Kevin Durant. `bestPlayer` is an object, and `theGOAT` is also pointing to the same value, so they both have the same values. When the key `name`'s value is reassigned in `bestPlayer`, this value is also changed in `theGOAT` because objects are pass-by-reference, meaning that values can be changed in all variables that point to the same valu, much like how two signs may lead to the same house. 

6. **What is the value of `b` after this code runs? Explain why this is the case.**
  ```javascript
  let a = 10;
  let b = a;
  a += 10;

  console.log(a);
  console.log(b);
  ```
- `b`'s value is 10. Primitive types in JavaScript, excluding objects and arrays, are pass-by-value, meaning if there are two variables with the same value, one of the variables is a copy, and whatever change you do to that copy only happens in the copy, not to the original. In this case, `b` is assigned `a`'s value, which is 10. `b` holds onto that value even though `a`'s new value is now 20.

7. **Where does the following code throw an error? What type of error? Why?**
  ```javascript
  const bffs = 'Enmanuel Laisha';
  bffs = 'Enmanuel Laisha Cielo';

  console.log(bffs);
  ```
- It throws an error on line 2, where `bffs` is being reassigned. It throws a type error because a variable using `const` cannot be reassigned.

8. **Wait, why doesn't the code below throw an error?! 🧐 What does this demonstrate?**
  ```javascript
  const bffs = ['Enmanuel', 'Laisha'];
  bffs.push('Cielo');

  console.log(bffs);
  ```
- Objects and arrays are mutable, meaning that the elements inside the object or array can be changed or removed, and you can add elements as well. However, if you to reassign the array with an entirely new array, it would give you an error. You can think of the array as a house: people come and go, and whatever happens inside the house can change, but it points to the same house. Reassign it, and you'll be pointing at a different house, which is not possible with `const`.


9. **What is the purpose of _rest parameters_? How do we use them? Explain how do they differ from the `arguments` object. Illustrate the use of rest parameters by writing a function that takes any number of integers as arguments and returns their sum.**

  ```javascript
  sum(1, 2, 10); // 13
  sum(5); // 5
  sum(100, 200, 800, 1, 1, 1); // 1103;
  ```
- Rest parameters are parameters that should be the last parameter in a function. They are often used with array instances since you can use array methods on them, while `arguments` would not be a real array. Of course, rest parameters do not have to be an array. They can be used for parameters that could be indefinite, and it gives some flexibility to arguments as well. A good example for rest parameters is as follows:
```
function sum(...num) {
  let sum = 0;
  for (let number of num) {
    sum += number;
  }
  return sum;
}

sum(1, 2, 5, 6, 7, 10); // 31
```


10. **What does the following code log? Why?**
  ```javascript
  let theCreator = 'Devonte';

  function shoutOut() {
    theCreator = 'Peter';
  }

  shoutOut();
  console.log(`The best designer in the room is ${theCreator}`.);
  ```
- It logs `The best designer in the room is Peter.` This is because `theCreator` is declared and initialized in the global scope, so the function `shoutOut()` has access to its value, successfully reassigning it when the function is called.


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
- It first logs `Paul is the hardest working person in the room.`, then it logs `Laisha is also the hardest working person in the room.`. It logs Paul first because there is a `let` variable declared in the function, making it inaccessible to the global scope. In this function, the variable is reassigned to Paul, and when the function is called, it executes. When you log the sentence from the global scope, there's already the same variable with a different value. You call this variable instead since the global scope cannot access the variable inside the function, and it returns Laisha.


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
- It first logs `829 Jefferson Ave.`, then it logs `Our address is 7 Marcus Garvey`. This is because `location` becomes a local variable inside the function scope, making it so that it will only change the value of `address` if the function is called. If you log `address` in the global scope, it will simply find the value that is in the global scope.


13. **What do we mean when we say that JavaScript passes variables _by value_?**
- When they pass by value, the value is essentially copied to another variable. However, that value is not shared with the original, so the copy ends up having its own value. If the original variable's value is changed, the copy's value will not change. 


14. **What does it mean to _pass by reference_? In what ways do arrays and objects appear to be passed by reference in JavaScript?**
- When you pass by reference, you essentially have variables, or pointers, point to the same value. If you have two variables pointing to the same value, whenever that value is changed, it changes for both variables. If you were to change the value of a key in an object, this change will happen in both variables, regardless of which variable you use to change it.
