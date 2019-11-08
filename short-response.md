# Unit 2 Assessment - JavaScript Fundamentals
## Written Assessment

1. **What is hoisting? Describe how hoisting affects variable _and_ function declarations. Provide a code snippet to illustrate hoisting for both.** 

    Hoisting is quite literally the process before your code's run-time through which JavaScript lifts all function and variable declarations to the top of the code.
    This essentially makes it so that all globally declared variables are accessible at any point within your code. However only declarations are hoisted 
    while the initialization of said variables are not, therefore their values are only assigned to them at the point at which you declared in your code.

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
`let` is block scoped, therefore it cannot be accesses outside of the if-else statment it was declared within. Thus it throws a reference error.
(Also JavaScript doesn't know what emojis are).


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
`var` is not block scoped like `let`, it is function scoped, and therefore can be accessed outside of the if-else block.



4. **In JavaScript, we can declare variables with `var`, `let`, and `const`. What are the differences between each? Be sure to comment on how each declaration impacts the _scope_, _reassignment_, and _hoisting_ of variables.**

   To begin with, the declaration of all three of these variable types are automatically 
   hoisted by javascript right before runtime, simply because they are variables. `let` and 
   `const` declarations are hoisted with no value, while `var` declarations are hoisted as undefined.
   As for their differences, variables declared with `const`, are designed to
   be constant and therefore, JavaScript does not allow it's value to be reassigned.
   On the other hand, using `let` to declare a variable does allow you to reassign 
   its value later on. `let` and `const` are block scoped variables (blocks = `{anything between curly brackets}`), 
   which means that its existence can only be detected within its parent scope, whether that be global 
   or local. As for `var`, its properties are the same as `let`, except for the fact
   that it is function scoped, which means its only accessible within the function its declared in.
   Which essentially means it can be accessed outside the scope of a block.


5. **What does the following code log? Explain why?**
  ```javascript
  let bestPlayer = {name: "Lebron James"};
  let theGOAT = bestPlayer;
  bestPlayer.name = "Kevin Durant";
  console.log(theGOAT.name);
  ```
The above code logs "Kevin Durant". This is because on line 60 a variable named `theGOAT` is declared and assigned the value of `bestPlayer`,
which means that as of line 60 `theGOAT.name` === 'Lebron James' === `bestPlayer.name`. Then on line 61, `bestPlayer.name` is reassigned the value,
'Kevin Durant', but because 'theGOAT' and 'bestPlayer' are pointing to the same location in memory, the reassignment applies to both. So on line 62
when `theGOAT.name` is logged, 'Kevin Durant' is the output because theGOAT and bestPlayer are always equal.


6. **What is the value of `b` after this code runs? Explain why this is the case.**
  ```javascript
  let a = 10;
  let b = a;
  a += 10;

  console.log(a);
  console.log(b);
  ```
`a` and `b` are initialized with primitive data types, therefore on line 73 when `b` is assigned a value of `a` 
it is passed the actual value of `a`, rather than a location in memory to be referenced. Thus when `a` is changed, `b` 
remains the same because it references its own location in memory containing a copy of `a`'s value.


7. **Where does the following code throw an error? What type of error? Why?**
  ```javascript
  const bffs = 'Enmanuel Laisha';
  bffs = 'Enmanuel Laisha Cielo';

  console.log(bffs);
  ```
The above code throws a TypeError on line 87, because `bffs` is declared with `const` on line 86, then reassigned on line 87,
This throws an error because one of the properties of `const` is to not allow reassignment.

8. **Wait, why doesn't the code below throw an error?! 🧐 What does this demonstrate?**
  ```javascript
  const bffs = ['Enmanuel', 'Laisha'];
  bffs.push('Cielo');

  console.log(bffs);
  ```
Although `bffs` is declared using `const`, it is an array in this case which is not a primitive data type, therefore it is mutable.
On line 97 the string 'Cielo' is pushed onto the `bffs` array. `bffs` never gets reassigned, the array it's assigned to is simply mutated.
Thus it does not break the rules of `const`.

9. **What is the purpose of _rest parameters_? How do we use them? Explain how do they differ from the `arguments` object. Illustrate the use of rest parameters by writing a function that takes any number of integers as arguments and returns their sum.**

  ```javascript
  sum(1, 2, 10); // 13
  sum(5); // 5
  sum(100, 200, 800, 1, 1, 1); // 1103;
  ```
Rest parameters allow one to accept several instances of data into one function argument. 

Ex
const newFunction = function(parameterOne, parameterTwo, ...restArr){
  
  
    const add = (a, b) => a + b;

    const sum = restArr.reduce(add);
    
  return  parameterOne + parameterTwo + sum;
}

newFunction (3, 2, 5, 7, 10);

The code above will return 27, because the rest parameter takes everything after the first two parameters and joins them together 
into one array, which in theory means you can have an indefinite amount of them. Meanwhile the `arguments` object which consists of the values passed 
when the function is invoked are limited to the amount of parameters the function can take.


10. **What does the following code log? Why?**
  ```javascript
  let theCreator = 'Devonte';

  function shoutOut() {
    theCreator = 'Peter';
  }

  shoutOut();
  console.log(`The best designer in the room is ${theCreator}`);
  ```
The variable is declared in the global scope with `let` then reassigned within the function `shoutOut()`, which is invoke right before the console log,
therefor the value it is reassigned to logs: "The best designer in the room is Peter".


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
The above code logs : Paul is the hardest working person in the room.
                      Laisha is also the hardest working person in the room.

This is because the variable `theHustler` is never reassigned, only declared within two different scopes (global & local),
Thus the function invocation on line 156 logs "Paul is the hardest working person in the room." while the code on line 157 logs :
"Laisha is also the hardest working person in the room."

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
The following code logs:
'829 Jefferson Ave.'
'Our address is 7 Marcus Garvey'

For the exact same reasons as the question above.

13. **What do we mean when we say that JavaScript passes variables _by value_?**


14. **What does it mean to _pass by reference_? In what ways do arrays and objects appear to be passed by reference in JavaScript?**

