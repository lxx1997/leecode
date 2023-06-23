/**
 * @param {number[]} nums
 * @return {number}
 */
 var unequalTriplets = function(nums) {
  let n = nums.length
  let num = 0
  for(let i = 0 ; i < n - 2; i++) {
    for(let j = i + 1; j < n - 1; j++) {
      while(nums[j] === nums[i] && j < n - 1) {
        j++
      }
      for(let k = j + 1; k < n; k++) {
        while(nums[k] === nums[i] || nums[k] === nums[j] && k < n) {
          k++
        }
        if(checkTriplets(nums[i], nums[j], nums[k]) && k < n) {
          num++
        }
      }
    }
  }
  return num
};

const checkTriplets = (n1, n2, n3) => {
  return n1 !== n2 && n3 !== n2 && n1 !== n3
}