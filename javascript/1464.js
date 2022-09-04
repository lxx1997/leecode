/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums = nums.sort((a, b) => a - b)
    return (nums.pop() - 1) * (nums.pop() - 1)
};