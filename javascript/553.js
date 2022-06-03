/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
    if (nums.length <= 2) return nums.join("/")
    let str = nums.map(item => item)
    while (nums.length > 2) {
        let i = nums.length - 1
        let exp1 = nums[i - 1] / nums[i],
            exp2 = nums[i - 2] / nums[i - 1]
        if (exp1 < exp2) {
            str.splice(i - 1, 1, `${str[i - 1]}/${str[i]}`)
            nums.splice(i - 2, 2, exp1)
        } else {
            str.splice(i - 2, 1, `(${str[i - 1]}/${str[i]})`)
            nums.splice(i - 3, 2, exp2)
        }
    }
    return `${str[0]}/(${str[1]})`
};
optimalDivision([1000, 100, 10, 2])