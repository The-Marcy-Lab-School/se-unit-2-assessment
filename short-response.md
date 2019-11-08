# Unit 2 Assessment - JavaScript Fundamentals
## Written Assessment

1. **What is hoisting? Describe how hoisting affects variable _and_ function declarations. Provide a code snippet to illustrate hoisting for both.** 

    Hoisting is the process of JavaScript lifting up funtions as they are called. 
    This way you can invoke a function before its declared without it failing immediately.
    
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
  The code above throws an error because the log is trying to access a variable outside its scope.
  Since the variable is declared using `let` which is block scoped, nothing outside that block can access the variable.


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
  `var` is function scoped which essentially means the variable is hoisted before any code is executed. 
    This way the variable can be called outside of where it was declared.



4. **In JavaScript, we can declare variables with `var`, `let`, and `const`. What are the differences between each? Be sure to comment on how each declaration impacts the _scope_, _reassignment_, and _hoisting_ of variables.**

  `var` is a function scoped variable that can be reassigned.It also can be declared again, but don't do this. The variable is hoisted.
  `let` is a block scoped variable that can be reassigned.This variable can not be hoisted.
  `const` is a block scoped variable that cannot be reassigned.This variable can not be hoisted.


5. **What does the following code log? Explain why?**
  ```javascript
  let bestPlayer = {name: "Lebron James"};
  let theGOAT = bestPlayer;
  bestPlayer.name = "Kevin Durant";
  console.log(theGOAT.name);
  ```
  The code above would log `Kevin Durant` because with objects it is passed by reference. 
  This means any method that changes an object reflects the original.

6. **What is the value of `b` after this code runs? Explain why this is the case.**
  ```javascript
  let a = 10;
  let b = a;
  a += 10;

  console.log(a);
  console.log(b);
  ```
  The value of `b` is `10` after this code runs. Since the value was passed to the variable, it is essentially a copy of `a`'s value meaning a change on `a` does not reflect in `b`.

7. **Where does the following code throw an error? What type of error? Why?**
  ```javascript
  const bffs = 'Enmanuel Laisha';
  bffs = 'Enmanuel Laisha Cielo';

  console.log(bffs);
  ```
  The following code throws a typeError because it is trying to reassign the constant `bffs` to a new value.
  You cannot reassign variables declared with `const`.

8. **Wait, why doesn't the code below throw an error?! 🧐 What does this demonstrate?**
  ```javascript
  const bffs = ['Enmanuel', 'Laisha'];
  bffs.push('Cielo');

  console.log(bffs);
  ```
  The code above does not throw an error because the `array` `bffs` is mutated.
  This is an example of pass by reference where methods on an array or object can mutated the originals value.


9. **What is the purpose of _rest parameters_? How do we use them? Explain how do they differ from the `arguments` object. Illustrate the use of rest parameters by writing a function that takes any number of integers as arguments and returns their sum.**

  ```javascript
  sum(1, 2, 10); // 13
  sum(5); // 5
  sum(100, 200, 800, 1, 1, 1); // 1103;
  ```
    The purpose of `rest parameters` is to store multiple arguments in an array.
    This allows any and all methods that would work on an array to work on our arguements.
    The `arguements` object is array-like meaning it has access to some array methods while using a `rest parameter` gives access to the full suite.
    
  ```javascript
    function sum(...input){ 
      let num = 0; 
      for(let i of input){ 
          num += i; 
      } 
      return num; 
    };
  ```



10. **What does the following code log? Why?**
  ```javascript
  let theCreator = 'Devonte';

  function shoutOut() {
    theCreator = 'Peter';
  }

  shoutOut();
  console.log(`The best designer in the room is ${theCreator}.`).
  ```
  The code above logs `The best designer in the room is Peter.` because the function is reassigning the global variable `theCreator`.
  When the log is then invoked it takes the new value of `theCreator` and uses that value to concatenate to the string.

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
  The console will log `Paul is the hardest working person in the room.` 
  and then `Laisha is also the hardest working person in the room.`.
  Since a local variable is declared in the function it will not even go touch the one in the global scope and use that for the log.
  `shoutOut` will run with the value in the function while the other log will run with the value inside the global scope.


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
  `829 Jefferson Ave.` 
  and then `Our address is 7 Marcus Garvey`.
  The first logs because within the function `setLocation` the local parameter is reassigned to `829 Jefferson Ave.` so the console logs that.
  The second like logs `Our address is 7 Marcus Garvey` because it found the global variable `address` and used its value.


13. **What do we mean when we say that JavaScript passes variables _by value_?**
  
  In JavaScript variables passed by value essentially means that a copy of the value is given.
  Whatever is changed on the new variable does not reflect or is reflected on the original.

14. **What does it mean to _pass by reference_? In what ways do arrays and objects appear to be passed by reference in JavaScript?**
  
  Pass my reference essentially mean that a link towards where the value is stored in the computers memory is given. 
  Any change on this mutates the data in the memory itself aka mutating. 
  Arrays and Objects appear to be passed by reference because methods called on them mutates the array/object itself,
  changing the values it holds.

