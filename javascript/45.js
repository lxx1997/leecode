/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
  let l = nums.length
  let deps = new Array(l).fill(Infinity)
  deps[0] = 0
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    for(let j = i + 1; j <= i + num && j < nums.length; j++) {
      deps[j] = Math.min(deps[i] + 1, deps[j]) 
    }
  }
  return deps[l - 1]
}; 