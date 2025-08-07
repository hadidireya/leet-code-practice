/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length < numRows){ return s;}

    let direction = false;
    let counter = 0;

    let arrayText = new Array (numRows);
    arrayText.fill('');

    

    for (let i = 0 ; i < s.length ; i++ ){
      let current = s[i];
      arrayText[counter] += current;
       if (counter === 0 || counter >= numRows -1){
        direction = !direction;
       }
       if(direction){
        counter++
       }
       else{counter--};
    }
    return arrayText.join("");


};