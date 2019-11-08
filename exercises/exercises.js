// Question 1
function stripPunctuation(sentence) {
 let lowercaseletters = 'abcdefghijklmnopqrstuvwxyz';
  let uppercaseletters = lowercaseletters.toUpperCase();
  let numbers = '1234567890';
  let together = lowercaseletters.concat(uppercaseletters,numbers).split('')
  let newstring = sentence.split('');
  let final = [];
  for(let i = 0; i < newstring.length; i++){
    if(together.includes(newstring[i])){
       final = final + newstring[i];
    }else{
      delete newstring[i]
    }
}
  return final;
}

// Question 2
function rotateArray(original) {
let copy = [...original];
let x = original[0];
copy.shift();
copy.push(x)
console.log(copy)
}

// Question 3
function letterCaseCounts() {

}

// Don't write below this line...
module.exports = { stripPunctuation, rotateArray, letterCaseCounts };
