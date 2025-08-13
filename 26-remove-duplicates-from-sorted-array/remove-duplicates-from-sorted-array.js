/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    if (nums.length === 0 || nums.length === 1){

        return nums.length ;
    }


    let i = 0 ; 
    for ( let j =1 ;j < nums.length ;j++ ){

        if (nums[j] !== nums[i]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i +1;
};