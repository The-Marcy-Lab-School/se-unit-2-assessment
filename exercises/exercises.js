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
function rotateArray(arrayIn) {
  let outPut;
  if (typeof (arrayIn) !== 'object') {
    return outPut;
  }
  if (arrayIn.length !== 0) {
    outPut = [];
    for (let i = 1; i < arrayIn.length; i += 1) {
      outPut.push(arrayIn[i]);
    }
    outPut.push(arrayIn[0]);
    return outPut;
  }
  outPut = [];
  return outPut;
}

// Question 3
function letterCaseCounts(phrase) {
  const lowerCasedChars = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'e', 'i', 'o', 'u'];
  const upperCasedChars = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'E', 'I', 'O', 'U'];
  // Helpers
  function lowerCaseCount () {
    let count = 0;
    for (const char of phrase) {
      if (lowerCasedChars.includes(char)) {
        count += 1;
      }
    }
    return count;
  }
  function upperCaseCount () {
    let count = 0;
    for (const char of phrase) {
      if (upperCasedChars.includes(char)) {
        count += 1;
      }
    }
    return count;
  }
  function nonAlphaNumCount () {
    return phrase.length - upperCaseCount() - lowerCaseCount();
  }
  const phraseCaseCount = {
    lowercase: lowerCaseCount(),
    uppercase: upperCaseCount(),
    neither: nonAlphaNumCount(),
  };
  return phraseCaseCount;
}

// Don't write below this line...
module.exports = { stripPunctuation, rotateArray, letterCaseCounts };
