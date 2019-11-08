// Question 1
function stripPunctuation() {
    str = str.split(' ');
    for (let i =0; i < str.length; i += 1){
    }
}

// Question 2
function rotateArray(array){
    let newArr = [];
    for(let i = 0; i < array.length; i += 1){
        let del = array.shift();
        newArr = array.push(del);
    }
    return newArr;
}
// Code above do not work.
let myArr = [1,2,3,4];
rotateArray(myArr);   


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
