# Unit 2 Assessment - JavaScript Fundamentals
## Written Assessment

1. **What is hoisting? Describe how hoisting affects variable _and_ function declarations. Provide a code snippet to illustrate hoisting for both.** 

  Hoisting is the process of moving all declared variables to the top of your code. 
  Variables that use keywords such as let or const are not hoisted, though.
  

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
  On line 20, the console is trying to display status but status is actually out of reach. It is not a global variable like const isMaya.
  It was declared within the conditional on line 14 and therefore out of scope will return a reference error because it is not defined.


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
  It does not show an error because status is initialize with keyword var rather than let or var. Due to this, it was hoisted and can be
  reached by the console.log() which is not within the conditional.


4. **In JavaScript, we can declare variables with `var`, `let`, and `const`. What are the differences between each? Be sure to comment on how each declaration impacts the _scope_, _reassignment_, and _hoisting_ of variables.**




5. **What does the following code log? Explain why?**
  ```javascript
  let bestPlayer = {name: "Lebron James"};
  let theGOAT = bestPlayer;
  bestPlayer.name = "Kevin Durant";
  console.log(theGOAT.name);
  ```
  This  is what we called a pass by reference. bestPlayer is an object and will be mutated by the code above. So when we run theGOAT it is
  updated to the value of the name key within bestPlayer.
  
6. **What is the value of `b` after this code runs? Explain why this is the case.**
  ```javascript
  let a = 10;
  let b = a;
  a += 10;

  console.log(a);
  console.log(b);
  ```
  The value of b after the code is ran is 10, not 20. This is because the only thing that was updated was the variable a not b. We assigned the original value of a to b, but
  that does not mean we are constantly updating the variable b with the value of a.

7. **Where does the following code throw an error? What type of error? Why?**
  ```javascript
  const bffs = 'Enmanuel Laisha';
  bffs = 'Enmanuel Laisha Cielo';

  console.log(bffs);
  ```
  It'll throw an error on line 68. This is because of the equal sign. You are trying to reassign bffs to a new value. This is a new
  string we are reassigning it to NOT adding another array element to it.

8. **Wait, why doesn't the code below throw an error?! 🧐 What does this demonstrate?**
  ```javascript
  const bffs = ['Enmanuel', 'Laisha'];
  bffs.push('Cielo');

  console.log(bffs);
  ```
  You are not mutating the array elements, all thats happening is that you are adding another value to the array not changing the array, itself.


9. **What is the purpose of _rest parameters_? How do we use them? Explain how do they differ from the `arguments` object. Illustrate the use of rest parameters by writing a function that takes any number of integers as arguments and returns their sum.**

  ```javascript
  sum(1, 2, 10); // 13
  sum(5); // 5
  sum(100, 200, 800, 1, 1, 1); // 1103;
  ```
  The purpose of rest parameter is to be used when the developer does not know how many parameters a user COULD want to input so it use for an indefinite amount, just in case.
  This is diferent from the arguments object due to the fact that when using arguments object, console assumes we know the number of parameters and wont account for any other 'possible
  argument, while rest parameter while account for an infinite or indefinite amount of parameters.
  



<!---->
}

10. **What does the following code log? Why?**
  ```javascript
  let theCreator = 'Devonte';

  function shoutOut() {
    theCreator = 'Peter';
  }

  shoutOut();
  console.log(`The best designer in the room is ${theCreator}`.);
  ```
  The code los Peter, rather than Devonte. On line 99, the function is called 
  and changes the value of theCreator because it is logged to the console.
  Usually we cannot redeclare a variable with let but theCreator is global and at the top of out code.
  In addition there is no keyword was reassigning this variable within the function, it simply runs,reassigns, and logs the ouput.


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
  This code logs Paul then Laisha within the output. This is because they refer to two different instances of our theHustler variable.
  There is a console.log that refers to theHustler within the function's scope and another that refers to the global theHustler which is defined as Laisha rather than Paul.

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
  This code logs 829 Jefferson Ave first because it runs a function setLocation with the parameter of address and then redefines it, and 
  returns 829 Jefferson ave rather 7 marcus garvey. Then we log a a string with the variable address that refers to the global variable address.
  This then returns the orginal value of address as '7 Marcus Garvey'.

13. **What do we mean when we say that JavaScript passes variables _by value_?**

  What we mean when we say we pass variables by value is that we are not directly mutating or manipulating the value of out target. What 
  we are doing is creating a copy and using that to perform our tasks rather than directly changing the value. This only works on primitive
  values and not objects.
  
14. **What does it mean to _pass by reference_? In what ways do arrays and objects appear to be passed by reference in JavaScript?**

  Pass by referenec refers to the act of not creating a new spot in system memory and directly dealing with the target we are trying to mutate.
  This process only applies to objects and arrays.