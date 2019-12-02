# Unit 2 Assessment - JavaScript Fundamentals
## Written Assessment

1. **What is hoisting? Describe how hoisting affects variable _and_ function declarations. Provide a code snippet to illustrate hoisting for both.** 

  Hoisting is the process of moving all declared variables to the top of your code. 
  Variables that use keywords such as let or const are not hoisted, though.
  
  Hoisting is quite literally the process before your code's run-time through which JavaScript lifts all function and variable declarations to the top of the code. 
  All globally declared variables are accessible at any point within your code.
  
  Be aware that only declarations are hoisted and the initialization of a variables is not. It must be assigned to something to be hoisted.
  // let hoistMe = "Ok" // Hoisted
  // let hoistMe // Not hoisted

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
  On line 20, the console is trying to display status but status is actually out of reach.
  It was declared within the conditional on line 14 using 'let'. This makes the scope block and means the variables now can only be reached inside these conditional.


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
  It does not show an error because status is initialize with keyword var rather than let. let and const have a block scope. So they are trapped within the scope or the if statment and cannot be referenced by the console.log. Due to this, it was hoisted and can be reached by the console.log() which is not within the conditional.


4. **In JavaScript, we can declare variables with `var`, `let`, and `const`. What are the differences between each? Be sure to comment on how each declaration impacts the _scope_, _reassignment_, and _hoisting_ of variables.**

All of these declarations have their own rules.let and const variables have a block scope, which means that variables and functions decalred within that block or essentially inside the pair of curly brackets cannot be referenced outside of that block. Though, these two start to differ when
talking about reassignment. let, and also var, can be reassigned to something else, unlike const. const can't be reassigned once it's been assigned a variable. var is function scoped, so if they are inside a function, they cannot be referenced from the ouside of that function.

5. **What does the following code log? Explain why?**
  ```javascript
  let bestPlayer = {name: "Lebron James"};
  let theGOAT = bestPlayer;
  bestPlayer.name = "Kevin Durant";
  console.log(theGOAT.name);
  ```
  This is what we call a pass by reference. bestPlayer is an object and will be mutated by the code above. So when we run theGOAT it is
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
  It'll throw a type error. This is because of the use of const rather than let or var. The string is a primitive data type and cannot be mutated.

8. **Wait, why doesn't the code below throw an error?! 🧐 What does this demonstrate?**
  ```javascript
  const bffs = ['Enmanuel', 'Laisha'];
  bffs.push('Cielo');

  console.log(bffs);
  ```
  Even though we are using const, objects and arrays are mutable. This means that manipulation of the content inside the object is fair play. Although, you cannot reassign an array.
  Replacing/Reassigning the variable to an entirely new array would throw an error, unlike manipulating an array would.

9. **What is the purpose of _rest parameters_? How do we use them? Explain how do they differ from the `arguments` object. Illustrate the use of rest parameters by writing a function that takes any number of integers as arguments and returns their sum.**

  ```javascript
  sum(1, 2, 10); // 13
  sum(5); // 5
  sum(100, 200, 800, 1, 1, 1); // 1103;
  ```
Rest parameters can be used for functions that could have an indefinite amount of parameters. This also allows all array methods that would work on an array to work on our arguements.
Though, the arguements object which consists of the values passed when the function is invoked are limited to fewer array methods compared to a rest parameter.

An example of using the rest parameter:

concat = (...str) => {
  let final = "";
  for (letter of str) {
    final += letter;
  }
  return final;
}

// output will be the concatination of all the strings added to this function concat.

10. **What does the following code log? Why?**
  ```javascript
  let theCreator = 'Devonte';

  function shoutOut() {
    theCreator = 'Peter';
  }

  shoutOut();
  console.log(`The best designer in the room is ${theCreator}`.);
  ```
  The code logs Peter, rather than Devonte. This is because the variable theCreator is local, so it is used. On line 99, the function is called 
  and changes the value of theCreator because it is logged to the console, and theCreator is has a global scope outside of the function shoutOut.

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
 The console will log 'Paul is the hardest working person in the room'. and then 'Laisha is also the hardest working person in the room.'
  A local variable is already provided for us within the function so it will use that variable 'laisha'.
 Then when we console log that expression using the theHustler variable it grabs the value for the global version of that 
 variable not the local variable within the function's scope.

shoutOut will run with the value in the function while the other log will run with the value inside the global scope.
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
  This code logs 829 Jefferson Ave first because it runs a function setLocation the location variable defined locally within it thus 
  returns 829 Jefferson ave rather than 7 marcus garvey. Then we log a string with the variable address that refers to the global variable address.
  This then returns the orginal value of address as '7 Marcus Garvey'.

  // 829 Jefferson Ave.
  // 7 Marcus Garvey

13. **What do we mean when we say that JavaScript passes variables _by value_?**

  What we mean when we say we pass variables by value is that we are not directly mutating or manipulating the value of our target. What 
  we are doing is creating a copy and using that to perform our tasks rather than directly changing the value of the original.
  
14. **What does it mean to _pass by reference_? In what ways do arrays and objects appear to be passed by reference in JavaScript?**

  Pass by referenec refers to the act of not creating a new spot in system memory and directly dealing with the target we are trying to mutate.
  This process only applies to objects and arrays because methods called on them mutates the array/object itself, changing the values it holds within the memory.
  