/**
 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {
  if(!nums.length) return []
nums = nums.sort((a, b) => a - b)
let arr = [], start = nums[0], end = nums[0]
for(let i = 1; i < nums.length; i++) {
  if(nums[i] - end === 1) {
    end = nums[i]
  } else {
      if(start === end) {
          arr.push(`${start}`)
      } else {
          arr.push(`${start}->${end}`)
      }
    start = nums[i]
    end = nums[i]
  }
}
  if(start === end) {
      arr.push(`${start}`)
  } else {
      arr.push(`${start}->${end}`)
  }
return arr
};