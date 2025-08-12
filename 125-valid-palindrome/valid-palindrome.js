/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let cleaned1 = s.toLowerCase();
    let cleaned = '';

    for (let i = 0; i < cleaned1.length ; i++){
        let code = cleaned1.charCodeAt(i);
        if ((code >= 48 && code <= 57) || (code >= 97 && code <= 122)){
            cleaned += cleaned1[i];
        }
    }

    let left = 0;
    let right = cleaned.length - 1;

    while(left < right) {
        if (cleaned[left] !== cleaned[right]){
            return false;
        }
        left++;
        right--;
    }

    return true;
};
