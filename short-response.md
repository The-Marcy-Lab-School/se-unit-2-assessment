# Unit 2 Assessment - JavaScript Fundamentals
## Written Assessment

1. **What is hoisting? Describe how hoisting affects variable _and_ function declarations. Provide a code snippet to illustrate hoisting for both.** 
  Hoisting is when variables or functions are conceptually moved to the top of a program during compilation in order for program to execute. 
  In terms of variables all varibales are hoisted however the process of how their values are returned differs slighlty. `var` variables are initialized to `undefined` in the compiling phase. It will remain so until the compiler reaches an assignment line for the variable. Though `let` and `const` are hoisted, these variables are uninitialized. If the `let` variable cannot find a value at the line where it was declared the variable will return an undefined value, `const`variables will return an error. Functions will only be hoisted if they are function declarations not initializations. 

  ```javascript
    greeting = "hello";
    console.log(greeting); 
    var greeting;
    // this snippet outputs to 'hello' due to hoisting
    
    
    hello();       //will log the string, this happens as this is function declaration not intialization
    function hello() {
      console.log('hellooo there!');
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
  The block of code will return status is `undefined`. This is because the variable status is declared a `let` variable therefore, has a block scope and cannot be referenced outside of the if else statement.

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
  The variable status is declared as a `var` therfore has a function scope and can be referenced outside of the if else statement.  

4. **In JavaScript, we can declare variables with `var`, `let`, and `const`. What are the differences between each? Be sure to comment on how each declaration impacts the _scope_, _reassignment_, and _hoisting_ of variables.**
  All variables that are declared outside of a function will have a global scope. 
  `var` variables are function scoped while `let` and `const` are block scoped. Variables that are `var` or `let` can be reassigned, `const` variables cannot be reassigned. `var` variables are initialized to undefined when they are hoisted, `const` and `let` variables are uninitialized when they are hoisted. During compliation `const` will return and Reference Error while `let` will return and error if it does not does not find a value where it was defined. 


5. **What does the following code log? Explain why?**
  ```javascript
  let bestPlayer = {name: "Lebron James"};
  let theGOAT = bestPlayer;
  bestPlayer.name = "Kevin Durant";
  console.log(theGOAT.name);
  ```
  The code logs `'Kevin Durant'`. The variable `theGOAT` is assigned to contain the properties and values stored in the `bestPlayer` object. The `bestPlayer` function property `name` is modified to contain the string value `'Kevin Durant'`. Since `theGOAT` essentially points to the original object, the modification to bestPlayer changes the property in name as well. 

6. **What is the value of `b` after this code runs? Explain why this is the case.**
  ```javascript
  let a = 10;
  let b = a; //10
  a += 10;

  console.log(a);
  console.log(b);
  ```
  The value of `b` is 10 because b is assigned the first value of `a` which is 10. No manipualtion is done to the variable `b` after, therfore remains as value 10. 

7. **Where does the following code throw an error? What type of error? Why?**
  ```javascript
  const bffs = 'Enmanuel Laisha';
  bffs = 'Enmanuel Laisha Cielo';

  console.log(bffs);
  ```
  This returns an `assignment error` because const variables cannot be reassigned. 

8. **Wait, why doesn't the code below throw an error?! 🧐 What does this demonstrate?**
  ```javascript
  const bffs = ['Enmanuel', 'Laisha'];
  bffs.push('Cielo');

  console.log(bffs);
  ```
  This code doesnt not throw an error as the array is not being reassigned values. It is being mutated to take in another value.

9. **What is the purpose of _rest parameters_? How do we use them? Explain how do they differ from the `arguments` object. Illustrate the use of rest parameters by writing a function that takes any number of integers as arguments and returns their sum.**

  ```javascript
  sum(1, 2, 10); // 13
  sum(5); // 5
  sum(100, 200, 800, 1, 1, 1); // 1103;
  ```
  ```javascript
  function sum (...numbers) {
    let total = 0;
    for(let i = 0; i < numbers; i++){
      total += numbers[i];
    } 
    return total;
  }
  ```
  The rest parameters allows for representation of an indefinite number of parameters as an array. Rest parameters allow for a function to call m ultiple arguements have them be evaluated instead of discarded if there was a specified amount of arguemnts the function could take in. Rest parameters unlike `arguements` objects are not defined as a separate function and is a real array. 


10. **What does the following code log? Why?**
  ```javascript
  let theCreator = 'Devonte';

  function shoutOut() {
    theCreator = 'Peter';
  }

  shoutOut();
  console.log(`The best designer in the room is ${theCreator}.`);
  ```
  The code logs `The best designer in the room is Peter.` this is because the variable theCreator is reassigned in the `shoutOut` function.

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
  The code will log 
  `Paul is the hardest working person in the room.` and then
  `Laisha is also the hardest working person in the room.`
  This occurs as the `shoutOut` function logs the locally scoped `theHustler` variable that was initialized to the `string` value 'Paul'. This occurs as the function acknowledges the variable as only exisiting within the function. The console.log below the function invocation, references the global variable theHustler that was assinged the string 'Laisha' and logs the sentence phrase. 


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
  The code logs
  `'829 Jefferson Ave.'`
  `'Our address is 7 Marcus Garvey'`
  This is because the setLocation(location) invocation takes in the variable address as a parameter and reassigns its value within the function. This reassignment is functionally scoped therefore `'829 Jefferson Ave.'` would be logged out. The console.log call would log the globally scoped variable address that contains the value `'7 Marcus Garvey'`. 


13. **What do we mean when we say that JavaScript passes variables _by value_?**
  Passed by value refers to variables that are passed by the actual value that they are assigned to. This means that the value passed into the parameter is copied into another memory location. 
14. **What does it mean to _pass by reference_? In what ways do arrays and objects appear to be passed by reference in JavaScript?**
  Passed by reference refers to a memory address of a variable that is passed on. This memory address defines where the value of the variable is stored. 