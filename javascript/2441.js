/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxK = function(nums) {
  let numsSet = new Set()
  let num = -1
  for(let i = 0; i < nums.length; i++) {
    let abs = -nums[i]
    if(numsSet.has(nums[i])) {
      num = Math.max(Math.abs(abs), num)
    } else {
      numsSet.add(abs)
    }
  }
  return num
};