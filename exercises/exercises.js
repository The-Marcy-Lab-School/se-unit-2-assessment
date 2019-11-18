// Question 1
function stripPunctuation(string) {
    let newString = ""; 
    let arr = string.split("");
    let alphabet = /^[a-z0-9]+$/i;     //used a regex 
    for(let i = 0; i < arr.length; i++){
        if(arr[i].match(alphabet)){
            newString += arr[i];
        }
        else{
            continue;
        }
    }
    return newString;
}

// Question 2
function rotateArray(arr1) {
    const arr2 = arr1.slice();
    let removeFirst;
    let newArr;
    
    if(!Array.isArray(arr1)) {
        return undefined;
    } else if (arr1.length < 1) {
        return arr1;
    } else {
        removeFirst = arr2.shift();
        newArr = arr2.push(removeFirst);
    } 
    return newArr;
}

// Question 3
 /**Write a function that takes a string, and returns an object containing the following three properties:

  * The number of characters in the string that are lowercase letters
  * The number of characters that are uppercase letters
  * The number of characters that are neither

  You may assume that the string will always contain at least one character.**/



function letterCaseCounts(string) {
    let objCount = {
        lowercase: 0, 
        uppercase: 0, 
        neither: 0
    };
    
    let strArray = string.split("")
    let lower = /^[a-z]/;
    let upper = /^[A-Z]/;
    let other = /^[0-9]/;
    
    for(let i = 0; i < strArray.length; i++) {
        if(strArray[i].match(lower)) {
           objCount.lowercase += 1; 
        } else if (strArray[i].match(upper)) {
           objCount.uppercase += 1; 
        } else {
            objCount.neither += 1;
        }
    }
    return objCount;
}

// Don't write below this line...
module.exports = { stripPunctuation, rotateArray, letterCaseCounts };
