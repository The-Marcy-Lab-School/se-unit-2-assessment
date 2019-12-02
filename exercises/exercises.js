// Question 1
function stripPunctuation(string) {
  const newString = string.split('');
  let finalString = '';

  for (i = 0; i < newString.length; i++) {
    if (newString[i].match(/^[a-z0-9]+$/i) !== null) { // Checks if Any letters A-Z or Numbers 0-9 are present within string
      finalString += newString[i];
    }
  }
  return finalString;
}

// Question 2
function rotateArray(arr) {
  let newArray = arr; // my New Array
  let firstElement = arr[0];
  lastElement = newArray[newArray.length]
  const finalArray = []; // The output, empty array for now

  // Conditionals
  if (Array.isArray(newArray) == false || undefined) return undefined; // end it here
  if (newArray == []) return [];// dont even run it


  for (i = 1; i < newArray.length; i++) {
    finalArray[i - 1] = newArray[i];
  }
  finalArray[newArray.length - 1] = firstElement;
  return finalArray;
}

// Question 3
const letterCaseCounts = (str) => { 
   const splitString = str.split('');
   let finalObj = {uppercase: 0, lowercase: 0, neither: 0};

    for (letter of splitString) {
    if (letter.charCodeAt() > 64 && letter.charCodeAt() < 91) {
      finalObj.uppercase = finalObj.uppercase + 1;
    } else if (letter.charCodeAt() < 123 && letter.charCodeAt() > 96) {
       finalObj.lowercase = finalObj.lowercase + 1;
    } else {
      finalObj.neither = finalObj.neither + 1;
    }
  }
  return finalObj;
}

// Don't write below this line...
module.exports = { stripPunctuation, rotateArray, letterCaseCounts };
