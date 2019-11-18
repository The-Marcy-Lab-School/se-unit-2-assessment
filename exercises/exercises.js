// Question 1
function stripPunctuation(string) {
    const alphanumeric = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let empStr ='';
    for (let i = 0; i < string.length; i++){
        if (alphanumeric.includes(string[i].toLowerCase())){
            empStr += string[i];
        }
    }
    return empStr;
}

// Question 2
function rotateArray(arr) {
    let newArr = [];
    let empArr = [];
    if (!Array.isArray(arr)){
        return undefined;
    }else if (arr.length <= 0){
        return empArr;
    }
    newArr = arr.slice();
    let firstLetter = newArr.shift();
    newArr.push(firstLetter);
    return newArr;
}

// Question 3
function letterCaseCounts(string) {
    let obj = {
      lowercase: 0,
      uppercase: 0,
      neither: 0
    };
    let count = 0;
    for (let i = 0; i< string.length; i++){
        if (!string[i].match(/[A-Z]/gi)){
            obj.neither += 1;
         }else if (string[i].match(/[A-Z]/g)){
             obj.uppercase += 1;
         }else{
             obj.lowercase += 1;
         }
    }
    return obj;
}

// Don't write below this line...
module.exports = { stripPunctuation, rotateArray, letterCaseCounts };
