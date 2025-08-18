/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 2) return n;
  let one = 1, two = 1;
  for (let i = n - 1; i > 0; i--) {
    const temp = one;
    one = one + two;
    two = temp;
  }
  return one;
};
