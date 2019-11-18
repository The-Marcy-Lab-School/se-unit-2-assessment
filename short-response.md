# Unit 2 Assessment - JavaScript Fundamentals
## Written Assessment

1. **What is hoisting? Describe how hoisting affects variable _and_ function declarations. Provide a code snippet to illustrate hoisting for both.**
  - Hoisting refers to the process of the compiler that checks our code for functions and variables (between author and run times) and tracks them in a lexical environment. Variables and functions are hoisted in JavaScript, meaning they can be referenced before their explicit declaration. This gives the illusion that variables and functions are brought up to the top of code, hoisted. Variables are hoisted differently depending on the keyword that was used to declare them. Variables declared with `let` and `const` are written to the lexical environment as uninitialized, while those with `var` are set as undefined. Function declarations are hoisted and can be invoked before their written definition.
  ```javascript
  console.log(`I am ${joy}`); //I am undefined
  var joy = 'Hello World';

  console.log(`I am ${wow}`); //ReferenceError, joy hasn't been initialized!
  let wow = 'Hello World';

  console.log(addNumbers(1, 2)); //3

  function addNumbers (a, b) {
    return a + b;
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
  - This snippet throws an error because the variable `status` is block scoped (because it was declared with `let` keyword) and is not accesible to our `console.log();` in an outside parent scope.

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
  - No error here because `status` is declared with `var`, meaning it has function scope and being inside the `if` block does not make it inaccesible to the `console.log();`.


4. **In JavaScript, we can declare variables with `var`, `let`, and `const`. What are the differences between each? Be sure to comment on how each declaration impacts the _scope_, _reassignment_, and _hoisting_ of variables.**

  - Variables declared with `let` and `const` have block scope, and are uninitialized when hoisted. `const` variables cannot be reassiged. `var` variables have function scope and are hoisted as `undefined`.


5. **What does the following code log? Explain why?**
  ```javascript
  let bestPlayer = {name: "Lebron James"};
  let theGOAT = bestPlayer;
  bestPlayer.name = "Kevin Durant";
  console.log(theGOAT.name);
  ```
  - This logs `'Kevin Durant'` because objects in JavaScript are passed by referece and the variable `theGOAT` refereces the same object declared for `bestPlayer` which is mutated in line 3.

6. **What is the value of `b` after this code runs? Explain why this is the case.**
  ```javascript
  let a = 10;
  let b = a;
  a += 10;

  console.log(a);
  console.log(b);
  ```
  - The value of `b` is 10 because when it was declared it was passed `a` by *value*, meaning it created a copy of that value that it points to now and is independent of any changes that may occur to the value of `a`.

7. **Where does the following code throw an error? What type of error? Why?**
  ```javascript
  const bffs = 'Enmanuel Laisha';
  bffs = 'Enmanuel Laisha Cielo';

  console.log(bffs);
  ```
  - This throws a `TypeError` because line 2 attempts to reassign a constant, or a variable declared with `const`.

8. **Wait, why doesn't the code below throw an error?! 🧐 What does this demonstrate?**
  ```javascript
  const bffs = ['Enmanuel', 'Laisha'];
  bffs.push('Cielo');

  console.log(bffs);
  ```
  - This works because line 2 does not reassign the array that `bffs` points to, rather it *mutates* the very same array. This demonstrates the ability of non-primitive datatypes to be mutated without a change in reference.

9. **What is the purpose of _rest parameters_? How do we use them? Explain how do they differ from the `arguments` object. Illustrate the use of rest parameters by writing a function that takes any number of integers as arguments and returns their sum.**

  ```javascript
  sum(1, 2, 10); // 13
  sum(5); // 5
  sum(100, 200, 800, 1, 1, 1); // 1103;
  ```
  - Rest parameters allows us to define functions that may take any number of arguments. This differs from arguments because our unknown amount of arguments are part of an array when using rest parameters.

  ```javascript
  sum = (...numbers) => {
    let finalSum = 0;
    for (let val of numbers) { //loops through each element (argument) and adds it to our final sum variable
      finalSum += val;
    }
    return finalSum; //15
  }
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
  - This logs `The best designer in the room is Peter` because `theCreator` was properly assigned by the invocation of the `shoutOut` function that could access it because scope allows children scope to access parent ones.

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
  - This logs `'Paul is the hardest working person in the room.'` and `'Laisha is also the hardest working person in the room.'` because the function `shoutOut` doesn't have to reference the variable `theHustler` that is outside because it first looks within itself and finds a variable of the same name to log. The second log also works because it can only access the varible `theHustler` in its own scope and does not throw an error about declaring the varible twice.

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
  - This logs `'829 Jefferson Ave.'` and `'Our address is 7 Marcus Garvey'` because when our function is invoked and given `address` only its value is passed to the function. Inside our function the parameter `location` is assigned this value, but reassiged to `'829 Jefferson Ave.'` and logged. Our `address` variable that is logged in the last line was not change because when we passed it to the function it was only by value and a copy was made for this purpose.

13. **What do we mean when we say that JavaScript passes variables _by value_?**

  - Passing by value means that when variables are passed to functions a copy of the value is made. This allows us to manipulate a known value without affecting the original binding holding it.

14. **What does it mean to _pass by reference_? In what ways do arrays and objects appear to be passed by reference in JavaScript?**
    - Passing by reference means the value passed to a function is the address in memory to the value of our original variable. Arrays and objects demonstrate this when a variable is assigned another variable whose value is an object or array and making a change to the second variable also mutates the first.
