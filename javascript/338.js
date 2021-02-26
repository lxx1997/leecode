// 338. 比特位计数
// 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let nums = new Array(num+1).fill(0)
  for(let k = 1;k <= num; k++) {
    let j = 0, i = k
    while(i >= 1) {
      if(i % 2 === 1) {
        j++
        i = (i - 1) / 2
      } else {
        i = i / 2
      }
    }
    nums[k] = j
  }
  return nums
};

console.log(countBits(2), [0,1,1])
console.log(countBits(5), [0,1,1,2,1,2])