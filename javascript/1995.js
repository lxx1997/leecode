/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
    if(nums.length < 4) return 0
    let num = 0
    for(let i = 0; i < nums.length - 3; i++) {
        for(let j = i+1; j < nums.length - 2; j++) {
            for(let n = j+1; n < nums.length - 1; n++) {
                for(let m = n+1; m < nums.length; m++) {
                    if(nums[i] + nums[j] + nums[n] == nums[m]) num++
                }
            }
        }
    }
    return num
};