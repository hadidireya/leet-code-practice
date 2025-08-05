/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    const roman = {
    
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
}
let convertedNumber = 0;

    for (let i= 0 ; i < s.length ; i++){
    let current = roman [s[i]];
    if (roman[s[i+1]] > current){
        convertedNumber += roman[s[i+1]] -current ;
        i++
    }
    else {
        convertedNumber += current;
    }
    }

    return convertedNumber;
};