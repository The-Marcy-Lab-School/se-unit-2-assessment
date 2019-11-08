# Unit 2 Assessment - JavaScript Fundamentals
## Written Assessment

1. **What is hoisting? Describe how hoisting affects variable _and_ function declarations. Provide a code snippet to illustrate hoisting for both.** 
Answer: Hoisting is the process of JavaScript uplifting our functions calling to the top of our code.



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
Answer: This code throw an error because we are trying to redeclared status twice on line 13 and line 15 we only need to declare it once. Also since we declare it inside a block scope `console.log` on line 18 does not see status so it is `undefined` unless we `console log` inside our block scope or if we declarate once status outside our block scope.


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
Answer: `Var` and `let` values can be reassign , `const` value cannot be reassign. `Let` and `const` are local block scope. `Var` is a function scope. Only `var` can be hoisted because it is a global scope.



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
The value of `b` after this code runs is still 10 because on line 57 we declared `a` and assigned it the value of `a` which hold a number value of `10`. On line 58 all we did was add 10 to `a` again and we never reassign `b` the new value of `a` so it remain the first value(10).

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
Answer: The purpose of _rest parameters_ is to be able to use our function whenever we want to take an indefinite number of arguments.They differ from the `arguments` object because the `arguments` object is arraylike and not an array.




10. **What does the following code log? Why?**
  ```javascript
  let theCreator = 'Devonte';

  function shoutOut() {
    theCreator = 'Peter';
  }

  shoutOut();
  console.log(`The best designer in the room is ${theCreator}`.);
  ```


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


13. **What do we mean when we say that JavaScript passes variables _by value_?**


14. **What does it mean to _pass by reference_? In what ways do arrays and objects appear to be passed by reference in JavaScript?**

