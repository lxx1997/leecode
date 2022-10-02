/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function(nums) {
  let hash = {}
  for(let i = 0; i < nums.length; i++) {
    const item = nums[i]
    if(!hash[item]) {
      hash[item] = 0
    }
    hash[item]++
  }
  const arr = Object.entries(hash).sort((a, b) => b[0] - a[0]).sort((a, b) => a[1] - b[1])
  return arr.reduce((total, item) => {
    return total.concat(new Array(item[1]).fill(item[0]))
  }, [])
};