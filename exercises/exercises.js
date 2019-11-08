// Question 1
function stripPunctuation(str) {
let arrStr = str.split('');
let stripStr = '';
for(let i = 0; i <= arrStr.length; i ++){
          if(arrStr[i].match(/[^0-9a-z]/i)){
              console.log(arrStr[i]);
              arrStr.join();
              stripStr += arrStr[i];
        }
      }
    return stripStr;
}

// Question 2
function rotateArray(arr) {
    if(Array.isArray(arr)){
        return arr.reverse();
    }else if(arr === undefined){
    return undefined;
    }else{
        return undefined;
    }
}

// Question 3
function letterCaseCounts(str) {
    let arrStr = str.split('');
    let caseObj = {
        lowercase: 0, 
        uppercase: 0, 
        neither: 0
    }
    let lowercaseCount = 0;
    let uppercaseCount = 0;
    let neitherCount = 0; 
    console.log(arrStr.length);
    for(let i = 0; arrStr.length; i++)
        if(arrStr[i] === arrStr[i].toUpperCase()){
            caseObj.uppercase += 1;
        }else if(arrStr[i] === arrStr[i].toLowerCase()){
            caseObj.lowercase += 1;
        }else{
            caseObj.neither += 1;
        }
    }
    return caseObj;

}

letterCaseCounts('abCdef 123');
  // { lowercase: 5, uppercase: 1, neither: 4 }

  letterCaseCounts('AbCd +Ef');

// Don't write below this line...
module.exports = { stripPunctuation, rotateArray, letterCaseCounts };
