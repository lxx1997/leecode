/**
 * @param {number[]} nums
 * @return {number}
 */
 var averageValue = function(nums) {
  let resultArr = nums.filter(num => num % 3 === 0 && num % 2 === 0)
  let l = resultArr.length
  if(!l) return 0
  let totalResult = resultArr.reduce((total, item) => total += item, 0)
  return Math.floor(totalResult / l)
};