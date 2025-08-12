/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    s = s.toLocaleLowerCase();
    let cleaned = '';

    for (let i = 0; i < s.length ; i++){
        let code = s.charCodeAt(i);
        if ((code >= 48 && code <= 57) || (code >= 97 && code <= 122)){
            cleaned += s[i];
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


}
