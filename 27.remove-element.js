/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let indexCounter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[indexCounter] = nums[i];
      indexCounter++;
    }
  }
  return indexCounter;
};
// @lc code=end
