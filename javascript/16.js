/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a, b) => a - b)
    if(nums.length === 3) return nums.reduce((total, item) => total += item, 0)
    let mixSum = target, smallest = Infinity
    for(let i = 0; i < nums.length - 2; i++) {
        let total = nums[i]
        let left = i + 1, right = nums.length - 1
        while(left < right) {
            let sum = total + nums[left] + nums[right]
            let deffer = target - sum, absDeffer = Math.abs(deffer)
            if(absDeffer > smallest) {
                deffer < 0 ? right-- : left++
            } else {
                smallest = absDeffer
                mixSum = sum
                deffer < 0 ? right-- : left++
            }
        }
    }
    return mixSum;
};

console.log(threeSumClosest([1,1,1,1], 0), 3)