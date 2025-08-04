/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

    let max = Math.max(...candies);
    let result = candies.map(candie => candie + extraCandies >= max );
    return result;
    
};