// Question 1
const stripPunctuation = function(str){
  let strArr = str.split('');
  let newstrArr = '';
  for(let i = 0; i< strArr.length; i += 1){
    if((strArr[i] >= 'a' && strArr[i] <= 'z') || (strArr[i] >= 'A' && strArr[i] <= 'Z')){
      newstrArr += strArr[i];
    } else if(Number(strArr[i])){
      newstrArr += strArr[i];
    }
}
  return newstrArr;
};

stripPunctuation('abc+def+ghi!!!');
stripPunctuation('+1 919-644-9821');
stripPunctuation("Don't play with me!");

// Question 2
function rotateArray(arr) {
  let newArr;
  if (!Array.isArray(arr)) {
    return undefined;
  }
  if (arr.length !== 0) {
    newArr = arr.slice('');

    const firstEl = newArr.shift();
    newArr.push(firstEl);
    return newArr;
  }
  return [];
};	

rotateArray([{ a: 2 }, [1, 2], 3]);


// Question 3
function letterCaseCounts(name){    
    const stats = {};

    stats[`lowercase`] = 0;
    stats[`uppercase`] = 0;
    stats[`neither`]= 0;

    for(let i =0; i< name.length; i++){
        if(name[i] >= 'A' && name[i] <= 'Z'){
            stats[`uppercase`] ++;
        } else if(name[i] >= 'a' && name[i] <= 'z'){
            stats[`lowercase`] ++;
        } else if(name[i] >= 0 && name[i] <= 9){
            stats[`neither`] ++;
        }
    }
    return stats;
}
//Kind of work 

// Don't write below this line...
module.exports = { stripPunctuation, rotateArray, letterCaseCounts };
