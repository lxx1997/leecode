/**
 * @param {number[]} nums
 * @return {number}
 */
 var specialArray = function(nums) {
  const numHash = {}
  for(let i = 0; i < nums.length; i++) {
    if(!numHash[nums[i]]) {
      numHash[nums[i]] = 0
    }
    numHash[nums[i]]++
  }
  let max = 1000, min = 0, half = (max + min) >> 1
  while(max >= min) {
    let total = Object.keys(numHash).reduce((total, item) => {
      if(item >= half) {
        total += numHash[item]
      }
      return total
    } , 0)
    if(total > half) {
      min = half + 1
      half = (max + min) >> 1
    } else if(total < half) {
      max = half - 1
      half = (max + min) >> 1
    } else {
      return half
    }
  }
  return - 1
};