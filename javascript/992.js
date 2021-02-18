// 992. K 个不同整数的子数组
// 给定一个正整数数组 A，如果 A 的某个子数组中不同整数的个数恰好为 K，则称 A 的这个连续、不一定独立的子数组为好子数组。
// （例如，[1,2,3,1,2] 中有 3 个不同的整数：1，2，以及 3。）
// 返回 A 中好子数组的数目。

var subarraysWithKDistinct = function(arr, k) {
  let length = arr.length
  let num1 = new Array(length+1).fill(0) // 映射 将相同的值的属性映射成 个数表示
  let num2 = new Array(length+1).fill(0)
  let tot1 = 0, left = 0, left1 = 0
  let tot2 = 0, right = 0
  let ret = 0 // 好子数组个数
  while(right < length) {
    if(num1[arr[right]] == 0) {
      tot1++
    }
    num1[arr[right]]++
    if(num2[arr[right]] == 0) {
      tot2++
    }
    num2[arr[right]]++
    while(tot1 > k) {
      console.log(tot1, 'left1')
      num1[arr[left]]--
      if(num1[arr[left]] === 0) {
        tot1--
      }
      left++
    }
    while(tot2 > k - 1) {
      console.log(tot2, 'left2')
      num2[arr[left1]]--
      if(num2[arr[left1]] === 0) {
        tot2--
      }
      left1++
    }
    ret += left1 - left
    right++
  }
  return ret
};

console.log(subarraysWithKDistinct(A = [1,2,1,2,3], K = 2))