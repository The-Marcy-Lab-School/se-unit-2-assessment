// Question 1
function stripPunctuation(string) {
    let alphanumeric = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let empStr ='';
    for (let i=0; i< string.length; i++){
        if (alphanumeric.includes(string[i].toLowerCase())){
            empStr+=string[i];
        }
    }
    return empStr;
}

// Question 2
function rotateArray(arr) {
    let newArr=[];
    let empArr = [];
    if (!Array.isArray(arr)){
        return undefined;
    }else if (arr.length<=0){
        return empArr;
    }
    for (let i=0; i<arr.length; i++){
        newArr[i]=arr[i];
    }
    let firstLetter = newArr.shift();
    newArr.push(firstLetter);
    return newArr;
}

// Question 3
function letterCaseCounts(string) {
    let obj={};
    for(let i = 0; i<string.length; i++){
        if (string[i]===isLower()|| string[i]===isUpper()){
            
        }
    }
    

}

function isLower(word){
    let lower= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for(let i=0; i<word.length;i++){
        if (lower.includes(word[i])){
            return true;
        }
    }
    return false;
}

function isUpper(word){
    let lower= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    for(let i=0; i<word.length;i++){
        if (lower.includes(word[i])){
            return true;
        }
    }
    return false;
}

// Don't write below this line...
module.exports = { stripPunctuation, rotateArray, letterCaseCounts };
