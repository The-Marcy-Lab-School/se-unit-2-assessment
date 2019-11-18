// Question 1
function stripPunctuation(phrase) {
  const alphanums = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const finalArr = [];
  for (let i = 0; i < phrase.length; i += 1) {
    if (alphanums.includes(phrase[i])) {
      finalArr.push(phrase[i]);
    }
  }
  return finalArr.join('');
}

// Question 2
function rotateArray (arrayIn) {
  const finalArr = [];
  if (!Array.isArray(arrayIn)) {
    return undefined;
  }
  if (arrayIn.length > 1) {
    for (let i = 1; i < arrayIn.length; i += 1) {
      finalArr.push(arrayIn[i]);
    }
    finalArr.push(arrayIn[0]);
    return finalArr;
  }
  return arrayIn;
}

// Question 3
const lowerCasedChars = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'e', 'i', 'o', 'u'];
const upperCasedChars = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'E', 'I', 'O', 'U'];
function letterCaseCounts(phrase) {
  const charCaseCounts = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };
  for (const char of phrase) {
    if (lowerCasedChars.includes(char)) {
      charCaseCounts.lowercase += 1;
    } else if (upperCasedChars.includes(char)) {
      charCaseCounts.uppercase += 1;
    } else {
      charCaseCounts.neither += 1;
    }
  }
  return charCaseCounts;
}

// Don't write below this line...
module.exports = { stripPunctuation, rotateArray, letterCaseCounts };
