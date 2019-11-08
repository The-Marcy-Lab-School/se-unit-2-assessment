// Question 1
function stripPunctuation(string) {
  let newString = string.split("")
  let finalString = "";

  for (i = 0; i < newString.length; i++) {
    
    if(newString[i].match(/^[a-z0-9]+$/i) !== null) {  // Checks if Any letters A-Z or Numbers 0-9 are present within string
      finalString = finalString + newString[i]
      
   }
 }
 return finalString
}

// Question 2
function rotateArray(array) {

  let newArray = []; //empty
  newArray = array; //my New Array
  let firstElement;
  firstElement = newArray[0]
  let finalArray = []; // The output, empty array for now

// Conditionals
if (Array.isArray(newArray) == false || undefined) return undefined; //end it here
if (newArray == []) return [];//dont even run it


for(i = 1; i < newArray.length; i++) {
  finalArray[i - 1] = newArray[i];
}
  finalArray[newArray.length - 1] = firstElement;
  return finalArray
}


// Question 3
function letterCaseCounts() {

}

// Don't write below this line...
module.exports = { stripPunctuation, rotateArray, letterCaseCounts };
