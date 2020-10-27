var twoSum = function(nums, target) {
    let left = 0,
        right = nums.length - 1;
    while(left < right) {
        const currentSum = nums[left] + nums[right];
        if (currentSum === target) {
            return[left, right];
        }
        
        if (target > currentSum) {
            left += 1; //we need a pair witha bigger sum
        }else {
            right -= 1; // we need a pair with a smaller sum
            
        }
    }
    
    return[-1, -1];
            
        
    }

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));