# Unit 2 Assessment - JavaScript Fundamentals
## Written Assessment

1. **What is hoisting? Describe how hoisting affects variable _and_ function declarations. Provide a code snippet to illustrate hoisting for both.** 

Hoisting is when ```var```variables and function declarations are evaluated prior to the execution of the code in the compiling phase and are kept in the codes memory within its respective scope.
  ``` javaScript
	
	function favNums(num){
	  console.log (My favorite numbers are ${num})
	}	
	favNums([3,4,5])
	
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
It throws an error because ```status``` is being called outside of the functions scope.

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
It does not throw an error because ```var```  has a universal scope so it is able to be called outside of the functions scope.


4. **In JavaScript, we can declare variables with `var`, `let`, and `const`. What are the differences between each? Be sure to comment on how each declaration impacts the _scope_, _reassignment_, and _hoisting_ of variables.**

```Var``` is hoisted with an initialization of undefined , can be redeclared and has an universal scope while ```let``` and ``const``  are locally scoped and are also hoisted but with a value of not defined. ```Let``` can only be assigned once in a scope but within the same scope ``let`` can be updated while ``const`` can not be re-assigned or updated.

5. **What does the following code log? Explain why?**
  ```javascript
  let bestPlayer = {name: "Lebron James"};
  let theGOAT = bestPlayer;
  bestPlayer.name = "Kevin Durant";
  console.log(theGOAT.name);
  ```
It logs ```Kevin Durant``` because ``bestPlayer.name`` was mutated from being lebron james to Kevin Durant. 
6. **What is the value of `b` after this code runs? Explain why this is the case.**
  ```javascript
  let a = 10;
  let b = a;
  a += 10;

  console.log(a);
  console.log(b);
  ```
The value remains 10 because numbers are a primitive data type and primitive data types can not be reassigned.
7. **Where does the following code throw an error? What type of error? Why?**
  ```javascript
  const bffs = 'Enmanuel Laisha';
  bffs = 'Enmanuel Laisha Cielo';

  console.log(bffs);
  ```
It throws an ``` Assignment to constant variable``` error because the code is attempting to reassign a constant variable.
8. **Wait, why doesn't the code below throw an error?! 🧐 What does this demonstrate?**
  ```javascript
  const bffs = ['Enmanuel', 'Laisha'];
  bffs.push('Cielo');

  console.log(bffs);
  ```
It doesn't throw an error because the code is not reassigning the variable but instead mutating it with the ```Array.prototype.push``` method.

9. **What is the purpose of _rest parameters_? How do we use them? Explain how do they differ from the `arguments` object. Illustrate the use of rest parameters by writing a function that takes any number of integers as arguments and returns their sum.**

  ```javascript
  sum(1, 2, 10); // 13
  sum(5); // 5
  sum(100, 200, 800, 1, 1, 1); // 1103;
  ```
```javaScript
function sum(...numbers){
  let total = 0 
  for(let num of numbers){
    total += num
  }
  return total
}
```
The rest parameters stores a functions parameter into an array and its called by placing '...' before the parameters name in a function.

10. **What does the following code log? Why?**
  ```javascript
  let theCreator = 'Devonte';

  function shoutOut() {
    theCreator = 'Peter';
  }

  shoutOut();
  console.log(`The best designer in the room is ${theCreator}`.);
  ```
It logs ```The best designer in the room is Peter``` because the function will first check its own scope for a variable before going to the global scope.

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
It logs ``` Paul is the hardest working person in the room
Laisha is also the hardest working person in the room ```because a function will first check its own scope for a variable before going to the global scope.

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
The code logs ``` 829 Jefferson Ave. Our address is 7 Marcus Garvey``` because ``address`` is declared  and initalized in the global and function scope with 2 different values.
13. **What do we mean when we say that JavaScript passes variables _by value_?**
JavaScript passes _by value_ refers to primitive data types and how when setting a variable equal to another the value of the original variable is being copied to the new variable.
14. **What does it mean to _pass by reference_? In what ways do arrays and objects appear to be passed by reference in JavaScript?**
JavaScript passes _by reference_ refer to non primitive data types and how instead of holding the value it holds the reference to where the value is in the memory.
