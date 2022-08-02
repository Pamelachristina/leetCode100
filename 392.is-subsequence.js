/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < s.length && pointer2 < t.length) {
    if (s[pointer1] === t[pointer2]) {
      pointer1++;
      pointer2++;
    } else {
      pointer2++;
    }
  }
  return pointer1 === s.length;
};
// @lc code=end
