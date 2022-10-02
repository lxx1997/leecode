/**
 * @param {number} num
 * @return {number}
 */
 var maximumSwap = function(num) {
  let nums = []
  while(num / 10 > 0) {
    const mod = num % 10
    nums.push(mod)
    num = (num - mod) / 10
  }
  for(let i = nums.length - 1; i >= 0; i--) {
    let max = nums[i], maxIndex = i
    for(let j = i; j >= 0; j--) {
      if(nums[j] > max) {
        max = nums[j]
        maxIndex = j
      }
    }
    if(maxIndex !== i) {
      nums[maxIndex] = nums[i]
      nums[i] = max
      break;
    }
  }
  let total = 0
  for(let i = nums.length - 1; i >= 0; i--) {
    total += nums[i] * Math.pow(10, i)
  }
  return total
};
