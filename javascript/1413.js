/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let startValue = 0, total = 0

    for(let i = 0; i < nums.length; i++) {
        total += nums[i]
        if(total < 1) {
            startValue = Math.abs(total) + 1
        }
    }
    return startValue
};