/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let totalSum = 0,
    leftSum = 0;

  nums.forEach((e) => {
    totalSum += e;
  });
  for (let i = 0; i < nums.length; i++) {
    if (totalSum - leftSum - nums[i] === leftSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};
// @lc code=end

/*
1. Calculate sum of elements in array to get totalSum

2. create variable to track the numbers seen on left side with leftSum.

3. create conditional where we check if 28 the totalSum of the elements in the array minus the left index minus the current element is equal to zero. If not then keep incrementing the leftIndex by the element in that current index
        [1,7,3,6,5,6] 28

        leftIndex = 0
        leftIndex = 0 + 1
        leftIndex = 0 + 1 + 7
        leftIndex = 0 + 1 + 7 + 3


    array  leftIndex current element = leftIndex
        28 - 0 - 1 = 0
        28 - 1 - 7 = 1
        28 - 8 - 3 = 8
        28 - 11 - 6 = 11 True

4. So when the condition is true we return i
5. if we dont find index increment leftSum += nums[i]
6. if we did not hit the conditional return - 1 as the problem states
*/
