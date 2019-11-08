# Unit 2 Assessment - JavaScript Fundamentals
## Written Assessment

1. **What is hoisting? Describe how hoisting affects variable _and_ function declarations. Provide a code snippet to illustrate hoisting for both.** 
      Hoisting is when variables and function declarations are declared and added to memory of the Lexical Environment,
      so that during compiling time they can be accessed during compile time. Variables declared with var are hoisted and initialized with 
      the value of undefined, they can be accessed before they are actually declared in the reading phase. While variables declared with let
      and const are hoisted but remain unitialized, and can't be accessed before they are initialized. For function declarations all of them are
      hoisted and can be accessed before they are even declared.


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
  This throws an error because the variable 'status' has a keyword of 'let' meaning that it creates it's own block scope. The variable 'status'
  can only be accessed from either the if statement or the else statement, not outside of them.

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
  This doesn't throw an error because here the variable 'status' has a keyword of 'var' which has a function scope. The variable 'status'can be
  accessed from anywhere within the function it's been declared but since there are no functions and only conditional statements it can be
  accessed outside of them.


4. **In JavaScript, we can declare variables with `var`, `let`, and `const`. What are the differences between each? Be sure to comment on how each declaration impacts the _scope_, _reassignment_, and _hoisting_ of variables.**
  'var' variables: has a function scope, meaning depending on where the variable is declared it can be accessed anywhere as long as it is within that function it will be available. It can even be made into a global variable if it declared outside of functions and can be accessed from anywhere in the program giving it a global scope. This variable can be reassigned as many times as wanted. When it comes to hoisting it is 
  declared and intialized to undefined. 
  'let' variables: has a block scope, meaning that they are only available from within the pair of curly braces they are defined in. If it is not defined from within a pair of curly braces in any statement or function it can also become a global variable. You can also reassign this variable as many times as needed as long as it is inside it's scope. When it's being hoisted it remains unitialized until it is actually intialized in it's scope. 
  'const' variables: Also has a block scope. This varibale can never be reassigned once it is initialized to it's value, it will always be equal to it. When it is hoisted it is also remains unitialized, until it is initialized in it's scope. 
  


5. **What does the following code log? Explain why?**
  ```javascript
  let bestPlayer = {name: "Lebron James"};
  let theGOAT = bestPlayer;
  bestPlayer.name = "Kevin Durant";
  console.log(theGOAT.name);
  ```
  This console logs: 
  'Kevin Durant' because on line 56 the property 'name' is being reassigned to 'Kevin Durant', and since 'theGOAT' is an object based on the prototype of the object 'bestPlayer' it has access to the property name. 

6. **What is the value of `b` after this code runs? Explain why this is the case.**
  ```javascript
  let a = 10;
  let b = a;
  a += 10;

  console.log(a);
  console.log(b);
  ```
  The value of b remains as 10, because even though on line 66 a is being assigned to 20. b is still pointing to the original a on line 65.


7. **Where does the following code throw an error? What type of error? Why?**
  ```javascript
  const bffs = 'Enmanuel Laisha';
  bffs = 'Enmanuel Laisha Cielo';

  console.log(bffs);
  ```
  This will throw an error because the variable bffs is declared with the keyword 'const' which doesn't allow reassignment.

8. **Wait, why doesn't the code below throw an error?! 🧐 What does this demonstrate?**
  ```javascript
  const bffs = ['Enmanuel', 'Laisha'];
  bffs.push('Cielo');

  console.log(bffs);
  ```
  This doesn't throw an error because you aren't reassigning the variable 'bffs', you're just adding a new element to the array.

9. **What is the purpose of _rest parameters_? How do we use them? Explain how do they differ from the `arguments` object. Illustrate the use of rest parameters by writing a function that takes any number of integers as arguments and returns their sum.**

  ```javascript
  sum(1, 2, 10); // 13
  sum(5); // 5
  sum(100, 200, 800, 1, 1, 1); // 1103;
  ```
  The purpose of the rest parameters is to keep track of arguments given to a function that don't have a corresponding parameter. The 'rest parameters' is an array instance it can use array methods while arguments object can't.
  
  let sum = function (...arg){
    let total = 0;
    for (let i=0; i<arg.length; i++){
      total += arg[i];
    }
    return total;
  }


10. **What does the following code log? Why?**
  ```javascript
  let theCreator = 'Devonte';

  function shoutOut() {
    theCreator = 'Peter';
  }

  shoutOut();
  console.log(`The best designer in the room is ${theCreator}.`);
  ```
  This will console log:
  'The best designer in the room is Peter'
  
  Because on line 114 a function named 'shoutOut' reassigns the variable 'theCreator' to 'Peter'. Then on line 118 it is called, and since it is all done within the variables scope it will reassign the variable.
  

11. **What does the following code log? Why?**
  ```javascript
  let theHustler = 'Laisha';

  function shoutOut() {
    let theHustler = 'Paul';
    console.log(`${theHustler} is the hardest working person in the room.`);
  }

  shoutOut();
  console.log(`${theHustler} is also the hardest working person in the room.`);
  ```
  This will console log:
  'Paul is the hardest working person in the room'
  'Laisha is also the hardest working person in the room'
  
  Because on line a function named 'shoutOut' is declared it contains its own 'theHustler' variable which is equal to 'Paul' and console logs 
  its value of 'theHustler'. The variable inside the function can be accessed only inside the function, so on line 137 it console logs its value for 'theHustler' which is 'Laisha'

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
  This wil console log:
  '829 Jefferson Ave'
  'Our address is 7 Marcus Garvey'
  
  On line 148 the variable 'address' is initialized to '7 Marcus Garvey'. On line 150 a function named 'setLocation' takes a parameter and sets it to '829 Jefferson Ave' then console logs that. On line 155 the function is called and takes the variable address as the argument so it reassigns the variable 'address' to '829 Jefferson Ave' and console logs that. But on line 156 it console log the value of '7 Marcus Garvey' because the value was never really changed 

13. **What do we mean when we say that JavaScript passes variables _by value_?**
  
  It means that we will always have access to the original value of the variable becuase when reassigning occurs it will create a new memory location for the new variables value.


14. **What does it mean to _pass by reference_? In what ways do arrays and objects appear to be passed by reference in JavaScript?**

  When you are passing by reference it means that you will mutate the original. When modifying an array or object no matter where it is located in its scope it will keep that change and completely disregard its origal form.
