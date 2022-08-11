/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let sum = [], hash = new Set();
    if(nums.length < 3) return sum
    nums = nums.sort((a, b) => a - b)
    for(let i = 0; i < nums.length - 2; i++) {
        let first = nums[i]
        if(first > 0) break;
        let l = i + 1, r = nums.length - 1
        while(l < r) {
            let second = nums[l], third = nums[r]
            let s = first + second + third
            if(s < 0){ l++; continue;}// 和小于0，说明负数过大，所以左指针右移，减少
            if(s > 0){ r--; continue;}// 和大于0，说明正数过大，所以右指针左移，减少
            hash.add(`${first},${second},${third}`)
            l++;
            r--;

        }
    }
    return Array.from(hash).map(item => item.split(",").map(item => +item))
};
console.log(threeSum([-13,5,13,12,-2,-11,-1,12,-3,0,-3,-7,-7,-5,-3,-15,-2,14,14,13,6,-11,-11,5,-15,-14,5,-5,-2,0,3,-8,-10,-7,11,-5,-10,-5,-7,-6,2,5,3,2,7,7,3,-10,-2,2,-12,-11,-1,14,10,-9,-15,-8,-7,-9,7,3,-2,5,11,-13,-15,8,-3,-7,-12,7,5,-2,-6,-3,-10,4,2,-5,14,-3,-1,-10,-3,-14,-4,-3,-7,-4,3,8,14,9,-2,10,11,-10,-4,-15,-9,-1,-1,3,4,1,8,1]))