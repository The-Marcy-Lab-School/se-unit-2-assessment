# Unit 2 Assessment - JavaScript Fundamentals
## Written Assessment

1. **What is hoisting? Describe how hoisting affects variable _and_ function declarations. Provide a code snippet to illustrate hoisting for both.** 

*To hoist in JavaScript is to lift something in your code to the top.
*Hoisting occurs in between author time and run time, this is called compilation. In run time functions are hoisted to the top of the program. However, in author time we usually structure our programs to call the functions after they are declared to make it easier to read and debug.
*Functions declarations are hoisted. Function expressions are not hoised which is when a function is declared in a variable. This is because when a variable is declared it is hoisted after the declarations are made for functions.  


2. **Why does the following block of code throw an error?**
  ```javascript
  const isMaya = true;

  if (isMaya) {
    let status = 'Everything is just fine';
  } else {
    let status = 'Time to panic.'
  }

  console.log(status);
```
*This will throw an error because the variable ‘status’ was declared in the scope of the if statement, so it can not be called outside of the block scope and is considered a local variable. 

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
*This is because variables declared with the keyword ‘var’ outside any function are global variables. So even though the variable ‘advice’ is called inside a scope it is not a function so it is global.



4. **In JavaScript, we can declare variables with `var`, `let`, and `const`. What are the differences between each? Be sure to comment on how each declaration impacts the _scope_, _reassignment_, and _hoisting_ of variables.**

*Variable keywords ‘let’ and ‘const’ have a block scope. The keyword ‘const’ can not be reassigned to a new value but it can be mutated. 
*All declaration keywords in Javascript are hoisted, except for variables declared with the keyword ‘var’. Var will add that variable to the lexical environment and initialize it with undefined. Variables with ‘let’ and ‘const’ declarations are uninitialized.


5. **What does the following code log? Explain why?**
  ```javascript
  let bestPlayer = {name: "Lebron James"};
  let theGOAT = bestPlayer;
  bestPlayer.name = "Kevin Durant";
  console.log(theGOAT.name);
  ```
*This will log ‘Kevin Durant’, because the property ‘name’ was initialted a value of  "Kevin Durant" when the object ‘theGOAT’ was initaited to have the same value as the object ‘bestPlayer’. 

6. **What is the value of `b` after this code runs? Explain why this is the case.**
  ```javascript
  let a = 10;
  let b = a;
  a += 10;

  console.log(a);
  console.log(b);
  ```
*The value of b is 10. This is because it was declared with the value of the variable a which is 10. The variable b was not reassigned after it’s declaration. 

7. **Where does the following code throw an error? What type of error? Why?**
  ```javascript
  const bffs = 'Enmanuel Laisha';
  bffs = 'Enmanuel Laisha Cielo';

  console.log(bffs);
  ```
*This will throw a TypeError that says ‘Assignment to constant variable’. This is because you can not reassign the value of a const variable. 

8. **Wait, why doesn't the code below throw an error?! 🧐 What does this demonstrate?**
  ```javascript
  const bffs = ['Enmanuel', 'Laisha'];
  bffs.push('Cielo');

  console.log(bffs);
  ```
*This will not throw an error because const variables can not be reassigned values but they can be mutated with methods. 


9. **What is the purpose of _rest parameters_? How do we use them? Explain how do they differ from the `arguments` object. Illustrate the use of rest parameters by writing a function that takes any number of integers as arguments and returns their sum.**
  ```javascript
  sum(1, 2, 10); // 13
  sum(5); // 5
  sum(100, 200, 800, 1, 1, 1); // 1103;
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
*This will log `The best designer in the room is Peter’, because in the function ‘shoutOut’ the variable ‘theCreator’ is reassigned the value of ‘Peter’ and when the function is called the variable ‘theCreator’ is reassigned the value globally. This is also because the variable was declared with the keyword let, which can be reassigned values. 

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
*This will log ‘Paul is the hardest working person in the room.’, then ‘Laisha is also the hardest working person in the room’. This is because in the function ‘shoutOut’ the variable ‘theHustler’ is reassigned the value of paul inside the function scope and called inside the function scope. After calling the function ‘shoutOut’ when calling ‘theHustler’ again the variable will return the value it was declared with outside the block scope. 


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
*This will log ‘829 Jefferson Ave.’ then ‘Our address is 7 Marcus Garvey’ this is because the first console log is logging a value set to the parameter of the function ‘setLocation’. The second console log is logging the value of the global variable ‘address’.

13. **What do we mean when we say that JavaScript passes variables _by value_?**
*This means that functions are called by directly passing the value of the variable as the argument. Passing by value is like creating a copy or prototype of the variable. 


14. **What does it mean to _pass by reference_? In what ways do arrays and objects appear to be passed by reference in JavaScript?**
*In pass by reference a function is called by passing the reference of the variable as an argument. Passing by reference is referring or pointing to a different object. 

