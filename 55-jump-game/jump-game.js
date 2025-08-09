/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    if (nums.length <= 1)return true;

    let target = nums.length -1;
    let canReach = false;

    for(let i =nums.length -1; i >= 0 ; i--){
        if (i + nums[i]>= target){
            target = i;
        }
    }
    if (target === 0){
        canReach = true;
    }



return canReach;
};