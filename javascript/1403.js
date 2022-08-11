/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    nums = nums.sort((a,b) => b - a)
    let total = nums.reduce((total, item) => total += item, 0)
    let index = 0, mix = 0
    for(let i = 0; i < nums.length; i++) {
        mix += nums[i]
        if(mix > total - mix) {
            index = i
            break;
        }
    }
    return nums.splice(0, index + 1)
};