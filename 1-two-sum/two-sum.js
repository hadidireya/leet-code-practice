/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let output = [];
    let current = nums[0];

    for (let i = 0; i <nums.length ;i++){
        for ( let j = i +1 ; j < nums.length ; j++){
            if (nums[i]+nums[j] === target ){
                output = [i,j]
            }
        }
    }
return output ;
 
};