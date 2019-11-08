// Question 1
function stripPunctuation(str) {
let newString = '';
 for (let letter of str) {
        if (letter.charCodeAt() > 64 && letter.charCodeAt() < 91) {
            newString += letter;
        }
        if(letter.charCodeAt() > 96 && letter.charCodeAt() < 123){
            newString += letter;
        }
        if(letter.charCodeAt() > 47 && letter.charCodeAt() < 58){
            newString += letter;
        }
    }
    return newString;
}

// Question 2
function rotateArray(arr) {
    if(Array.isArray(arr) && arr.length === 0){
        return [];
    }
    else if(!Array.isArray(arr)){
        return undefined;
    }
    let newArr = arr.slice();
    let item = newArr.shift();
    
    newArr.push(item);
    return newArr;
  
}
// Question 3
function letterCaseCounts(str) {
   let count = { 
       lowercase: 0, 
       uppercase: 0, 
       neither: 0 };
     for(let letter of str){
         if(letter.charCodeAt() > 64 && letter.charCodeAt() < 91){
             count.uppercase += 1;
             continue;
         }
         if(letter.charCodeAt() > 96 && letter.charCodeAt() < 123){
             count.lowercase += 1;
             continue;
         }
         else{
             count.neither += 1;
         }
     }
     return count;

}
// Don't write below this line...
module.exports = { stripPunctuation, rotateArray, letterCaseCounts };
