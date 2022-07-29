/*
 * @lc app=leetcode id=1480 lang=javascript
 *
 * [1480] Running Sum of 1d Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let output = [];
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    counter = counter + nums[i];
    output.push(counter);
  }
  return output;
};
// @lc code=end
/*
1. create 2 variables, one for the counter and one for the output array[].

2. loop through array nums

3. Grab the num and add it to nums[i]. Assign it to the counter variable. counter = counter + nums[i];

4. Push the total into the output array

5. return the output array
*/
