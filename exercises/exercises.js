// Question 1

function isLetter(str) {
  if ((str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) || (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122)) {
    return true;
  }
  return false;
}

function isNumber(str) {
  if ((str.charCodeAt(0) >= 48 && str.charCodeAt(0) <= 57)) {
    return true;
  }
  return false;
}

function stripPunctuation(input) {
  const arr = input.slice('');
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (isLetter(arr[i]) || isNumber(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr.join('');
}


// Question 2
function rotateArray(arr) {
  let newArr;

  if (!Array.isArray(arr)) {
    return undefined;
  }
  if (arr.length !== 0) {
    newArr = arr.slice('');

    const firstEl = newArr.shift();
    newArr.push(firstEl);
    return newArr;
  }
  return [];
}


// Question 3
function isUpperCase(str) {
  return str === str.toUpperCase(); // returns true if character is upper case
}


function isLowerCase(str) {
  return str === str.toLowerCase(); // returns true if character is lower case
}


function letterCaseCounts(str) {
  const caseOne = ['lowercase'];
  const caseTwo = ['uppercase'];
  const caseThree = ['neither'];

  const caseCounts = {};
  const strArray = str.split('');

  for (let i = 0; i < 3; i += 1) {
    let counterLow = 0;
    let counterUpp = 0;
    let counterNei = 0;

    for (let j = 0; j < strArray.length; j += 1) {
      if (isLowerCase(strArray[j]) && isLetter(strArray[j])) {
        counterLow += 1;
      }

      if (isUpperCase(strArray[j]) && isLetter(strArray[j])) {
        counterUpp += 1;
      }

      if (!isLetter(strArray[j])) {
        counterNei += 1;
      }

      caseCounts[`${caseOne[i]}`] = counterLow;
      caseCounts[`${caseTwo[i]}`] = counterUpp;
      caseCounts[`${caseThree[i]}`] = counterNei;
    }
  }
  delete caseCounts.undefined;
  return caseCounts;
}


// Don't write below this line...
module.exports = { stripPunctuation, rotateArray, letterCaseCounts };
