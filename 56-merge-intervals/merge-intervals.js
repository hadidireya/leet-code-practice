/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    if (intervals.length === 0)return[];

  intervals.sort((start, end) => start[0] - end[0]);


    let current = intervals[0];

    let result = [];

    for (let i = 1 ; i < intervals.length ; i++){

        let next = intervals[i];

        if((next[0] <= current[1])){

            current [1] = Math.max(current [1],next[1]);

        }
        else{
            result.push(current);

            current = next;
        }
        
    }
    result.push(current);

    return result;


};