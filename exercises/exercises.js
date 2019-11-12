// Question 1
function stripPunctuation(str) {
  const newStr = str.split('');
  let result = '';

  for (let i = 0; i < newStr.length; i += 1) {
    console.log(newStr);
    if ((newStr[i] >= 'a' && newStr[i] <= 'z') || (newStr[i] >= 'A' && newStr[i] <= 'Z')) {
      result += newStr[i];
    } else if (Number(newStr[i])) {
      result += newStr[i];
    }
  }
  return result;
}

// Question 2
function rotateArray(array) {
  let empty = [];
  
  if (!Array.isArray(array)) {
    return undefined;
  }
  
  if (array.length === 0) {
    return empty;
  }

  const arrayCopy = array.slice();
  arrayCopy.push(arrayCopy.shift());
  return arrayCopy;
}

// Question 3
function letterCaseCounts(str) {
  const obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  const strArr = str.split('');

  for (let i = 0; i < strArr.length; i += 1) {
    if (strArr[i] >= 'A' && strArr[i] <= 'Z') {
      obj.uppercase += 1;
    } else if (strArr[i] >= 'a' && strArr[i] <= 'z') {
      obj.lowercase += 1;
    } else {
      obj.neither += 1;
    }
  }
  return obj;
}

// Don't write below this line...
module.exports = { stripPunctuation, rotateArray, letterCaseCounts };
