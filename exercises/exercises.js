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
            delete arr[i];
        }
    }return newString;
}

// Question 2
function rotateArray(arr1) {
    const arr2 = arr1.slice();
    let removeFirst;
    let newArr;
    
    if(!Array.isArray(arr1)){
        return undefined;
    }
    else if (arr1.length < 1) {
        return arr1;
    }
    else{
        removeFirst = arr2.shift();
        newArr = arr2.push(removeFirst);
    }return newArr;
}

// Question 3
function letterCaseCounts() {

}

// Don't write below this line...
module.exports = { stripPunctuation, rotateArray, letterCaseCounts };
